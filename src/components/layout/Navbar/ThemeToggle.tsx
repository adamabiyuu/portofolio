import { FiMoon, FiSun } from "react-icons/fi";

import useTheme from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        transition-all
        duration-300
        hover:bg-slate-200
        dark:hover:bg-slate-800
      "
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
