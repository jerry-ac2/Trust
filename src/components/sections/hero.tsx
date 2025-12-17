import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-white">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Column - Asymmetric placement */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <p className="text-sm tracking-widest uppercase text-[#64748B] font-medium">
              Collective finance, reimagined
            </p>

            {/* Headline - Editorial serif */}
            <h1 className="font-headline text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-[#0F172A]">
              Money moves when <br className="hidden lg:block" />
              <em className="not-italic text-[#22C55E]">everyone</em> agrees.
            </h1>

            {/* Subtext - Warm, clear, no jargon */}
            <p className="text-lg lg:text-xl text-[#475569] max-w-xl leading-relaxed font-light">
              Trust is a shared wallet for groups who want transparency.
              Contributions are pooled, held securely, and only released when
              the community votes to approve.
            </p>

            {/* CTA - Bold and high-contrast */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate("/auth")}
                className="px-8 py-4 cta-primary rounded-lg text-base btn-press"
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
            <div className="flex items-center gap-6 pt-6">
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

          {/* Visual Column - Payment-focused visualization */}
          <div className="lg:col-span-5 relative">
            {/* Abstract geometric composition */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background circle - surface bg */}
              <div className="absolute inset-8 rounded-full bg-[#F8FAFC]" />

              {/* Overlapping elements suggesting consensus/agreement */}
              <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#22C55E] rounded-full opacity-60" />
              <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#22C55E] rounded-full opacity-40" />
              <div className="absolute top-28 left-28 w-32 h-32 border-2 border-[#22C55E] rounded-full opacity-20" />

              {/* Central element - the shared vault */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-lg border border-[#E2E8F0] flex flex-col items-center justify-center gap-3 transform rotate-3 hover:rotate-0 transition-transform duration-700 wallet-card-hover">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                    Shared Vault
                  </span>
                  <span className="font-headline text-2xl text-[#0F172A]">
                    $24,800
                  </span>
                  <span className="badge-available px-2 py-0.5 rounded-full text-xs font-medium">
                    Secure
                  </span>
                </div>
              </div>

              {/* Floating indicator - transaction approved */}
              <div className="absolute bottom-16 right-0 bg-white px-4 py-3 shadow-md rounded-lg border border-[#E2E8F0] flex items-center gap-3 animate-float">
                <span className="status-dot status-dot-success" />
                <span className="text-sm text-[#0F172A] font-medium">
                  Vote approved
                </span>
              </div>

              {/* Floating indicator - escrow info */}
              <div
                className="absolute top-8 right-8 bg-[#EFF6FF] px-3 py-2 rounded-lg border border-[#3B82F6]/20 flex items-center gap-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  className="w-4 h-4 text-[#3B82F6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs text-[#3B82F6] font-medium">
                  Escrow active
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
