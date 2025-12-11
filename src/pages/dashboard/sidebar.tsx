import { MdCampaign, MdDashboard, MdSettings, MdWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const nav = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdDashboard className="w-6 h-6" />,
  },
  {
    name: "Campaigns",
    href: "/dashboard/campaigns",
    icon: <MdCampaign className="w-6 h-6" />,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: <MdWallet className="w-6 h-6" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <MdSettings className="w-6 h-6" />,
  },
];

export default function Sidebar() {
  //handle active route
  const location = useLocation();
  return (
    <div className="flex flex-col  w-74 p-3 border-r border-gray-300 bg-gray-100 gap-12 h-svh">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="h-12 w-14" alt="logo" />
        <span className="text-2xl font-bold">Trust</span>
      </div>
      <div className="flex flex-col w-full gap-6">
        {nav.map((item) => (
          <Link to={item.href} key={item.name}>
            <div
              className={`flex flex-row p-2 items-center gap-4 rounded-md ${
                location.pathname == item.href && "bg-blue-400 text-white"
              }`}
            >
              <span>{item.icon}</span>
              <p className="text-md font-normal">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
