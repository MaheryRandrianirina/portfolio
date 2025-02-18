"use client";

import { ThemeContext } from "@/common/context/ThemeContext";
import { Theme } from "@/common/types";
import { Home, About, Projects, Contact } from "@/components/sections";
import { useEffect, useState } from "react";
import { addStyleOnView } from "./observer-effect";

export default function App() {
  const [theme, setTheme]= useState<Theme>("dark");

  useEffect(()=>{
    document.body.className = theme;
    
    addStyleOnView([
      document.querySelector("#function") as HTMLElement,
      document.querySelector("small") as HTMLElement,
      document.querySelector(".about_me") as HTMLElement,
      document.querySelector("#articles") as HTMLElement
    ]);
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
