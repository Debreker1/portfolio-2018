export class Project {
    public header: string
    public body: string
    public img: string
    public link: string
    
    constructor(header: string, body: string, img: string, link: string)
    {
        this.header = header,
        this.body = body,
        this.img = img,
        this.link = link
    }
}

export const projects = [
    new Project(
    "Stormwatch",
    "Deze website is opgezet met behulp van wordpress. Deze site wordt gebruikt door een groep mensen in het spel Clash of Clans",
    "stormwatch.jpg",
    "http://stormwatch-clan.nl")
]