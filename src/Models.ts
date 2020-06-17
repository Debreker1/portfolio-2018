export class Project {
    public header: string
    public body: string
    // public img: string
    public link: string
    
    constructor(header: string, body: string, link: string)
    {
        this.header = header,
        this.body = body,
        // this.img = img,
        this.link = link
    }
}

export const projects = [
    // new Project(
    // "Stormwatch",
    // "Deze website is opgezet met behulp van wordpress. Deze site wordt gebruikt door een groep mensen in het spel Clash of Clans",
    // "stormwatch.jpg",
    // "http://stormwatch-clan.nl"),
    new Project(
        "Minigame",
        "Een minigame geschreven in python voor het tweede project op het HRO",
        // "minigame.png",
        "https://github.com/rrgraute/project2-minigame"
    ),
    new Project(
        "Contact tracker app",
        "Een mobiele applicatie voor het bijhouden hoe vaak jij je contactlenzen hebt gedragen",
        // "lenzen.png",
        "https://github.com/rrgraute/contactsTrackerApp"
    ),
    new Project(
        "Data visualizatie",
        "Een project in het eerste jaar van Hogeschool Rotterdam om een applicatie te maken voor het visualiseren van diefstal",
        // "project3.png",
        "https://github.com/rrgraute/project3"
    ),
    new Project(
        "Online webshop - API",
        "Webshop project om online drank te kunnen bestellen.",
        // "project3.png",
        "https://github.com/rrgraute/DrankReus-api"
    ),
    new Project(
        "Online webshop - Front-end",
        "Webshop project om online drank te kunnen bestellen.",
        // "project3.png",
        "https://github.com/rrgraute/drankreus-client"
    ),
    new Project(
        "Weather Wars",
        "Decentralized applicatie dat gebruik maakt van Ethereum om online weer weddenschappen te spelen",
        // "project3.png",
        "https://github.com/rrgraute/WeatherWars"
    ),
    new Project(
        "Type-safe LINQ in memory ",
        "Project voor de software engineering minor. LINQ-style ORM in TypeScript met type-safety.",
        // "project3.png",
        "https://github.com/rrgraute/ts-linq"
    )
]