import { FC } from "react";
import aboutModule from "../../css/modules/about.module.css";
import { content } from "./_about-content";
import Image from "next/image";

export const About: FC = ()=>{
    return <section className={aboutModule.main} id="about">
        <h4 className="title">{content.fr?.title}</h4>
        <div className={aboutModule.articles}>
            <article className={aboutModule.article}>{content.fr?.description}</article>
            <article className={aboutModule.article}>&quot;{content.fr?.quote}&quot;</article>
            <video className={aboutModule.learning_animation} loop autoPlay src="/animations/learning.webm"></video>
        </div>
        <div className={aboutModule.skills}>
            <div className={aboutModule.skills_head}>
                <Image src="/images/saiyan.png" width={24} height={24} alt="sayan skills" className={aboutModule.saiyan_icon}/>
                <h5 className={aboutModule.skills_title}>{content.fr?.skills.title}</h5>
            </div>
            <div className={aboutModule.skills_list}>
                <div className={aboutModule.frontend}>
                    <p className={aboutModule.skill_category}>Frontend</p>
                    <ul className={aboutModule.skills_list_container}>
                    {content.fr?.skills.list.frontend.map(skill => <li className={aboutModule.skill} key={skill}>{skill}</li>)}
                    </ul>
                </div>
                <div className={aboutModule.backend}>
                    <p className={aboutModule.skill_category}>Backend</p>
                    <ul className={aboutModule.skills_list_container}>
                {content.fr?.skills.list.backend.map(skill => <li className={aboutModule.skill} key={skill}>{skill}</li>)}
                </ul>
                </div>
                <div className={aboutModule.tools}>
                    <p className={aboutModule.skill_category}>Outils</p>
                    <ul className={aboutModule.skills_list_container}>
                {content.fr?.skills.list.tools.map(skill => <li className={aboutModule.skill} key={skill}>{skill}</li>)}
                </ul>
                </div>
            </div>
        </div>
    </section>
}