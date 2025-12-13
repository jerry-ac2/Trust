import { useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <span className="font-headline text-2xl text-[#1a1a1a]">Trust</span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="font-headline text-3xl text-[#1a1a1a] text-center">
            Verify your identity
          </h1>
          <p className="text-[#5a5a5a] text-center">
            We've sent a 6-digit code to your phone ending in{" "}
            <span className="text-[#1a1a1a] font-medium">***9983</span>. Enter
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
              className="w-12 h-14 text-center text-xl font-medium bg-transparent border-b-2 border-[#e0e0e0] focus:border-[#1a1a1a] focus:outline-none transition-colors"
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

        {/* Actions */}
        <div className="space-y-4 pt-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full h-14 bg-[#1a1a1a] text-[#faf9f7] font-medium rounded-sm hover:bg-[#2d2d2d] transition-colors"
          >
            Verify and continue
          </button>

          <p className="text-center text-sm text-[#5a5a5a]">
            Didn't receive the code?{" "}
            <button className="text-[#1a1a1a] font-medium hover:text-[#2d5a4a] transition-colors">
              Resend
            </button>
          </p>
        </div>

        {/* Back */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors"
          >
            ← Go back
          </button>
        </div>
      </div>
    </div>
  );
}
