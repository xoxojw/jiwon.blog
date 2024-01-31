import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  // to find system theme
  useEffect(() => setMounted(true), []);

  return (
    <button onClick={() => {setTheme(currentTheme === "light" ? "dark" : "light")}}>
      {currentTheme === "light" ? <LuMoonStar size={20} /> : <LuSun size={20} />}
    </button>
  )
}

export default DarkModeButton;