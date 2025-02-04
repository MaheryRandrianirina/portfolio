import { Languages } from "@/common/types"

type HomeContent<T extends Languages> = {
    [key in keyof T]?: {
        title: string,
        description: string,
        label: string,
        photo: {
            alt: string
        },
        languages: {[key in keyof Languages]: string}
    }
}

export const content: HomeContent<Languages> = {
    fr: {
        title: "Développeur web",
        description: "Hello, je m'appelle RANDRIANIRINA Miranto Fifaliana Mahery.",
        label: "Créons quelque chose de grand ensemble !",
        photo: {
            alt: "Photo du super développeur relévant des défis jouraprès jour"
        },
        languages: {fr:"Français", en:"Anglais"}
    }
}