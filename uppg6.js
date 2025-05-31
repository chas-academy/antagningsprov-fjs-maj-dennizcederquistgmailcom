

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    let names = [
        "Dennis", 
        "Kitten", 
        "Milo", 
        "Luna", 
        "Domino", 
        "Nyx"
    ];
    for(let name of names) {
        console.log(name);
    }
 
}

uppg6();

module.exports = { uppg6 };