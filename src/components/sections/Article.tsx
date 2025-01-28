import { FC } from "react";
import projectsModule from "../../css/modules/projects.module.css";
import { Project, ProjectsContent } from "./_projects-content";
import { Languages } from "@/common/types";

export const Article: FC<{
    project: Project,
    content: ProjectsContent<Languages>,
    onClick: (project: Project) => void  
}> = ({project, content, onClick})=>{

    return <article className={projectsModule.project}>
        <div className={projectsModule.image_outline}>
            <img className={projectsModule.image} src={project.image} alt={project.image}/>
        </div>
        <div className={projectsModule.label}>
            <p className={projectsModule.title}>{project.title}</p>
            <button className={projectsModule.know_more} onClick={() => onClick(project)}>{content.fr?.button_label}</button>
        </div>
    </article>
}