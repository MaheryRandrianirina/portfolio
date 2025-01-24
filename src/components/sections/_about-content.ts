import { Languages } from "@/common/types"

type SkillGroup = {
    frontend: string[],
    backend: string[],
    tools: string[]
}

type AboutContent<T extends Languages> = {
    [key in keyof T]?: {
        title: string,
        description: string, 
        quote: string,
        skills: {
            title: string,
            list: SkillGroup
        }
    }
}

const skills = {
    frontend: ["Typescript", "ReactJs", "NextJs", "Bootstrap", "MaterialUI", "Redux"],
    backend: ["PHP", "Laravel", "NodeJs", "Express", "NestJs", "MySQL", "MongoDB"],
    tools: ["Vscode", "Git", "Github", "Gitlab", "Docker", "Figma", "Photoshop", "Illustrator", "InDesign"]
}

export const content: AboutContent<Languages> = {
    fr: {
        title: "A propos de moi",
        description: `Véritable passioné du dev depuis plusieurs années maintenant, je cherche toujours à m'améliorer
         continuellement. L'amour de l'apprentissage m'a poussé à expérimenter beaucoup de choses que ce soit en dev ou autres. 
         Pour moi, une journée passée sans apprendre de nouvelles choses est une journée perdue.
        `,
        quote: "1% meilleur chaque jour.",
        skills: {
            title: "Mes skills",
            list: skills
        }
    }
}