import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 lg:py-40 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="font-headline text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-[#faf9f7] mb-8">
          Ready to build trust <br className="hidden sm:block" />
          with your group?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-[#9a9a9a] max-w-xl mx-auto mb-12 leading-relaxed">
          Start a Trust in minutes. Invite your members. Make financial
          decisions together.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/auth")}
            className="px-10 py-4 bg-[#faf9f7] text-[#1a1a1a] text-base font-medium rounded-sm hover:bg-white transition-colors duration-300"
          >
            Create your Trust
          </button>
          <button
            onClick={() => navigate("/auth/login")}
            className="px-10 py-4 text-[#faf9f7] text-base font-medium border border-[#5a5a5a] rounded-sm hover:border-[#faf9f7] transition-colors duration-300"
          >
            Sign in
          </button>
        </div>

        {/* Reassurance */}
        <p className="text-sm text-[#5a5a5a] mt-12">
          Free to use · No credit card required · 256-bit encryption
        </p>
      </div>
    </section>
  );
}
