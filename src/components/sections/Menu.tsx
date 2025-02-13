import { FC, useEffect } from "react";
import "../../css/menu.css";

const navList = {
    fr: {
        home: "Accueil",
        about: "A propos",
        projects: "Projets",
        contact: "Me contacter"
    }
};

function DynamiseMenu(){
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

    function handleTransition(item: HTMLElement, text: HTMLElement) {

        item.addEventListener("transitionend", (e) => {

            if (e.propertyName != "flex-grow" || 
            !item.classList.contains("active")) return;

            text.classList.add("active");
            
        });

    }
}

export const Menu: FC = () => {

    useEffect(()=>{
        DynamiseMenu();
    }, []);
  return (
    <menu className="menu">
      <a className="menu__item active" href="#home">
        <div className="menu__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className="icon"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </div>
        <strong className="menu__text active">{navList.fr.home}</strong>
      </a>

      <a className="menu__item" href="#about">
        <div className="menu__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className="icon"
          >
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          </svg>
        </div>
        <strong className="menu__text">{navList.fr.about}</strong>
      </a>

      <a className="menu__item" href="#projects">
        <div className="menu__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            width="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className="icon"
          >
            <path d="M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
          </svg>
        </div>
        <strong className="menu__text">{navList.fr.projects}</strong>
      </a>

      <a className="menu__item" href="#contact">
        <div className="menu__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
            className="icon"
          >
            <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z" />
          </svg>
        </div>
        <strong className="menu__text">{navList.fr.contact}</strong>
      </a>
    </menu>
  );
};
