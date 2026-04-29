/**
 * EJERCICIO 1

Hacer un programa que:

    Solicite al usuario el ingreso por teclado de 3 notas
    Saque la media de las notas
    Muestre por pantalla

    Si la nota es menor que 5 'SUSPENSO'
    Si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    Si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'

 */
function calcularNotas() {
    let totalNotas = 0
    for (let i = 1; i <= 3; i++) {
        let nota = window.prompt(`Ingrese la nota ${i}`)
        totalNotas += Number(nota)
    }
    let notaMedia = (totalNotas / 3).toFixed(2)

    if (notaMedia > 10 || notaMedia < 0) {
        window.alert(`NOTA INVALIDA: ${notaMedia}, Ingresa de nuevo tus notas`)
    } else if (notaMedia >= 7)
        window.alert(`sobresaliente, tu nota media = ${notaMedia}`)
    else if (notaMedia >= 5) {
        window.alert(`APROBADO, tu nota media = ${notaMedia}`)
    } else {
        window.alert(`SUSPENSO, tu nota media = ${notaMedia}`)
    }
}

//calcularNotas()


/***
 * EJERCICIO 2

Hacer un programa que:

    Ingreso de un numero por teclado
    Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras

 */

function cifrasDeNumero() {
    let numero = Number(window.prompt(`Engrese un numero`))

    if (Number(numero)) {
        window.alert(`Tu numero tiene ${String(numero).length} cifras`)
    } else {
        window.alert(`No es Numero`)
    }

}
// cifrasDeNumero();


/****
 * 
EJERCICIO 3

Solicite al usuario que escriba un color. 
Si ese color existe que lo traduzca al inglés, 
sino que muestre un mensaje de error

 */
function colorEnIngles() {

    let color = window.prompt(`Escriba un color`).trim().toLowerCase()

    switch (color) {
        case "blanco":
            window.alert(`${color} en Ingles es : WHITE`)
            break;
        case "negro":
            window.alert(`${color} en Ingles es : BLACK`)
            break;
        case "verde":
            window.alert(`${color} en Ingles es : GREEN`)
            break;
        case "azul":
            window.alert(`${color} en Ingles es : BLUE`)
            break;
        case "amarillo":
            window.alert(`${color} en Ingles es : YELLOW`)
            break;
        case "marron":
            window.alert(`${color} en Ingles es : BROWN`)
            break;
        case "naranja":
            window.alert(`${color} en Ingles es : ORANGE`)
            break;
        default: window.alert(`Ese color "${color}" NO EXISTE`)

    }
}
// colorEnIngles()

/**
 * EJERCICIO 4

Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:

    Cuantos son positivos
    Cuantos son negativos
    Cuantos son pares

 */

function programaNumeros() {
    let numeros = []
    let positivos = 0;
    let negativos = 0;
    let pares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = Number(window.prompt(`Engrese numero ${i}`))
        if (numero >= 0) {
            positivos += 1
        } else {
            negativos += 1;
        }
        if (numero % 2 === 0) {
            pares += 1
        }
        numeros.push(numero)
    }

    console.log(`La lista de "${numeros}" tiene ${positivos} numeros positivos, ${negativos} numeros negativos, y ${pares} numeros pares`)
}
//programaNumeros()


/***
 * EJERCICIO 5

Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.

    Almacenar todos los números en un array
    Almacenar en otro array los números comprendidos entre el 1 y 250
    Almacenar en otro array los números comprendidos entre el 251 y 500

 * 
 */

function processArrays() {
    let todosNumeros = [];
    let listaNumeros1 = [];
    let listaNumeros2 = [];

    let numero = 0;
    let counter = 1;

    while (counter <= 10) {

        numero = window.prompt(`Engresa el numero ${counter}`)

        if (!Number(numero) || numero.length === 0) {
            window.alert(`El numero tiene que ser valido. `);
        } else if (numero < 1 || numero > 500) {
            window.alert(`El numero tiene que ser entre 1 y 500`);

        } else {
            todosNumeros.push(numero)
            if (Number(numero) <= 250) {
                listaNumeros1.push(numero)
            } else {
                listaNumeros2.push(numero)
            }
            counter++
        }
    }
    window.alert(`Todos Los Numeros : "${todosNumeros}"`)
    window.alert(`Numeros Menores o igual a 250 : "${listaNumeros1}"`)
    window.alert(`Numeros Mayores a 250 : "${listaNumeros2}"`)
    counter = 1;
}

processArrays()








