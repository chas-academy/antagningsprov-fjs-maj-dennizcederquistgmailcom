

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let persons = [
    {name: "Dennis", age: 38},
    {name: "Kitten", age: 35},
    {name: "Milo", age: 6},
    {name: "Luna", age: 4},
    {name: "Domino", age: 10}
];

function printPersonsOver30(persons) {
    for (let person of persons) {
        if (person.age > 30) {
            console.log(person.name);
        }
    }

}

printPersonsOver30(persons);

}

uppg8();

module.exports = { uppg8 };