import useTheme from "@/hooks/useTheme";

const Logo = () => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme}</button>;
};

export default Logo;
