import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-slate-200/50
        bg-white/80
        backdrop-blur-md
        dark:border-slate-800
        dark:bg-slate-950/80
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          px-6
        "
      >
        {/* LEFT */}
        <div className="flex flex-1">
          <Logo />
        </div>

        {/* CENTER */}
        <div className="flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 justify-end gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
