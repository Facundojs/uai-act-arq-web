/*
* Pregunta 1
* Crear dos variables numéricas
* y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
*/
const n1 = 1;
const n2 = 2;
const respuesta_1 = n1 + n2;

/*
* Pregunta 2
* Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable
*/
const str_1 = "Hola"
const str_2 = "Mundo"

const respuesta_2 = str_1 + str_2;

/*
* Pregunta 3
* Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
* guardando el resultado de la suma en una 3er variable (utilizar length).
*/
const nombre = "Facundo"
const apellido = "Serrano"

const suma_largo = nombre.length + apellido.length

/*
* Pregunta 4
* Crear una variable de tipo string con al menos 10 caracteres
* y convertir todo el texto en mayúscula (utilizar toUpperCase)
*/
const StringLargo = "Hola Mundo desde argentina"
const StringLargoMayusc = StringLargo.toUpperCase()

/*
* Pregunta 5
* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
* caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
const StrLargo = "Holaa Mundo desde argentina"
const primeros5Caracteres =StrLargo.substring(0, 5)

/*
* Pregunta 6
* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
* caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
const Cadena = "1234567890"
const Ultimos3 = Cadena.substring(7)

/*
* Pregunta 7
* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
* Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
const StrLargo7 = "holamundodesdearg"
const StrCapitalized = StrLargo7[0].toUpperCase() + StrLargo7.substring(1).toLocaleLowerCase()
console.log(StrCapitalized);

/*
* Pregunta 8
* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
* Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
const StrLargo8 = "Hola mundo!"
const IndexOfSpace = StrLargo8.indexOf(" ")

/*
* Pregunta 9
* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
* Utilizar los métodos de los ejercicios anteriores para generar un nuevo string 
* que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
const StrLargo9 = "ambas palabras"
let finalStr9 = ""

for(item of StrLargo9.split(" ")){
    finalStr9 += " " + item[0].toUpperCase() + item.substring(1).toLocaleLowerCase() 
}

/*
* Pregunta 10
* Dado el siguiente array: 
* ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
* mostrar por consola los meses 5 y 11 (utilizar console.log)
*/

const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(`Mes 5 = ${Meses[4]} y Mes 11 = ${Meses[10]}`)

/*
* Pregunta 11
* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
*/

console.log(Meses.sort())

/*
* Pregunta 12
* Agregar un elemento al principio y al final del array (utilizar unshift y push)
*/

Meses.push("Mes que no existe al final")
Meses.unshift("Mes que no existe al principio")

/*
* Pregunta 13
* Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

Meses.shift()
Meses.pop()

/*
* Pregunta 14
* Invertir el orden del array (utilizar reverse).
*/
Meses.reverse()


/*
* Pregunta 15
* Unir todos los elementos del array en un único string donde cada mes este separado por un guión
*/

Meses.join('-')

/*
* Pregunta 16
* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre 
*/
const MesesMayoNoviembre = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    .slice(4, 11)

/*
* Pregunta 17
* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random()
* Si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
* Si no un alerta con el mensaje “Lower than 0,5”.
*/

const NumRandom = Math.random()

const msg = NumRandom >= 0.5 ? "Greater or equal than 0,5" : "Lower than 0,5"

console.log(msg);

/*
* Pregunta 18
*/

const Age = Math.random() * 100

let Desc = "" 

if(age < 2) Desc = 'Bebe'
if(age < 12) Desc = 'Niño'
if(age < 19) Desc = 'Adolescente'
if(age < 30) Desc = 'Joven'
if(age < 60) Desc = 'Adulto'
if(age < 75) Desc = 'Adulto mayor'
if(age > 75) Desc = 'Anciano'

console.log(Desc)

/*
* Pregunta 19
* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
* para mostrar una alerta utilizando cada una de las palabras.
*/

const Palabras = ["este","array","tiene","cinco","palabras"]

for(let i = 0; i < Palabras.length; i++) {
    console.log(Palabras[i]);
    console.log("\n");
}


/*
* Pregunta 20
* Al array anterior convertir la primera letra de cada palabra en mayúscula 
* Y mostrar una alerta por cada palabra modificada.
*/
for(let i = 0; i < Palabras.length; i++) {
    console.log(Palabras[i][0].toUpperCase() + Palabras[i].substring(1).toUpperCase());
    console.log("\n");
}

/*
* Pregunta 21
* Crear una variable llamada “sentence” que tenga un string vacío
* Luego al array del punto "A" recorrerlo con un bucle for para ir guardando cada palabra
* dentro de la variable sentence.Al final mostrar una única alerta con la cadena completa.
*/
let sentence = ""

for(let i = 0; i < Palabras.length; i++) {
    sentence += (Palabras[i][0].toUpperCase() + Palabras[i].substring(1).toUpperCase());
    sentence += ""
}

/*
* Pregunta 22
* Crear una array vacío y con un bucle for de 10 repeticiones.
* Llenar el array con el número de la repetición
* Es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
*  desde el número 0 hasta al número 9.
* Mostrar por la consola del navegador el array final (utilizar console.log)
*/

let arr = []

for(let j = 0; j<10; j++){
    arr.push(j)
}

console.log(arr);


/*
* Pregunta 23
* Crear una función suma que reciba dos valores numéricos y retorne el resultado.
* Ejecutar la función y guardar el resultado en una variable,
* mostrando el valor de dicha variable en la consola del navegador.
*/
const FnSuma =(a,b) => a+b
const ResultadoSuma = FnSuma(10,20)
console.log(ResultadoSuma);

/*
* Pregunta 24
* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
* no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y 
* retornar el valor NaN como resultado.
*/

const FnSumaConValidacion =(a,b) => {
    if(Number.isNaN(Number(a)) || Number.isNaN(Number(a))) 
    {
        console.log("Uno de los numeros es invalidos");
        return NaN
    } 
    return a+b
}

/*
* Pregunta 25
* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
*/

const ValidateInteger = (n) => !Number.isNaN(parseInt(n))

/*
* Pregunta 26
* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
* En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

/*
* Pregunta 27
*/