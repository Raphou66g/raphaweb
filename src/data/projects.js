export const projects = [
    {
        id: "suiveur",
        title: "Robot suiveur de ligne🎓",
        date: "2023-11-10",
        brief: "Un robot... avec une camera... qui suit une ligne... Plus explicite c'est compliqué",
        description: ["Projet réalisé dans le cadre de ma formation conjointement avec des étudiants de l'ENSEIRB-MATMECA"],
        image: "/assets/projects/homard/preview.png",
        media: [
            { type: "image", src: "/assets/projects/homard/preview.png" },
            { type: "video", src: '/assets/projects/homard/2023-10-05_17-16-43.mp4', thumbnail: '/assets/projects/homard/preview.png' },
        ],
        links: [{ name: "GitHub", url: "https://github.com/mcaravati/firstbot" }]
    },
    {
        id: "bedled",
        title: "BedLed🔧",
        date: "2024-12-11",
        brief: "Projet mélant Arduino et Android, le tout en Bluetooth",
        description: ["Ayant un lit mezzanine, j'ai installé mon bureau en dessous. Cependant, la lumière du plafond n'éclaire pas suffisament mon bureau. J'ai donc décidé de créer un système d'éclairage LED contrôlable depuis mon téléphone.", "Le projet est composé de deux parties : une partie hardware avec un Arduino, une bande de LED ainsi qu'un module bluetooth, et une partie software avec une application Android.", "L'application permet de contrôler la couleur et l'intensité de la lumière"],
        image: '/assets/projects/bedled/preview.png',
        media: [
            { type: "image", src: "/assets/projects/bedled/preview.png" },
        ],
        links: [{ name: "GitHub", url: "https://github.com/Raphou66g/bedleds" }]
    },
    {
        id: "web",
        title: "Ma page Web🔧",
        date: "2025-02-03",
        brief: "Vous êtes actuellement en train de visiter ce projet",
        description: ["Une page web afin de présenter mes projets et mes compétences", "Le site est réalisé en HTML, CSS et JavaScript, et utilise le framework Vue.js"],
        image: '/assets/projects/web/preview.png',
        media: [
            { type: "image", src: "/assets/projects/web/preview.png" },
        ],
        links: [{name: "GitHub", url: "https://github.com/Raphou66g/raphaweb" }]
    },
    {
        id: "crossprices",
        title: "CrossPrices🔧",
        date: "2024-06-24",
        brief: "Comparateur de prix pour composer son meilleur menu au meilleur prix",
        description: ["Une problématique récurrente lorsque l'on veut manger au fast-food plus qu'un menu mais moins que deux, c'est de prendre un menu et un sandwich seul.", "Mais quel menu prendre pour que cela soit le plus avantageux ?", "CrossPrices est un \"comparateur\" de prix pour composer son meilleur menu au meilleur prix.", "Le principe repose sur un simple produit en croix, d'où le nom de l'application."],
        image: '/assets/projects/crossprices/preview.jpg',
        media: [
            { type: "image", src: "/assets/projects/crossprices/preview.jpg" },
            { type: "image", src: "/assets/projects/crossprices/CrossPrices_cap00.jpg" },
            { type: "image", src: "/assets/projects/crossprices/CrossPrices_cap01.jpg" },
            { type: "image", src: "/assets/projects/crossprices/CrossPrices_cap02.jpg" },
        ],
        links: [{ name: "GitHub", url: "https://github.com/Raphou66g/CrossPrices" }]
    },
    {
        id: "dogs-flies-ISR",
        title: "Dogs Flies ISR [Stage]🎓",
        date: "2024-09-30",
        brief: "Mise en place d'un système hétérogène de drones et de robots terrestres dans un contexte ISR (Intelligence, Surveillance, Reconnaissance)",
        description: [],
        image: '/assets/projects/dogs-flies-ISR/preview.png',
        media: [
            { type: "image", src: "/assets/projects/dogs-flies-ISR/preview.png" },
            { type: "video", src: '/assets/projects/dogs-flies-ISR/2024-07-24_14-55-25.mp4', thumbnail: '/assets/projects/dogs-flies-ISR/preview.png' },
            { type: "image", src: "/assets/projects/dogs-flies-ISR/jetson_case_render.webp" },
            { type: "image", src: "/assets/projects/dogs-flies-ISR/ZEDM_case_render.webp" },

        ],
        links: [{ name: "GitHub", url: "https://github.com/Raphou66g/dogs-flies-ISR" }]
    },
    {
        id: "pfe_plafond",
        title: "Araignée [PFE_Plafond]🎓",
        date: "2024-01-22",
        brief: "Fixation d'un drone au plafond par l'usage d'un électro-aimant",
        description: ["Le projet consiste à fixer un drone au plafond par l'usage d'un électro-aimant connecté à un Arduino disposant d'une caméra. Nous sommes donc partie sur un modèle ESP32-CAM.", "Le drone est équipé d'un code Aruco pour le positionnement sous l'aimant.", "Via un ordinateur faisant office de serveur, il est possible de contrôler le drone via une interface python.", "Le projet a été réalisé dans le cadre de mon Projet de Fin d'Etudes (PFE) en binôme avec un camarade de promotion."],
        image: '/assets/projects/pfe_plafond/preview.png',
        media: [
            { type: "image", src: "/assets/projects/pfe_plafond/preview.png" },
            { type: "image", src: "/assets/projects/pfe_plafond/schema_aimant_1.png" },
            { type: "image", src: "/assets/projects/pfe_plafond/schema_aimant_2.png" },
            { type: "video", src: "/assets/projects/pfe_plafond/2024-02-20_13-42-41.mp4", thumbnail: "/assets/projects/pfe_plafond/thumbnail_2024-02-20.png" },
            { type: "video", src: "/assets/projects/pfe_plafond/VID20240325153236.mp4", thumbnail: "/assets/projects/pfe_plafond/thumbnail_36.png" },
            { type: "video", src: "/assets/projects/pfe_plafond/VID20240325153325.mp4", thumbnail: "/assets/projects/pfe_plafond/thumbnail_25.png" },

        ],
        links: [
            { name: "GitHub", url: "https://github.com/Raphou66g/PFE_Plafond" },
            { name: "Google Slides", url: "https://docs.google.com/presentation/d/1x0QkTUWgqnmsGjQ6oGbvqM4USY7EC-fq53iSOt0BtJo/" },
            { name: "Google Slides", url: "https://docs.google.com/presentation/d/13_3GWsDMv7wsGyHBu3Ipx6H079S2jQxVbpZYl7Qn0qs/" }
        ]
    },
    {
        id: "ubinone",
        title: "UBInOne🔧 (Non terminé)",
        date: "2024-01-27",
        brief: "Application Android pour la gestion de la vie étudiante sur le campus Bordeaux-Talence (Emploi du temps étudiant, edt CREMI, salles libres)",
        description: ["Le projet UBInOne, succésseur de UBFreeRoom, est une application Android pour la gestion de la vie étudiante sur le campus Bordeaux-Talence.", "L'application permet surtout de consulter son emploi du temps étudiant, l'emploi du temps du CREMI et les salles libres", "J'ai réalisé se projet en solo après avoir décortiqué toutes les requêtes HTTP du site de Celcat pour récupérer les données telles que les noms de groupes, les salles et batiments, les emplois du temps, etc.", "Cette application m'a surtout servi sur la fin de mes études pour la recherche de salles libres pour pouvoir manger, réviser ou s'entrainer aux oraux avec mes camarades", "Le projet n'est pas terminé, il reste encore des fonctionnalités à implémenter."],
        image: '/assets/projects/ubinone/preview.png',
        media: [
            { type: "image", src: "/assets/projects/ubinone/preview.png" },
            { type: "image", src: "/assets/projects/ubinone/UBInOne_01.jpg" },
            { type: "image", src: "/assets/projects/ubinone/UBInOne_02.jpg" },
            { type: "image", src: "/assets/projects/ubinone/UBInOne_03.jpg" },
            { type: "image", src: "/assets/projects/ubinone/UBInOne_04.jpg" },
        ],
        links: []
    },
    {
        id: "ubfreeroom",
        title: "UBFreeRoom🔧 (Remplacé par UBInOne)",
        date: "2023-05-24",
        brief: "Application Android permettant de consulter les salles libres sur le campus Bordeaux-Talence",
        description: ["Ce projet est le prédécesseur d'UBInOne. Il permettait de consulter les salles libres sur le campus Bordeaux-Talence.", "Le projet a été réalisé en solo et m'a permis de me familiariser avec le développement Android.", "Le projet a été abandonné au profit d'UBInOne qui reprend les fonctionnalités d'UBFreeRoom et en ajoute d'autres."],
        image: '/assets/projects/ubfreeroom/preview.png',
        media: [
            { type: "image", src: "/assets/projects/ubfreeroom/preview.png" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_01.jpg" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_02.jpg" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_03.jpg" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_04.jpg" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_05.jpg" },
            { type: "image", src: "/assets/projects/ubfreeroom/UBFreeRoom_06.jpg" },
        ],
        links: []
    },{
        id: "aspicproj",
        title: "ASPICproj - NFCARDUI 🎓",
        date: "2024-01-09",
        brief: "Application d'un système de vérouillage/dévérouillage par NFC",
        description: [],
        image: '/assets/projects/aspicproj/preview.png',
        media: [
            { type: "image", src: "/assets/projects/aspicproj/preview.png" },
            { type: "video", src: '/assets/projects/aspicproj/ProjetMMSE_NFCARDUI.mp4', thumbnail: '/assets/projects/aspicproj/thumbnail.png' },
        ],
        links: [{ name: "GitLab", url: "https://gitlab.com/raphou66g/aspicproj" }]
    }
    /*
    ,{
        id: "name-id",
        title: "Name 🎓🔧",
        date: "YYYY-MM-DD",
        brief: "brief",
        description: [],
        image: '/assets/projects/name-id/preview.png',
        media: [
            { type: "image", src: "/assets/projects/name-id/preview.png" },
            { type: "video", src: '/assets/projects/name-id/2024-07-24 14-55-25.mp4', thumbnail: '/assets/projects/name-id/preview.png' },
            { type: "image", src: "/assets/projects/name-id/jetson_case_render.webp" },
            { type: "image", src: "/assets/projects/name-id/ZEDM_case_render.webp" },

        ],
        links: [{ name: "GitHub", url: "https://github.com/Raphou66g/name-id" }]
    }
    */
];