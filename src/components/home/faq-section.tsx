import { faqs } from "@/lib/content";
import { FadeIn } from "@/components/shared/fade-in";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-stone-950 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.08}>
              <div className="border-b border-stone-200 py-7">
                <h3 className="text-lg font-semibold tracking-tight text-stone-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
