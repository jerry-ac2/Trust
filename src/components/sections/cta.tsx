import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 lg:py-40 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="font-headline text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-white mb-8">
          Ready to build trust <br className="hidden sm:block" />
          with your group?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-12 leading-relaxed">
          Start a Trust in minutes. Invite your members. Make financial
          decisions together.
        </p>

        {/* CTA - Primary actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/auth")}
            className="px-10 py-4 cta-primary rounded-lg text-base btn-press inline-flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create your Trust
          </button>
          <button
            onClick={() => navigate("/auth/login")}
            className="px-10 py-4 text-white text-base font-medium border border-[#475569] rounded-lg hover:border-white hover:bg-white/5 transition-all duration-200 btn-press"
          >
            Sign in
          </button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
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
            <span className="text-sm text-[#94A3B8]">Free to use</span>
          </div>
          <div className="h-4 w-px bg-[#475569]" />
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
            <span className="text-sm text-[#94A3B8]">
              No credit card required
            </span>
          </div>
          <div className="h-4 w-px bg-[#475569]" />
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#22C55E]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-[#94A3B8]">256-bit encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}
