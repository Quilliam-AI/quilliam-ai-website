import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { TrackClick } from "@/components/shared/track-click";

const heroMarkers = [
  {
    value: "£3k-£10k",
    label: "first build range",
    description: "Fixed setup fees for the first outcome-led implementation.",
  },
  {
    value: "Baseline",
    label: "agreed before build",
    description: "We define what should improve before touching the workflow.",
  },
  {
    value: "Open",
    label: "stack, no lock-in",
    description: "You own the systems, source, runbooks, and handoff.",
  },
] as const;

const proofPoints = [
  "Enquiries answered faster",
  "Admin moved out of inboxes",
  "Reports built without copy-paste",
  "Team trained before handoff",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef]">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-18 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.72fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-emerald-700 border border-emerald-100 shadow-[0_12px_36px_-28px_rgba(68,64,60,0.55)] w-fit">
              <Sparkles size={13} className="fill-emerald-500 text-emerald-500" />
              Practical AI help for owner-led teams
            </span>

            <p className="mt-8 text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-emerald-700">
              Strategy, systems, and training.
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-[4.6rem] font-semibold tracking-tight leading-[1.02] text-stone-950 max-w-[12ch] text-balance">
              We install AI
              <br />
              <span className="text-emerald-700">inside your business.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed max-w-[60ch]">
              For owner-operators with a team of 10-50 people who are short on
              time, not ideas. We find the admin, handoffs, enquiries, and
              reporting work AI can actually improve, then build the system and
              train your team to run it.
            </p>

            <FadeIn delay={0.25} className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <TrackClick event="cta_clicked" properties={{ cta_type: "opportunity_mapping", location: "hero" }}>
                  <Button asChild size="lg">
                    <Link href="/book">
                      Map my first AI system
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </TrackClick>
                <TrackClick event="cta_clicked" properties={{ cta_type: "see_model", location: "hero" }}>
                  <Button asChild variant="text-muted" size="text">
                    <Link href="/#outcomes">
                      See how it works
                      <ArrowRight size={15} />
                    </Link>
                  </Button>
                </TrackClick>
              </div>
              <p className="mt-4 text-sm text-stone-500 max-w-[56ch] leading-relaxed">
                Free 30-minute mapping call. Plain English, no jargon. You
                leave with the first system worth scoping and the outcome it
                should improve.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_-55px_rgba(68,64,60,0.65)] ring-1 ring-stone-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
                    alt="A small team in a warm office planning work around a table"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-stone-950/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/92 p-4 shadow-[0_18px_50px_-32px_rgba(68,64,60,0.7)] backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
                      What this normally starts with
                    </p>
                    <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                      “We know AI could help, but we need someone to find the
                      first useful workflow and make it safe for the team.”
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {heroMarkers.map((marker) => (
                  <div
                    key={marker.label}
                    className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"
                  >
                    <span className="block text-xl font-semibold text-stone-950 tabular-nums">
                      {marker.value}
                    </span>
                    <span className="mt-1 block text-[11px] text-stone-500 uppercase tracking-widest">
                      {marker.label}
                    </span>
                    <p className="mt-2 hidden text-xs text-stone-500 leading-relaxed lg:block">
                      {marker.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-12">
          <div className="rounded-3xl bg-white/75 p-4 ring-1 ring-stone-200 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#fbfaf7] px-4 py-3 text-sm font-medium text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
