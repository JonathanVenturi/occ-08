// Créez votre fonction ici

function calculateAverage(numarray) {

    if (typeof numarray === 'undefined') {
        return 'No numbers to calculate average';
    } else {
        return numarray.reduce((acc, val) => acc + val) / numarray.length;
    }

}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
