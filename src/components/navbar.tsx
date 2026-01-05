import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo - Simple wordmark */}
        <div
          className="cursor-pointer flex items-center gap-2 group"
          onClick={() => navigate("/")}
        >
          <span className="font-headline text-2xl text-black">Trust</span>
        </div>

        {/* Navigation Links - Minimal */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <a
            href="#how-it-works"
            className="text-[#475569] hover:text-[#22C55E] transition-colors duration-200"
          >
            How it works
          </a>
          <a
            href="#features"
            className="text-[#475569] hover:text-[#22C55E] transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="text-[#475569] hover:text-[#22C55E] transition-colors duration-200"
          >
            Use cases
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/auth/login")}
            className="hidden sm:block text-sm text-[#0F172A] hover:text-[#22C55E] transition-colors duration-200 font-medium"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="px-5 py-2.5 bg-[#5b7b67] text-[#FFFACD] rounded-lg text-sm font-medium  text-shadow-2x cursor-pointer btn-press"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
