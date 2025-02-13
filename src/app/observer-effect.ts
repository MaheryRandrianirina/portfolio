export const addStyleOnView = (elementsOnView:HTMLElement[]) => {
    const observer = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.intersectionRatio >= 0.75) {
                    entry.target.classList.add("visible");
                }
            }
        });
    }, {
        root: document.body,
        rootMargin: "0px",
        threshold: .5
    });

    elementsOnView.forEach(elementOnView => observer.observe(elementOnView))
}