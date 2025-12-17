import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Wallet", href: "/dashboard", icon: "💰" },
  { name: "Causes", href: "/dashboard/causes", icon: "🌱" },
  { name: "Votes", href: "/dashboard/votes", icon: "✓" },
  { name: "Activity", href: "/dashboard/activity", icon: "📋" },
  { name: "Profile", href: "/dashboard/profile", icon: "👤" },
];

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] py-2 transition-all duration-150 btn-press ${
                isActive
                  ? "text-[#22C55E]"
                  : "text-[#64748B] active:text-[#22C55E]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-[#22C55E]" : ""
                }`}
              >
                {item.name}
              </span>
              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#22C55E]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
