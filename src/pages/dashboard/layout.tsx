import Sidebar from "./sidebar";
import MobileNav from "../../components/dashboard/MobileNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
