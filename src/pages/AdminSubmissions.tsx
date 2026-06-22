import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  submittedAt: string;
}

const AdminSubmissions = () => {
  const [secret, setSecret] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [viewed, setViewed] = useState(false);

  const loadSubmissions = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/submissions", {
        headers: { "x-admin-secret": secret },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Unable to load submissions");
      }

      const data = await response.json();
      setSubmissions(data.submissions || []);
      setViewed(true);
    } catch (err) {
      setError((err as Error).message);
      setSubmissions([]);
      setViewed(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!secret) {
      setError("Admin secret is required to delete submissions.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this submission?")) {
      return;
    }

    setDeletingId(id);
    setError("");

    try {
      const response = await fetch(`/api/submissions/${id}`, {
        method: "DELETE",
        headers: { "x-admin-secret": secret },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Unable to delete submission");
      }

      setSubmissions((prev) => prev.filter((submission) => submission.id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Layout>
      <PageHeader title="Admin Submissions" subtitle="Hidden admin page for saved form leads" />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm text-muted-foreground mb-4">
                This admin page is hidden from regular site users. Enter your admin secret to view saved contact submissions.
              </p>
              <div className="grid gap-4 md:grid-cols-[1fr_auto] items-end">
                <div>
                  <Label htmlFor="admin-secret">Admin Secret</Label>
                  <Input
                    id="admin-secret"
                    type="password"
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                    className="mt-1"
                    placeholder="Enter admin secret"
                  />
                </div>
                <Button onClick={loadSubmissions} disabled={loading || !secret} className="w-full md:w-auto">
                  {loading ? "Loading..." : "Load Submissions"}
                </Button>
              </div>
              {error && <div className="mt-4 text-sm text-destructive">{error}</div>}
            </div>

            {viewed && (
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-semibold mb-4">Saved Submissions</h2>
                {submissions.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No submissions found yet.</p>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div key={submission.id} className="rounded-2xl border border-border p-4 bg-background/80">
                        <div className="flex flex-wrap gap-4">
                          <div className="min-w-[160px] text-sm text-muted-foreground">Name</div>
                          <div className="font-medium">{submission.name}</div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <div className="min-w-[160px] text-sm text-muted-foreground">Email</div>
                          <div>{submission.email}</div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <div className="min-w-[160px] text-sm text-muted-foreground">Phone</div>
                          <div>{submission.phone}</div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <div className="min-w-[160px] text-sm text-muted-foreground">Course</div>
                          <div>{submission.course || "Not specified"}</div>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm text-muted-foreground">Message</div>
                          <div className="whitespace-pre-line">{submission.message}</div>
                        </div>
                        <div className="mt-3 text-xs text-muted-foreground">Submitted at: {new Date(submission.submittedAt).toLocaleString()}</div>
                        <div className="mt-4 flex gap-3">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteSubmission(submission.id)}
                            disabled={deletingId === submission.id}
                          >
                            {deletingId === submission.id ? "Deleting..." : "Delete"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminSubmissions;
