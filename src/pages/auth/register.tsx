import { useNavigate } from "react-router-dom";

export default function Register({
  setIsLogin,
}: {
  setIsLogin: (value: boolean) => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      {/* Mobile logo */}
      <div className="lg:hidden mb-4">
        <span className="font-headline text-2xl text-[#0F172A]">Trust</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-headline text-3xl text-[#0F172A]">
          Create your account
        </h1>
        <p className="text-[#475569]">
          Start managing shared funds with transparency and control.
        </p>
      </div>

      {/* Form */}
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/auth/otp-verify");
        }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[#0F172A]">
            Full name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Jane Doe"
            className="w-full h-12 px-4 bg-white border border-[#E2E8F0] rounded-lg focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 focus:outline-none transition-all placeholder:text-[#94A3B8]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#0F172A]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full h-12 px-4 bg-white border border-[#E2E8F0] rounded-lg focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 focus:outline-none transition-all placeholder:text-[#94A3B8]"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#0F172A]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Create a secure password"
            className="w-full h-12 px-4 bg-white border border-[#E2E8F0] rounded-lg focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 focus:outline-none transition-all placeholder:text-[#94A3B8]"
          />
          <div className="flex items-center gap-2 text-xs text-[#64748B] mt-1">
            <svg
              className="w-3 h-3 text-[#22C55E]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>At least 8 characters with a mix of letters and numbers</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#5b7b67] text-[#FFFACD] cursor-pointer rounded-lg font-medium btn-press text-base"
        >
          Create account
        </button>

        <p className="text-xs text-[#64748B] text-center">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-[#5b7b67] hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#5b7b67] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>

      {/* Trust signal */}
      <div className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
        <svg
          className="w-4 h-4 text-[#5b7b67]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span>Your data is protected with bank-level security</span>
      </div>

      {/* Switch */}
      <p className="text-center text-[#475569]">
        Already have an account?{" "}
        <button
          onClick={() => setIsLogin(true)}
          className="text-[#5b7b67] font-medium hover:text-[#16A34A] transition-colors"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
