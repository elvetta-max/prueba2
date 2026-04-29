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

calcularNotas()



/****
 * Ejercicio 2
Declara una función que acepte un nombre como parámetro 
y devuelva el número de palabras que tiene el nombre.
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
 */

function cuentaPalabras(nombre) {
    let counter = nombre.trim().split(" ").length
    return `La frase "${nombre}" tiene ${counter} palabras`
}

console.log(cuentaPalabras("Antonio Alberto Jesús"))


/***
 * Ejercicio 3:
Diseña un algoritmo que cuente las veces que 
aparece una determinada letra en una frase.
 */
//Deseño en la carpeta assets/

function cuentaLetrasEnFrase(frase, letra) {

    let counter = 0
    if (frase.trim().length <= 0 || letra.trim().length <= 0) {
        return `Ingrese frase o letra valida`
    } else {

     counter = frase.toLowerCase().split("").filter((l => l === letra.toLowerCase())).length
     return `La letra "${letra}" se repite en la frase "${frase}" ${counter} veces`
    }
}

console.log(cuentaLetrasEnFrase("I like pizza", "z"))