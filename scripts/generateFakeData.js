const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

function generateAnimals() {
    const animals = [];
    for (let i = 0; i <= 1000; i++) {
        animals.push({
            name: faker.name.firstName(),
            id: faker.datatype.uuid(),
            photo: faker.image.cats(128, 128, true),
            description: faker.lorem.paragraph(),
        });
    }

    return animals;
}

function generatePersons() {
    const persons = [];
    for (let i = 0; i <= 1000; i++) {
        persons.push({
            name: faker.name.fullName(),
            id: faker.datatype.uuid(),
            job: faker.name.jobTitle(),
            picture: faker.image.avatar(),
        });
    }

    return persons;
}

async function run() {
    const animals = generateAnimals();
    const persons = generatePersons();
    fs.writeFileSync(path.join(__dirname, "../src/assets/animals.json"), JSON.stringify(animals, null, 4));
    fs.writeFileSync(path.join(__dirname, "../src/assets/persons.json"), JSON.stringify(persons, null, 4));
}

run();
