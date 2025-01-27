import { Languages } from "@/common/types"

type Project = {
    title: string,
    description: string,
    image: string,
    usedTechnologies: string[]
}

type ProjectsContent<T extends Languages> = {
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
                usedTechnologies: ["PHP", "Javascript", "Scss", "Webpack", "MySQL"]
            },
            {
                title: "Ari",
                description: "lorem ipsum lorem ipsum",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                usedTechnologies: ["NestJs", "ReactJs", "Material UI", "Axios", "MongoDB"]
            }
        ],
        button_label: "En savoir plus"
    }
}