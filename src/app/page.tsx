import { Home, About, Projects } from "@/components/sections";
import dynamic from "next/dynamic";

export default function App() {
  return (
    <div>
      <main>
        <Home/>
        <About/>
        <Projects/>
      </main>
    </div>
  );
}
