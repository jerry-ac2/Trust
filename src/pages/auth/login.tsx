import { useNavigate } from "react-router-dom";

export default function Login({
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
        <h1 className="font-headline text-3xl text-[#0F172A]">Welcome back</h1>
        <p className="text-[#475569]">
          Sign in to access your shared wallets and voting duties.
        </p>
      </div>

      {/* Form */}
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/dashboard");
        }}
      >
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
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#0F172A]"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm text-[#22C55E] hover:text-[#16A34A] transition-colors font-medium"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full h-12 px-4 bg-white border border-[#E2E8F0] rounded-lg focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 focus:outline-none transition-all placeholder:text-[#94A3B8]"
          />
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#5b7b67] text-[#FFFACD] cursor-pointer rounded-lg font-medium btn-press text-base"
        >
          Sign in
        </button>
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
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Secured with 256-bit encryption</span>
      </div>

      {/* Switch */}
      <p className="text-center text-[#475569]">
        Don't have an account?{" "}
        <button
          onClick={() => setIsLogin(false)}
          className="text-[#5b7b67] font-xs text-sm hover:text-[#16A34A] transition-colors"
        >
          Create one
        </button>
      </p>
    </div>
  );
}
