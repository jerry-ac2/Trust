import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { colors } from "@/lib/theme";

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
        scrolled ? `bg-white/95 backdrop-blur-sm shadow-sm` : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: `1px solid ${colors.ui.border}` } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
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
            className="transition-colors duration-200 hover:opacity-80"
            style={{ color: colors.ui.slate }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.accent.green)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.ui.slate)
            }
          >
            How it works
          </a>
          <a
            href="#features"
            className="transition-colors duration-200 hover:opacity-80"
            style={{ color: colors.ui.slate }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.accent.green)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.ui.slate)
            }
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="transition-colors duration-200 hover:opacity-80"
            style={{ color: colors.ui.slate }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.accent.green)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.ui.slate)
            }
          >
            Use cases
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="hidden sm:block text-sm transition-colors duration-200 font-medium hover:opacity-80"
            style={{ color: colors.text.primary }}
          >
            Sign in
          </button>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-shadow-2x cursor-pointer btn-press"
            style={{
              backgroundColor: colors.primary.green,
              color: colors.text.cream,
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
}
