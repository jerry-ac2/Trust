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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e8e6e1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo - Simple wordmark */}
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <span className="font-headline text-2xl text-[#1a1a1a]">Trust</span>
        </div>

        {/* Navigation Links - Minimal */}
        <div className="hidden md:flex items-center gap-12 text-sm">
          <a
            href="#how-it-works"
            className="text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            How it works
          </a>
          <a
            href="#features"
            className="text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="text-[#5a5a5a] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Use cases
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/auth/login")}
            className="hidden sm:block text-sm text-[#1a1a1a] hover:text-[#2d5a4a] transition-colors duration-300"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="px-5 py-2.5 bg-[#1a1a1a] text-[#faf9f7] text-sm font-medium rounded-sm hover:bg-[#2d2d2d] transition-colors duration-300"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
