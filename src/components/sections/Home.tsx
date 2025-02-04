import { FC } from "react";
import homeModule from "../../css/modules/home.module.css";
import { content } from "@/components/sections/_home-content";
import Image from "next/image";

const navList = [
    "home",
    "about",
    "projects",
    "contact"
];

export const Home: FC = ()=>{
    return <section className={homeModule.main} id="home">
        <header className={homeModule.header}>
            <p>logo</p>
            <nav>
                <ul>
                    {navList.map(menu => <li key={`${menu}_${navList.indexOf(menu)}`} className={homeModule.menu_item}><a href={`#${menu}`} className={homeModule.link}>{menu}</a></li>)}
                </ul>
            </nav>
            {/* <div className={homeModule.header_right}>
                <select className={homeModule.languages_switcher}>
                    <option value="fr">{content.fr?.languages.fr}</option>
                    <option value="en">{content.fr?.languages.en}</option>
                </select>
            </div> */}
        </header>
        <div className={homeModule.body}>
            <div className={homeModule.left}>
                <h2 className={homeModule.title}>{content.fr?.title}</h2>
                <div className={homeModule.description_container}>
                    <p className="description">{content.fr?.description}</p>
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