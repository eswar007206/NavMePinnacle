import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileBottomNav from "@/components/dashboard/MobileBottomNav";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-[100dvh] w-full min-w-0 bg-background transition-colors duration-500 overflow-hidden">
      <div className="gradient-mesh" aria-hidden />
      <div className="flex flex-1 min-h-0">
        <div className="hidden md:block shrink-0">
          <DashboardSidebar />
        </div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-w-0 relative z-10 bg-background pb-24 md:pb-8 overflow-y-auto overflow-x-hidden scrollbar-glass"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
            <Outlet />
          </div>
        </motion.main>
      </div>
      <footer
        className="shrink-0 bg-[hsl(var(--footer-background))] text-[hsl(var(--footer-foreground))] text-xs py-3 px-4 sm:px-6 pb-20 md:pb-3 border-t border-white/10 safe-area-bottom"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span>Pinnacle Admin</span>
          <span>Facility management &amp; navigation</span>
        </div>
      </footer>
      <MobileBottomNav />
    </div>
  );
}
