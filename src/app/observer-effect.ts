import { handleTransition } from "@/common/utils/menu";
import aboutModule from "@/css/modules/about.module.css";

export const addStyleOnView = (elementsOnView:HTMLElement[]) => {
    function handleEntryObservation(entry: IntersectionObserverEntry) {
        if(entry.isIntersecting) {
            if(entry.intersectionRatio < 0.75) return;

            const sectionsIds = ["home", "about", "projects", "contact"];
            
            if(entry.target.id === "articles") {
                if(entry.target.querySelector('video')) return;

                const videoWithTheAnimation = document.createElement("video");
                videoWithTheAnimation.loop = true;
                videoWithTheAnimation.autoplay = true;
                videoWithTheAnimation.src = "/animations/learning.webm";
                videoWithTheAnimation.className = aboutModule.learning_animation;
                
                entry.target.appendChild(videoWithTheAnimation);
            }else if(sectionsIds.includes(entry.target.id)) {
                // Change active menu
                const buttons = document.querySelectorAll(".menu__item") as NodeListOf<HTMLLinkElement>;
                let activeButton = document.querySelector(".menu__item.active");

                const correspondantMenu = Array.from(buttons).filter(item => item.href.split("#")[1] === entry.target.id)[0];
                const text = correspondantMenu.querySelector(".menu__text") as HTMLElement;
                correspondantMenu.classList.add("active");
            
                if (activeButton) {
                    activeButton.classList.remove("active");
                    activeButton.querySelector(".menu__text")?.classList.remove("active");
                }
                
                handleTransition(correspondantMenu, text);
            }else {
                entry.target.classList.add("visible");
            }
        }
    }

    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(handleEntryObservation);
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 1
    });

    elementsOnView.forEach(elementOnView => observer.observe(elementOnView))
}