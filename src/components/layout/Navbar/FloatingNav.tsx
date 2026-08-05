import useActiveSection from "@/hooks/useActiveSection";

import NavItem from "./NavItem";
import { navigation } from "./navigation";

const FloatingNav = () => {
  const { activeSection } = useActiveSection();

  return (
    <header
      className="
        fixed
        inset-x-0
        top-4
        z-50
        flex
        justify-center
        px-4
      "
    >
      <nav
        className="
          flex
          items-center
          gap-1

          rounded-2xl
          border
          border-slate-800/80

          bg-slate-900/80
          backdrop-blur-xl

          p-2

          shadow-2xl

          w-fit
          max-w-full
        "
      >
        {navigation.map((item) => (
          <NavItem key={item.href} href={item.href} label={item.label} icon={item.icon} active={activeSection === item.href} />
        ))}
      </nav>
    </header>
  );
};

export default FloatingNav;
