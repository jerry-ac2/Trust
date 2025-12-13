import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-[#faf9f7]">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Column - Asymmetric placement */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <p className="text-sm tracking-widest uppercase text-[#9a9a9a] font-medium">
              Collective finance, reimagined
            </p>

            {/* Headline - Editorial serif */}
            <h1 className="font-headline text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-[#1a1a1a]">
              Money moves when <br className="hidden lg:block" />
              <em className="not-italic text-[#2d5a4a]">everyone</em> agrees.
            </h1>

            {/* Subtext - Warm, clear, no jargon */}
            <p className="text-lg lg:text-xl text-[#5a5a5a] max-w-xl leading-relaxed font-light">
              Trust is a shared wallet for groups who want transparency.
              Contributions are pooled, held securely, and only released when
              the community votes to approve.
            </p>

            {/* CTA - Restrained, confident */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => navigate("/auth")}
                className="px-8 py-4 bg-[#1a1a1a] text-[#faf9f7] text-base font-medium rounded-sm hover:bg-[#2d2d2d] transition-colors duration-300"
              >
                Start a Trust
              </button>
              <button
                onClick={() => navigate("#how-it-works")}
                className="px-8 py-4 text-[#1a1a1a] text-base font-medium border-b border-[#1a1a1a] hover:border-[#2d5a4a] hover:text-[#2d5a4a] transition-colors duration-300 bg-transparent"
              >
                See how it works
              </button>
            </div>

            {/* Social proof - subtle, not badges */}
            <p className="text-sm text-[#9a9a9a] pt-6">
              <span className="text-[#1a1a1a] font-medium">2,400+</span>{" "}
              communities trust us with
              <span className="text-[#1a1a1a] font-medium"> $4.2M</span> in
              pooled funds
            </p>
          </div>

          {/* Visual Column - Abstract, not literal */}
          <div className="lg:col-span-5 relative">
            {/* Abstract geometric composition */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background circle - warm grey */}
              <div className="absolute inset-8 rounded-full bg-[#e8e6e1]" />

              {/* Overlapping elements suggesting consensus/agreement */}
              <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#2d5a4a] rounded-full opacity-60" />
              <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#2d5a4a] rounded-full opacity-40" />
              <div className="absolute top-28 left-28 w-32 h-32 border-2 border-[#2d5a4a] rounded-full opacity-20" />

              {/* Central element - the shared vault */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="w-12 h-12 rounded-full bg-[#2d5a4a] flex items-center justify-center">
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
                  <span className="text-xs font-medium text-[#9a9a9a] uppercase tracking-wider">
                    Shared Vault
                  </span>
                  <span className="font-headline text-2xl text-[#1a1a1a]">
                    $24,800
                  </span>
                </div>
              </div>

              {/* Floating indicator - vote approved */}
              <div className="absolute bottom-16 right-0 bg-white px-4 py-3 shadow-md rounded-sm flex items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-2 h-2 rounded-full bg-[#2d5a4a]" />
                <span className="text-sm text-[#1a1a1a]">Vote approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9a9a9a]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-[#9a9a9a] opacity-50" />
      </div>
    </section>
  );
}
