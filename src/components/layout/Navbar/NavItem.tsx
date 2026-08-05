import { motion } from "framer-motion";
import { Link } from "react-scroll";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}

const NavItem = ({ href, label, icon: Icon, active }: NavItemProps) => {
  return (
    <Link to={href} smooth spy duration={500} offset={-80} className="group relative cursor-pointer">
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ y: -2 }}
        className={cn(
          `
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl

            transition-all
            duration-300

            sm:h-12
            sm:w-12
          `,
          active ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30" : "text-slate-400 hover:bg-slate-800 hover:text-white",
        )}
      >
        <Icon size={20} />
      </motion.div>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none

          absolute
          left-1/2
          top-full

          mt-2

          -translate-x-1/2

          rounded-lg

          bg-slate-900

          px-3
          py-1.5

          text-xs
          font-medium
          whitespace-nowrap

          text-white

          opacity-0

          transition-all
          duration-200

          group-hover:translate-y-1
          group-hover:opacity-100
        "
      >
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
