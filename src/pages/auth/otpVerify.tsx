import { useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#22C55E] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-headline text-2xl text-[#0F172A]">Trust</span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="font-headline text-3xl text-[#0F172A] text-center">
            Verify your identity
          </h1>
          <p className="text-[#475569] text-center">
            We've sent a 6-digit code to your phone ending in{" "}
            <span className="text-[#0F172A] font-medium">***9983</span>. Enter
            it below to continue.
          </p>
        </div>

        {/* OTP Input */}
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-14 text-center text-xl font-medium bg-white border-2 border-[#E2E8F0] rounded-lg focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 focus:outline-none transition-all"
              onKeyUp={(e) => {
                const target = e.target as HTMLInputElement;
                if (target.value && i < 6) {
                  const next = target.nextElementSibling as HTMLInputElement;
                  if (next) next.focus();
                }
              }}
            />
          ))}
        </div>

        {/* Security indicator */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
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
          <span>Secure verification in progress</span>
        </div>

        {/* Actions */}
        <div className="space-y-4 pt-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full h-14 cta-primary rounded-lg font-medium btn-press text-base"
          >
            Verify and continue
          </button>

          <p className="text-center text-sm text-[#475569]">
            Didn't receive the code?{" "}
            <button className="text-[#22C55E] font-medium hover:text-[#16A34A] transition-colors">
              Resend
            </button>
          </p>
        </div>

        {/* Back */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
