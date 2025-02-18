export function DynamiseMenu(){
    const buttons = document.querySelectorAll(".menu__item") as NodeListOf<HTMLElement>;
    let activeButton = document.querySelector(".menu__item.active");

    buttons.forEach(item => {
        const text = item.querySelector(".menu__text") as HTMLElement;
        setLineWidth(text, item);

        window.addEventListener("resize", () => {
            setLineWidth(text, item);
        })

        item.addEventListener("click", function() {
            if (this.classList.contains("active")) return;

            this.classList.add("active");
            
            if (activeButton) {
                activeButton.classList.remove("active");
                activeButton.querySelector(".menu__text")?.classList.remove("active");
            }
            
            handleTransition(this, text);
            activeButton = this;
        });        
    });

    function setLineWidth(text: HTMLElement, item: HTMLElement) {
        const lineWidth = text.offsetWidth + "px";
        item.style.setProperty("--lineWidth", lineWidth);
    }
}

export function handleTransition(item: HTMLElement, text: HTMLElement) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;

        text.classList.add("active");
        
    });

}