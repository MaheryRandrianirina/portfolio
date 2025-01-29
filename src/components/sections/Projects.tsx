"use client"

import { FC, MouseEventHandler, useState } from "react";
import { content, Project } from "./_projects-content";
import projectsModule from "../../css/modules/projects.module.css";
import { Article } from "./Article";
import { createPortal } from "react-dom";
import { ProjectModal } from "./ProjectModal";


export const Projects: FC = ()=>{
    
    const [projectInModal, setProjectInModal] = useState<Project|null>(null);

    const handleShowProjectModal = (project: Project)=>{
        setProjectInModal(project);

        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const handleCloseProjectModal: MouseEventHandler = ()=>{
        setProjectInModal(null);
    }

    return <section id="projects">
        <h4 className="title">{content.fr?.title}</h4>
        <div className={projectsModule.articles}>
            {content.fr?.projects.map(project => {
                return <Article key={project.title} onClick={handleShowProjectModal} project={project} content={content}/>
            })}
        </div>
        
        {createPortal(<ProjectModal onClickCloseButton={handleCloseProjectModal} project={projectInModal}/>, document.body)}
    </section>
}