import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const pageTitles:Record<string, string> = {
  "/dashboard":"Dashboard",
  "/accounts":"Social Accounts",
  "/schedule":"Post Scheduler",
  "/ai-composer":"AI Composer"
}
const Layout = () => {
  const location = useLocation()
  const title = pageTitles[location.pathname] || "SocialAI"
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="flex h-screen bg-slate-50">
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <Sidebar isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 md:px-8 gap-4">
          <button
          aria-label="Open navigation menu"
            className="md:hidden p-2 -ml-2 text-slate-600"
            onClick={() => setIsMobileOpen(true)}
          >
            <MenuIcon className="size-6" />
          </button>
          <div className="md:py-3">
            <h1 className="text-slate-900">{title}</h1>
            <p className="text-sm text-slate-400 hidden sm:block">Manage and automate your social presence</p>
          </div>
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8 xl:p-12">
          <div className="w-full min-h-full pb-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
