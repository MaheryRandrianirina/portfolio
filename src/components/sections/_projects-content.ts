import { Languages } from "@/common/types"

export type Project = {
    title: string,
    description: string,
    image: string,
    image_two: string,
    usedTechnologies: string[],
    about: {
        definition: string,
        techno_title: string
    }
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
                description: "Une application pour optimiser l'apprentissage.",
                image: "/images/projects/benkyo/benkyo_1.png",
                image_two: "/images/projects/benkyo/benkyo_2.png",
                usedTechnologies: ["PHP", "Javascript", "Sass", "Webpack", "MySQL"],
                about: {
                    definition: `Benkyo est une application basee sur methodes d'apprentissage prouvees scientifiquement afin d'optimiser les apprentissages. Que ce soit la menorisation des cours, l'apprentissage d'un nouveau sujet, etc... Benkyo est la pour aider.
                    L'pplication utilise des methodes telles que les repetitions espacees, la technique pomodoro et autres. L'utilisateur peut creer un emploi du tempset en un seul click, les repetitions sont generes suivant la methode de repetitions espacees.
                    En arrivant dans l'appliation, il voit directement ses revisions de la journee.`,
                    techno_title: "L'application a ete developpee en utilisant les technologies suivantes :"
                }
            },
            {
                title: "Ari",
                description: "Une application de gestion de projet.",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "/images/projects/ari/application_gestion_de_projet_3.png",
                usedTechnologies: ["NestJs", "ReactJs", "Material UI", "Axios", "MongoDB"],
                about: {
                    definition: `"Ari" signigie "fourmi" en japonais, un clin doeil a leur incroyabe capacite d'organisation. C'est une application de gestion de taches basee sur  le  Kanban,
                     ou l'administrateur peut creer des taches, les attribuer aux membres de l'equipe, et suivre leurs avancements.`,
                    techno_title: "Pour ce projet, j'ai utilise :"
                }
            },
            {
                title: "PRS",
                description: "Une application utilisee au sein de l'entreprise pour le remboursement des frais patients dans le cadre d'une etude clinique.",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "/images/projects/ari/application_gestion_de_projet_3.png",
                usedTechnologies: ["Laravel", "Javascript", "Mysql"],
                about: {
                    definition: `PRS est utilise par les patients d'une etude clinique, les laboratoires, ainsi que les agents du service de remboursement patients de Pharmaspecific.
                    Les patients peuvent demander le remboursement des frais qu'ils ont engage dans le cadre de l'etude. Pharmaspecific quand a lui verifie, valide puis envoit les demandes aux laboratoires qui par la suite valide ces dernieres afin de proceder aux paiements.
                    J'ai joue un tres grand role au sein du projet car j'etais en charge de migrer toute l'application de CodeIgniter vers le framework Laravel.`,
                    techno_title: "Pour ce projet, nous utisons :"
                }
            },
            {
                title: "Etalk",
                description: "Une application de chat classique.",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "/images/projects/ari/application_gestion_de_projet_3.png",
                usedTechnologies: ["NextJs", "Scss", "Mysql"],
                about: {
                    definition: `Etalk est une application de chat classique. Les utilisateurs s'inscrivent puis ils peuvent s'echanger des messages ou faire des appels videos et audios. Il est possible de voir les utilisateurs connectes, de bloquer certains, de voir leurs profils, etc...`,
                    techno_title: "Pour ce projet, les technologies utilisees sont :"
                }
            },
            {
                title: "ManaoCV",
                description: "Une application pour creer des CV modernes.",
                image: "/images/projects/ari/application_gestion_de_projet_3.png",
                image_two: "/images/projects/ari/application_gestion_de_projet_3.png",
                usedTechnologies: ["Laravel", "Sass", "Javasript", "Mysql", "Webpack"],
                about: {
                    definition: `Dans cette application, l'utilisateur peut choisir un modele et le remplir avec ses informations. Il peut voir le rendu avant de l'exporter en PDF. Il peut choisir de l'enregitrer pour le revoir plutard ou bien le modifier.`,
                    techno_title: "Pour ce projet, les technologies utilisees sont :"
                }
            }
        ],
        button_label: "En savoir plus"
    }
}