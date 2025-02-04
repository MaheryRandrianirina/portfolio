"use client";

import { ThemeContext } from "@/common/context/ThemeContext";
import { Theme } from "@/common/types";
import { Home, About, Projects, Contact } from "@/components/sections";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme]= useState<Theme>("dark");

  useEffect(()=>{
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = ()=>{
    setTheme(theme => theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <main>
        <ThemeContext.Provider value={[theme, toggleTheme]}>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </ThemeContext.Provider>
      </main>
    </div>
  );
}
