import { FC } from "react";
import { content } from "./_projects-content";
import projectsModule from "../../css/modules/projects.module.css";


export const Projects: FC = ()=>{
    return <section id="projects">
        <h4 className="title">{content.fr?.title}</h4>
        <div className={projectsModule.articles}>
            {content.fr?.projects.map(project => {
                return <article key={project.title} className={projectsModule.project}>
                    <div className={projectsModule.image_outline}>
                        <img className={projectsModule.image} src={project.image} alt={project.image}/>
                    </div>
                    <div className={projectsModule.label}>
                        <p className={projectsModule.title}>{project.title}</p>
                        <button className={projectsModule.know_more}>{content.fr?.button_label}</button>
                    </div>
                </article>
            })}
        </div>
    </section>
}