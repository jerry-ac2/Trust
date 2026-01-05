import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Panel - Brand Statement */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0F172A] text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="font-headline text-3xl">Trust</span>
        </div>

        {/* Statement */}
        <div className="relative z-10 max-w-xl">
          <h1 className="font-headline text-4xl lg:text-5xl leading-[1.15] mb-8">
            Your money, protected by consensus.
          </h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
            Join thousands of groups who trust our platform to manage shared
            funds transparently and securely.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm">
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
              <span className="text-[#94A3B8]">256-bit encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
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
              <span className="text-[#94A3B8]">Instant transactions</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#22C55E] border-2 border-[#0F172A] flex items-center justify-center text-white text-xs font-medium"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-[#64748B]">
            Trusted by <span className="text-white font-medium">2,400+</span>{" "}
            communities worldwide
          </p>
        </div>

        {/* Abstract decoration - using accent colors */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-[#22C55E]/20 rounded-full -mr-32 -mb-32" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border border-[#3B82F6]/20 rounded-full -mr-24 -mb-24" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-[#22C55E]/10 rounded-full" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16 bg-[#F8FAFC]">
        <div className="w-full max-w-md">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
