import { useNavigate } from "react-router-dom";
import HeroIcon from "../heroIcon";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-green-50 font-ubuntu">
      <div className="absolute opacity-18 top-15 inset-0 bg-[url('/bg.png')] bg-cover bg-center" />
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="flex items-center gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-8">
            {/* <HeroIcon icon={"/christy.jpg"} className="top-34 -left-10" /> */}
            <p className="text-sm text-center tracking-widest uppercase text-[#64748B] font-medium">
              Collective finance, reimagined
            </p>
            <h1 className="text-center text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-wide text-[#0F172A] font-normal">
              Money{" "}
              <span className="relative">
                <span className="top-0 left-0 z-50 font-pt-serif italic">
                  moves
                </span>
                <div className="absolute bottom-0 left-0 top-18 z-10 w-full rounded-2xl h-1.5 bg-green-500"></div>
              </span>{" "}
              when <br className="hidden lg:block" />
              everyone agrees.
            </h1>

            {/* Subtext - Warm, clear, no jargon */}
            <p className="text-lg lg:text-xl text-center text-[#475569] max-w-xl leading-relaxed font-extralight">
              Trust is a shared wallet for groups who want transparency.
              Contributions are pooled, held securely, and only released when
              the community votes to approve.
            </p>

            {/* CTA - Bold and high-contrast */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate("/auth")}
                className="px-8 py-4 bg-[#5b7b67] text-green-500 rounded-lg text-base font-medium text-shadow-2xs btn-press"
              >
                Start a Trust
              </button>
              <button
                onClick={() => navigate("#how-it-works")}
                className="px-8 py-4 cta-secondary rounded-lg text-base btn-press"
              >
                See how it works
              </button>
            </div>

            {/* Social proof with trust signals */}
            <div className="flex items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#22C55E] border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[#64748B] ml-2">
                  <span className="text-[#0F172A] font-semibold">2,400+</span>{" "}
                  communities
                </span>
              </div>
              <div className="h-6 w-px bg-[#E2E8F0]" />
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#22C55E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-[#64748B]">
                  <span className="text-[#0F172A] font-semibold">$4.2M</span>{" "}
                  secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-[#64748B] opacity-50" />
      </div>
    </section>
  );
}
