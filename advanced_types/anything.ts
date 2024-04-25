type People =  {
    name: string;
    age: number;
    job?: string;
}

const people: People = {
    name: "Alexandre",
    age: 20,
    // job: "dev"
}

console.log(people.job?.toUpperCase() ?? "there's no job.");