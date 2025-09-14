import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 
                 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <span className="text-lg">
        {theme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default ThemeToggle;
