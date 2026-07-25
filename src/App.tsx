import portrait from "@/assets/vivienne.jpg";

const accent = "#C97B5A";

type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:viivienn@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivienne-chow/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/viivienn", external: true },
  { label: "Résumé", href: "vivienne-chow-resume.pdf", download: true },
];

function ContactLinks({ ariaLabel }: { ariaLabel: string }) {
  return (
    <nav
      aria-label={ariaLabel}
      className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
    >
      {contactLinks.map((link, i) => (
        <span key={link.label} className="flex items-center gap-4">
          {i > 0 && (
            <span aria-hidden="true" className="text-[#C7C7C4]">
              ·
            </span>
          )}
          <a
            href={link.href}
            {...(link.download ? { download: "" } : {})}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="rounded-sm underline underline-offset-4 decoration-[#1C1C1C]/20 transition-colors hover:decoration-[color:var(--accent)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            style={{ ["--accent" as string]: accent }}
          >
            {link.label}
          </a>
        </span>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans text-[#1C1C1C] antialiased">
      <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
        <header className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Vivienne Chow
            </h1>
            <p className="mt-2 text-[#6B6B6B]">
              Software Engineer at Google · Distributed Systems &amp; AI
              Infrastructure
            </p>
            <p className="mt-5 leading-relaxed">
              I build globally distributed production systems that support
              Gemini and other high-scale Google products. My work spans
              multi-region architecture, control planes, observability,
              incident automation, and safe production rollouts.
            </p>
            <p className="mt-3 text-sm text-[#6B6B6B]">
              San Francisco Bay Area, CA
            </p>
            <ContactLinks ariaLabel="Primary contact links" />
          </div>
          <img
            src={portrait}
            alt="Portrait of Vivienne Chow, software engineer at Google"
            width={176}
            height={176}
            className="h-32 w-32 shrink-0 rounded-2xl object-cover sm:mt-1 sm:h-44 sm:w-44"
          />
        </header>

        <SectionLabel>About</SectionLabel>
        <div className="mt-4 space-y-3 leading-relaxed">
          <p>
            I'm a backend and infrastructure engineer with more than six years
            of experience building and operating large-scale systems at Google
            and Amazon.
          </p>
          <p>
            At Google, I work on distributed control-plane and reliability
            infrastructure supporting production AI and data systems, including
            systems used by Gemini. I focus on making complex systems resilient,
            observable, and safe to operate under strict availability, latency,
            and correctness requirements.
          </p>
          <p>
            Previously, I worked on performance and reliability for Amazon's
            Product Detail Page, one of the company's highest-traffic customer
            surfaces.
          </p>
        </div>

        <SectionLabel>Focus</SectionLabel>
        <div className="mt-4 space-y-3 leading-relaxed">
          <p>
            <span className="font-medium">Distributed systems —</span>{" "}
            Multi-region architecture, resilient control planes, distributed
            data systems, failure isolation, and production migrations.
          </p>
          <p>
            <span className="font-medium">AI infrastructure —</span> Production
            infrastructure supporting generative AI products, with an emphasis
            on reliability, correctness, and safe deployment.
          </p>
          <p>
            <span className="font-medium">Production engineering —</span>{" "}
            Observability, incident automation, rollout safety, performance, and
            end-to-end ownership of critical systems.
          </p>
        </div>

        <SectionLabel>Selected impact</SectionLabel>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed marker:text-[#C97B5A]">
          <li>
            Build distributed infrastructure supporting Gemini and other
            globally deployed Google products under strict latency,
            availability, and correctness requirements.
          </li>
          <li>
            Led a multi-quarter redesign of a large-scale distributed datastore
            and control plane, improving regional resilience and eliminating a
            recurring class of outages.
          </li>
          <li>
            Designed incident-control mechanisms adopted across 18 teams,
            reducing mitigation time during critical production events from
            hours to minutes.
          </li>
          <li>
            Built automated validation and monitoring that increased detection
            of silent data-quality failures to more than 95%.
          </li>
          <li>
            Improved performance and reliability for Amazon's Product Detail
            Page, a globally distributed customer surface handling significant
            traffic during events such as Prime Day and Cyber Monday.
          </li>
        </ul>

        <SectionLabel>Technical expertise</SectionLabel>
        <dl className="mt-4 space-y-3 text-sm leading-relaxed">
          <SkillRow
            label="Languages"
            items="Python · Go · C++ · Java · TypeScript · SQL"
          />
          <SkillRow
            label="Distributed systems"
            items="Multi-region architecture · Control planes · Distributed data systems · Event-driven systems · Low-latency services"
          />
          <SkillRow
            label="Production engineering"
            items="Observability · SLOs · Incident response · Safe rollouts · Failure detection · Performance analysis"
          />
          <SkillRow
            label="Cloud and data"
            items="Google Cloud · AWS · Spanner · BigQuery · Serverless systems · CI/CD"
          />
          <SkillRow
            label="Technical leadership"
            items="System design · Multi-quarter execution · Cross-team adoption · Production ownership · Technical stakeholder alignment"
          />
        </dl>

        <SectionLabel>Experience</SectionLabel>
        <ul className="mt-4 space-y-6">
          <ExperienceItem
            company="Google"
            title="Site Reliability Engineer"
            dates="Oct 2022 – Present"
            description="Building and operating distributed control-plane, data, and reliability infrastructure supporting Gemini and other globally deployed products."
          />
          <ExperienceItem
            company="Amazon"
            title="Software Development Engineer"
            dates="Jun 2021 – Sep 2022"
            description="Performance, reliability, and production engineering for Amazon's Product Detail Page and its shared platform infrastructure."
          />
          <ExperienceItem
            company="ConovaAI"
            title="Cloud Developer"
            dates="May 2020 – May 2021"
            description="Built serverless applications, event-driven data pipelines, ETL systems, and cloud-based product infrastructure."
          />
        </ul>
        <div className="mt-6">
          <a
            href="vivienne-chow-resume.pdf"
            download
            className="inline-flex items-center rounded-full border border-[#1C1C1C]/15 px-4 py-2 text-sm transition-colors hover:border-[#C97B5A] hover:text-[#C97B5A] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C97B5A]"
          >
            Download full résumé (PDF)
          </a>
        </div>

        <SectionLabel>Outside of work</SectionLabel>
        <p className="mt-4 leading-relaxed">
          Outside of work, I play tennis and beach volleyball, ski in the
          winter, and surf when I can get to the coast. I'm also interested in
          how people think, communicate, and make decisions—something that
          influences how I approach technical collaboration.
        </p>

        <SectionLabel>Get in touch</SectionLabel>
        <p className="mt-4 leading-relaxed">
          I'm interested in distributed systems, AI infrastructure, research
          infrastructure, data platforms, observability, and technically
          demanding products operating at global scale.
        </p>
        <ContactLinks ariaLabel="Get in touch links" />

        <footer className="mt-20 border-t border-[#EAE7E1] pt-8 text-sm text-[#6B6B6B]">
          Built by Vivienne Chow.
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-sm font-medium tracking-wide text-[#C97B5A]">
      {children}
    </h2>
  );
}

function ExperienceItem({
  company,
  title,
  dates,
  description,
}: {
  company: string;
  title: string;
  dates: string;
  description: string;
}) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div>
          <span className="font-medium">{company}</span>
          <span className="text-[#6B6B6B]"> — {title}</span>
        </div>
        <div className="shrink-0 text-sm text-[#6B6B6B]">{dates}</div>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-[#6B6B6B]">{description}</p>
    </li>
  );
}

function SkillRow({ label, items }: { label: string; items: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      <dt className="w-full shrink-0 font-medium sm:w-44">{label}</dt>
      <dd className="text-[#6B6B6B]">{items}</dd>
    </div>
  );
}
