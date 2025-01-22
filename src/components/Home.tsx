import { FC } from "react";
import homeModule from "../css/modules/home.module.css";
import { content } from "@/components/_home-content";
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
                    {navList.map(menu => <li><a href={`#${menu}`}>{menu}</a></li>)}
                </ul>
            </nav>
        </header>
        <div className={homeModule.body}>
            <h1 className="title">{content.fr?.title}</h1>
            <p className="description">{content.fr?.description}</p>
            <small className="label">{content.fr?.label}</small>
        </div>
    </section>
}