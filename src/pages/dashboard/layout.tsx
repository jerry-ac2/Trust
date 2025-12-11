import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-6 bg-stone-100">{children}</div>
    </div>
  );
}
