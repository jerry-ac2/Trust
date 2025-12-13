import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f7] flex">
      {/* Left Panel - Brand Statement */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1a1a1a] text-[#faf9f7] p-16 flex-col justify-between relative overflow-hidden">
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <span className="font-headline text-3xl">Trust</span>
        </div>

        {/* Statement */}
        <div className="relative z-10 max-w-md">
          <h1 className="font-headline text-4xl lg:text-5xl leading-[1.15] mb-8">
            Your money, protected by consensus.
          </h1>
          <p className="text-[#9a9a9a] text-lg leading-relaxed">
            Join thousands of groups who trust our platform to manage shared
            funds transparently and securely.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-sm text-[#5a5a5a]">
            Trusted by 2,400+ communities worldwide
          </p>
        </div>

        {/* Abstract decoration */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-[#2d2d2d] rounded-full -mr-32 -mb-32" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border border-[#2d2d2d] rounded-full -mr-24 -mb-24" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16">
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
