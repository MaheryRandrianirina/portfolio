import { Languages } from "@/common/types"

export type Project = {
    title: string,
    description: string,
    image: string,
    image_two: string,
    usedTechnologies: string[],
    about: string
}

export type ProjectsContent<T extends Languages> = {
    [key in keyof T]?: {
        title: string,
        projects: Project[],
        button_label: string
    }
    
}

export const content: ProjectsContent<Languages> = {
    fr: {
        title: "Les projets auquels j'ai travaillé",
        projects: [
            {
                title: "Benkyo",
                description: "lorem ipsum lorem ipsum",
                image: "/images/projects/benkyo/benkyo_1.png",
                image_two: "/images/projects/benkyo/benkyo_2.png",
                usedTechnologies: ["PHP", "Javascript", "Scss", "Webpack", "MySQL"],
                about: "lorem lava be"
            },
            {
                title: "Ari",
                description: "lorem ipsum lorem ipsum",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "",
                usedTechnologies: ["NestJs", "ReactJs", "Material UI", "Axios", "MongoDB"],
                about: "lorem lava be"
            },
            {
                title: "Ari",
                description: "lorem ipsum lorem ipsum",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "",
                usedTechnologies: ["NestJs", "ReactJs", "Material UI", "Axios", "MongoDB"],
                about: "lorem lava be"
            }
        ],
        button_label: "En savoir plus"
    }
}