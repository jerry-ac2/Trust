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
        <span className="font-headline text-2xl text-[#1a1a1a]">Trust</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-headline text-3xl text-[#1a1a1a]">Welcome back</h1>
        <p className="text-[#5a5a5a]">
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
          <label htmlFor="email" className="text-sm font-medium text-[#1a1a1a]">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full h-12 px-4 bg-transparent border-b border-[#e0e0e0] focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder:text-[#9a9a9a]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#1a1a1a]"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full h-12 px-4 bg-transparent border-b border-[#e0e0e0] focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder:text-[#9a9a9a]"
          />
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#1a1a1a] text-[#faf9f7] font-medium rounded-sm hover:bg-[#2d2d2d] transition-colors mt-4"
        >
          Sign in
        </button>
      </form>

      {/* Switch */}
      <p className="text-center text-[#5a5a5a]">
        Don't have an account?{" "}
        <button
          onClick={() => setIsLogin(false)}
          className="text-[#1a1a1a] font-medium hover:text-[#2d5a4a] transition-colors"
        >
          Create one
        </button>
      </p>
    </div>
  );
}
