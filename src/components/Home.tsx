import { FC } from "react";
import homeModule from "../css/modules/home.module.css";
import { content } from "@/components/_home-content";
import Image from "next/image";

const navList = [
    "home",
    "about",
    "projects",
    "contact"
];

export const Home: FC<{}> = ()=>{
    return <section className={homeModule.main}>
        <header className={homeModule.header}>
            <p>logo</p>
            <nav>
                <ul>
                    {navList.map(menu => <li key={`${menu}_${navList.indexOf(menu)}`}><a href={`#${menu}`}>{menu}</a></li>)}
                </ul>
            </nav>
        </header>
        <div className={homeModule.body}>
            <div className={homeModule.left}>
                <h1 className="title">{content.fr?.title}</h1>
                <div>
                    <p className="description">{content.fr?.description}</p>
                    <small className="label">{content.fr?.label}</small>
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