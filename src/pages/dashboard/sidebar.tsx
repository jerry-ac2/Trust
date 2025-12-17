import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Wallet", href: "/dashboard", icon: "💰" },
  { name: "Causes", href: "/dashboard/causes", icon: "🌱" },
  { name: "Votes", href: "/dashboard/votes", icon: "✓" },
  { name: "Activity", href: "/dashboard/activity", icon: "📋" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#F8FAFC] h-screen sticky top-0 border-r border-[#E2E8F0]">
      {/* Header */}
      <div className="p-6 pb-8">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <span className="font-headline text-2xl text-[#0F172A]">Trust</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/dashboard" &&
                location.pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.href)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg btn-press focus-ring ${
                    isActive
                      ? "bg-[#22C55E] text-white shadow-sm"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]"
                  }`}
                >
                  {/* <span className="text-lg">{item.icon}</span> */}
                  <span>{item.name}</span>
                  {/* Active indicator arrow */}
                  {isActive && (
                    <svg
                      className="w-4 h-4 ml-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="p-4 border-t border-[#E2E8F0]">
        <button
          onClick={() => navigate("/dashboard/profile")}
          className="flex items-center gap-3 px-2 py-3 w-full cursor-pointer rounded-lg hover:bg-[#E2E8F0] transition-colors btn-press focus-ring"
        >
          <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium text-[#0F172A]">John Doe</span>
            <span className="text-xs text-[#64748B]">Contributor</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
