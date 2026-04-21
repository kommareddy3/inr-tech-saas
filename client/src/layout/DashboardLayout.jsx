// ================= LAYOUT =================
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 p-5">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">INR</h2>
        <nav className="space-y-4">
          <Link to="/app" className="block hover:text-blue-400">Dashboard</Link>
          <Link to="/app/contact" className="block hover:text-blue-400">Contact</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}