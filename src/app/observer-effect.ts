import aboutModule from "@/css/modules/about.module.css";

export const addStyleOnView = (elementsOnView:HTMLElement[]) => {
    function handleEntryObservation(entry: IntersectionObserverEntry) {
        if(entry.isIntersecting) {
            if(entry.intersectionRatio < 0.75) return;

            if(entry.target.id === "articles") {
                if(entry.target.querySelector('video')) return;

                const videoWithTheAnimation = document.createElement("video");
                videoWithTheAnimation.loop = true;
                videoWithTheAnimation.autoplay = true;
                videoWithTheAnimation.src = "/animations/learning.webm";
                videoWithTheAnimation.className = aboutModule.learning_animation;
                
                entry.target.appendChild(videoWithTheAnimation);
            }else {
                entry.target.classList.add("visible");
            }
        }
    }

    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(handleEntryObservation);
    }, {
        root: document.body,
        rootMargin: "0px",
        threshold: .75
    });

    elementsOnView.forEach(elementOnView => observer.observe(elementOnView))
}