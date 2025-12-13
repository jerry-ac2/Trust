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
        <span className="font-headline text-2xl text-[#1a1a1a]">Trust</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-headline text-3xl text-[#1a1a1a]">
          Create your account
        </h1>
        <p className="text-[#5a5a5a]">
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
          <label htmlFor="name" className="text-sm font-medium text-[#1a1a1a]">
            Full name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Jane Doe"
            className="w-full h-12 px-4 bg-transparent border-b border-[#e0e0e0] focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder:text-[#9a9a9a]"
          />
        </div>

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
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#1a1a1a]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Create a secure password"
            className="w-full h-12 px-4 bg-transparent border-b border-[#e0e0e0] focus:border-[#1a1a1a] focus:outline-none transition-colors placeholder:text-[#9a9a9a]"
          />
          <p className="text-xs text-[#9a9a9a] mt-1">
            At least 8 characters with a mix of letters and numbers
          </p>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#1a1a1a] text-[#faf9f7] font-medium rounded-sm hover:bg-[#2d2d2d] transition-colors mt-4"
        >
          Create account
        </button>

        <p className="text-xs text-[#9a9a9a] text-center">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-[#1a1a1a] hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#1a1a1a] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>

      {/* Switch */}
      <p className="text-center text-[#5a5a5a]">
        Already have an account?{" "}
        <button
          onClick={() => setIsLogin(true)}
          className="text-[#1a1a1a] font-medium hover:text-[#2d5a4a] transition-colors"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
