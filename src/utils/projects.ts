type Project = {
    name: string,
    repo: string
}

const PROJECTS: Map<string, Project> = new Map();

PROJECTS.set("icecream", {
    name: "IceCream",
    repo: "IceCreamMC/IceCream"
});

export default PROJECTS;