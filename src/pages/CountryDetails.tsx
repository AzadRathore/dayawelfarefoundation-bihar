import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { getCountryBySlug } from "@/lib/countryCollegeData";

const CountryDetails = () => {
  const { countrySlug } = useParams();
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    return (
      <Layout>
        <PageHeader title="Country Not Found" subtitle="The selected country is not available." />
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-6">Please choose a country from the foreign studies page.</p>
            <Link to="/foreign" className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to countries
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader title={`${country.name} Colleges`} subtitle={`Top and affordable institutions for ${country.name} study abroad.`} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-4xl">{country.flag}</div>
              <h2 className="text-3xl font-bold text-foreground mt-3">{country.name}</h2>
            </div>
            <Link to="/foreign" className="inline-flex items-center rounded-full bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-soft hover:bg-border">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to countries
            </Link>
          </div>

          <div className="grid gap-8">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-2xl font-semibold mb-4">Top Colleges / Universities</h3>
              <div className="space-y-4">
                {country.top.map((entry) => (
                  <div key={entry.name} className="rounded-2xl border border-border p-5 bg-background/80">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-foreground">{entry.name}</h4>
                      <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{entry.strength}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{entry.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-2xl font-semibold mb-4">Moderate / Affordable Colleges / Universities</h3>
              <div className="space-y-4">
                {country.moderate.map((entry) => (
                  <div key={entry.name} className="rounded-2xl border border-border p-5 bg-background/80">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-foreground">{entry.name}</h4>
                      <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{entry.strength}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{entry.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CountryDetails;
