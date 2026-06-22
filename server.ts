import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const submissionsPath = path.resolve(process.cwd(), "submissions.json");

// Middleware
app.use(express.json());
app.use(cors());

async function createTransporter() {
  const useEthereal = process.env.USE_ETHEREAL === "true" || process.env.NODE_ENV !== "production";

  if (useEthereal) {
    try {
      const testAccount = await nodemailer.createTestAccount();
      console.log("✉️  Using Ethereal test account for emails");
      return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } catch (err) {
      console.error("Failed to create Ethereal account:", err);
      throw err;
    }
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

const transporter = await createTransporter();

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Please fill all required fields (name, email, phone, message)",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      course: course || "",
      message,
      submittedAt: new Date().toISOString(),
    };

    const existingData = await fs
      .readFile(submissionsPath, "utf8")
      .then((content) => JSON.parse(content))
      .catch(() => []);

    existingData.push(submission);
    await fs.writeFile(submissionsPath, JSON.stringify(existingData, null, 2), "utf8");

    // Send email to admin
    const adminInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER || "omeducation1001@gmail.com",
      to: process.env.ADMIN_EMAIL || "omeducation1001@gmail.com",
      subject: `Counseling Enquiry from ${name}`,
      html: `
        <h2>New Counseling Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course/Country of Interest:</strong> ${course || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send confirmation email to user
    const userInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER || "no-reply@example.com",
      to: email,
      subject: "We received your enquiry - Daya Welfare Foundation",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We have received your counseling enquiry and will get back to you within 24 hours.</p>
        <p>Our team at Daya Welfare Foundation is excited to help you explore educational opportunities.</p>
        <p>Best regards,<br>Daya Welfare Foundation Team</p>
      `,
    });

    // If using Ethereal, provide preview URLs in logs and response for testing
    const adminPreview = nodemailer.getTestMessageUrl(adminInfo);
    const userPreview = nodemailer.getTestMessageUrl(userInfo);
    if (adminPreview || userPreview) {
      console.log("Admin preview:", adminPreview);
      console.log("User preview:", userPreview);
    }

    res.status(200).json({
      message: "Enquiry sent successfully! Check your email for confirmation.",
      submission,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    const devResponse: any = { message: "Failed to send enquiry. Please try again later." };
    if (process.env.NODE_ENV !== "production") {
      devResponse.error = (error as Error).message;
      devResponse.stack = (error as Error).stack;
    }
    res.status(500).json(devResponse);
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Admin-only submissions endpoint
app.get("/api/submissions", async (req, res) => {
  const adminSecret = req.headers["x-admin-secret"] as string | undefined;
  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const submissions = await fs
    .readFile(submissionsPath, "utf8")
    .then((content) => JSON.parse(content))
    .catch(() => []);

  res.json({ submissions });
});

// Admin-only delete submission endpoint
app.delete("/api/submissions/:id", async (req, res) => {
  const adminSecret = req.headers["x-admin-secret"] as string | undefined;
  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const submissionId = req.params.id;
  try {
    const existingData = await fs
      .readFile(submissionsPath, "utf8")
      .then((content) => JSON.parse(content))
      .catch(() => []);

    const filteredData = existingData.filter((item: { id: string }) => item.id !== submissionId);

    if (filteredData.length === existingData.length) {
      return res.status(404).json({ message: "Submission not found" });
    }

    await fs.writeFile(submissionsPath, JSON.stringify(filteredData, null, 2), "utf8");

    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    console.error("Delete submission error:", error);
    res.status(500).json({ message: "Failed to delete submission" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log("📧 Email service configured");
});
