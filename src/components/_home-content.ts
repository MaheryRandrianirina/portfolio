import { Languages } from "@/common/types"

type HomeContent<T extends Languages> = {
    [key in keyof T]?: {
        "title": string,
        "description": string,
        "label": string
    }
}

export const content: HomeContent<Languages> = {
    fr: {
        "title": "Développeur web",
        "description": "Hello, je m'appelle RANDRIANIRINA Miranto Fifaliana Mahery.",
        "label": "Créons quelque chose de grand ensemble !"
    }
}