// Créez votre fonction ici

function calculate(n1, n2, op) {

    n1 = Number(n1);
    n2 = Number(n2);

    switch (op) {
        case '+':
            return n1 + n2;

        case '-':
            return n1 - n2;

        case '*':
            return n1 * n2;

        case '/':

            if (n2 != 0) {
                return n1 / n2;
            } else {
                return 'Division by zero is not allowed';
            }

        default:
            return 'Invalid operator';
    }

}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
