import { Languages } from "@/common/types"

type ContactContent<T extends Languages> = {
    [key in keyof T]?: {
        title: string,
        list: {
            github: string,
            email: string,
            linkedin: string
        }
    }
}

export const content: ContactContent<Languages> = {
    fr: {
        title: "Me contacter",
        list: {
            github: "https://github.com/MaheryRandrianirina",
            email: "maheryrandrianirina@gmail.com",
            linkedin: "https://linkedin/MaheryRandrianirina"
        }
    }
}