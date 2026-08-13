import Image from "next/image";
import { proofLogos } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Client work and experience" className="bg-ink px-6 py-5 text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-5 border-y border-paper/10 py-5 lg:grid-cols-[auto_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/55">
            Client work and experience
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {proofLogos.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener"
              aria-label={`Visit ${company.name}`}
              className="group flex h-12 items-center justify-center px-3"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width}
                height={company.height}
                sizes="160px"
                className={`${company.className} w-auto object-contain opacity-70 transition-opacity group-hover:opacity-100`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
