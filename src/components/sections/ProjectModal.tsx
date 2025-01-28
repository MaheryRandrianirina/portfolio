import { FC, useEffect, useRef } from "react";
import { Project } from "./_projects-content";

export const ProjectModal: FC<{project: Project|null}> = ({project})=>{
    const modalRef = useRef<HTMLDivElement|null>(null);

    // useEffect(()=>{
    //     modalRef?.offsetWidth;
    // }, []);

    return <div ref={modalRef} className={`main-modal ${project && "active"} ${project?.title.toLowerCase()}`}>
        
    </div>
}