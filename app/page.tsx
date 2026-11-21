import { SitePage } from "@/components/site/SitePage";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/config";

export default function Page() {
  const sameAs = [profile.contact.linkedin, profile.contact.github].filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: siteUrl,
    email: profile.contact.email ? `mailto:${profile.contact.email}` : undefined,
    image: `${siteUrl}/opengraph-image.png`,
    description: profile.seo.description,
    address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
    worksFor: { "@type": "Organization", name: "Optimum Partners" },
    knowsAbout: profile.seo.keywords,
    sameAs,
  };
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SitePage />
    </>
  );
}
