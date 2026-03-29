import { Star } from "lucide-react";

export function TrustBar() {
  return (
    <section className="py-8 border-b border-stone-200/60 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-stone-600 font-medium">
              5.0 on Google
            </span>
            <span className="text-stone-300">|</span>
            <span>Trusted by local businesses across Cornwall</span>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-stone-400">
            <span>BNI Member</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Cornwall Based</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>UK Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
