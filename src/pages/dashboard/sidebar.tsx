import { Link, useLocation, useNavigate } from "react-router-dom";

const nav = [
  {
    name: "Overview",
    href: "/dashboard",
  },
  {
    name: "Governance",
    href: "/dashboard/",
  },
  {
    name: "Pooled Funds",
    href: "/dashboard/",
  },
  {
    name: "Activity",
    href: "/dashboard/",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col w-64 bg-[#faf9f7] h-screen sticky top-0 border-r border-[#e8e6e1]">
      {/* Header */}
      <div className="p-6 pb-8">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <span className="font-headline text-2xl text-[#1a1a1a]">Trust</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {nav.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/dashboard" &&
                location.pathname.startsWith(item.href));

            return (
              <li key={item.name}>
                <div
                  onClick={() => navigate(item.href)}
                  className={`block px-4 py-3 text-sm font-medium rounded-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#5a5a5a] hover:text-[#1a1a1a] hover:bg-[#e8e6e1]"
                  }`}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User */}
      <div className="p-4 border-t border-[#e8e6e1]">
        <div className="flex items-center gap-3 px-2 py-3 cursor-pointer rounded-sm hover:bg-[#e8e6e1] transition-colors">
          <div className="w-9 h-9 rounded-full bg-[#2d5a4a] flex items-center justify-center text-white text-sm font-medium">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[#1a1a1a]">John Doe</span>
            <span className="text-xs text-[#9a9a9a]">Contributor</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
