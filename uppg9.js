

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

//   function sort(numbers) {
//         const result = [];

//         for (let number of numbers) {
//             if (number % 2 === 0) {
//                 console.log(number, "jämt");
//                 result.push([number, "jämt"]);
//             } else {
//                 console.log(number, "udda");
//                 result.push([number, "udda"]);
//             }
//         }

//         return result;
//     }

//     return sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function sort(numbers) {
        const result = [];

        for (let number of numbers) {
            let label = (number % 2 === 0) ? "jämt" : "udda";
            console.log(number, label);
            result.push([number, label]);
        }

        return result;
    }

    return sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}

uppg9();

module.exports = { uppg9 };