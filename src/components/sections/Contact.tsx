import { FC } from "react";
import { content } from "./_contact-content"
import ContactModule from "@/css/modules/contact.module.css";
import { Email } from "../icons/email";
import { Github } from "../icons/github";
import { Linkedin } from "../icons/linkedin";

export const Contact: FC = ()=>{
    return <section id="contact">
        <h4 className="title">{content.fr?.title}</h4>
        <div className={ContactModule.list} id="contact_list">
            <div className={ContactModule.link_container}>
                <Github className={ContactModule.icon}/>
                <a className={ContactModule.link} href={content.fr?.list.github}>Github</a>
            </div>
            <div className={ContactModule.link_container}>
                <Email className={ContactModule.icon}/>
                <span>{content.fr?.list.email}</span>
            </div>
            <div className={ContactModule.link_container}>
                <Linkedin className={ContactModule.icon}/>
                <a className={ContactModule.link} href={content.fr?.list.linkedin}>Linkedin</a>
            </div>
        </div>
    </section>
}