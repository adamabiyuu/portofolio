import { Link } from "react-scroll";

import { navigation } from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";

const NavLinks = () => {
  const { activeSection } = useActiveSection();

  return (
    <div className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          smooth
          duration={500}
          offset={-64}
          className={`
            cursor-pointer
            text-sm
            font-medium
            transition-all
            duration-300
            hover:text-sky-400
            ${activeSection === item.href ? "text-sky-400" : "text-slate-700 dark:text-slate-300"}
          `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
