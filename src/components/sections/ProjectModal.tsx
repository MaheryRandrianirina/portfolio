import { FC, MouseEventHandler } from "react";
import { Project } from "./_projects-content";
import projectModalModule from "../../css/modules/project-modal.module.css";
import { content as commonContent } from "./_common-content";

export const ProjectModal: FC<{
    project: Project|null,
    onClickCloseButton: MouseEventHandler
}> = ({project, onClickCloseButton})=>{

    return <div className={`main-modal ${project && "active"} ${project?.title.toLowerCase()}`}>
        <button onClick={onClickCloseButton} className={projectModalModule.close_btn}>{commonContent.fr.close}</button>
        <header>
            <h3 className={projectModalModule.title}>{project?.title}</h3>
            <p>{project?.description}</p>
        </header>
        <main className={projectModalModule.main}>
            <img className={projectModalModule.img} src={project?.image_two} alt="" />
            <div className={projectModalModule.about}>
                <p className={projectModalModule.definition}>{project?.about.definition}</p>
                <p className={projectModalModule.techno_title}>{project?.about.techno_title}</p>
                <ul className={projectModalModule.technos}>{
                    project?.usedTechnologies.map(techno => <li key={techno}>{techno}</li>)
                }</ul>
            </div>
        </main>
    </div>
}