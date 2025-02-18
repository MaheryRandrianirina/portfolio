"use client";

import { FC, use, useEffect, useRef } from "react";
import homeModule from "../../css/modules/home.module.css";
import { content } from "@/components/sections/_home-content";
import Image from "next/image";
import { ThemeContext } from "@/common/context/ThemeContext";
import { Sun } from "../icons/sun";
import { Moon } from "../icons/moon";
import { Menu } from "./Menu";
import anime from "animejs";

function Hello(){

    useEffect(()=>{
        anime({
            targets: ".hello span",
            opacity: [0, 1],
            translateX: [30, 0],
            easing: "easeOutExpo",
            duration: 500,
            delay: anime.stagger(100)
        });
    }, []);

    return <div className="hello">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span> </span>
        <span>!</span>
        <span> </span>
        <span>J</span>
        <span>e</span>
        <span> </span>
        <span>m</span>
        <span>'</span>
        <span> </span>
        <span>a</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span> </span>
        <span>M</span>
        <span>a</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
        <span> </span>
        <span>R</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>R</span>
        <span>I</span>
        <span>A</span>
        <span>N</span>
        <span>I</span>
        <span>R</span>
        <span>I</span>
        <span>N</span>
        <span>A</span>
        <span>.</span>
    </div>
}

export const Home: FC = ()=>{
    const [theme, toggleTheme] = use(ThemeContext);
    const homeSectionRef = useRef<HTMLElement|null>(null);
    const headerRef = useRef<HTMLElement|null>(null);

    useEffect(()=>{
        const homeSection = homeSectionRef.current;
        const header = headerRef.current;
        if(homeSection && header) {
            const widthPercent = homeSection.offsetWidth * 100 / window.innerWidth;
            header.style.width = `${widthPercent}%`;
        }
    }, []);

    return <section className={homeModule.main} id="home" ref={homeSectionRef}>
        <header className={homeModule.header} ref={headerRef}>
            <p>logo</p>
            <Menu/>
            <div className={homeModule.header_right}>
                {/* <select className={homeModule.languages_switcher}>
                    <option value="fr">{content.fr?.languages.fr}</option>
                    <option value="en">{content.fr?.languages.en}</option>
                </select> */}
                <div className="modes">
                    {theme === "dark" ? <Sun className={homeModule.theme_icon} onClick={toggleTheme}/> : <Moon className={homeModule.theme_icon} onClick={toggleTheme}/>}
                </div>
            </div>

        </header>
        <div className={`${homeModule.body} home-body`}>
            <div className={homeModule.left}>
                <h3 className={homeModule.title} id="function">{content.fr?.title}</h3>
                <div className={`${homeModule.description_container} hello-container`}>
                    <Hello/>
                    <small className={homeModule.description_label}>{content.fr?.label}</small>
                </div>
            </div>
            <div className={homeModule.right}>
                <Image 
                    src="/images/photo.jpg" 
                    alt={content.fr?.photo.alt as string}
                    width={200} 
                    height={200}
                />
            </div>
        </div>
    </section>
}