/**Vídeo 5 - Aprenda sobre os Operadores Matemáticos em Javascript
 * Curso de Javascript Moderno - Aula 04 */


// OPERADORES: + - * / % ++ -- += -=

"use strict"
const FUNCAO = require('./separador.js');


// let num1, num2 = 10;
// undefined   10

let num1 = 15, num2 = 10;
// 15   10

console.log(num1+"  "+num2);

FUNCAO.separador();
// ----------------------------------------------------

let num3, num4, num5;
num3 = num4 = num5 = 33;

console.log(num1+"\n"+num2+"\n"+num3);

funcao_separador.separador();
// ----------------------------------------------------

var res = num1 + num2;
console.log("res = "+res);

console.log(" (num1 + num3) * 2 = "+(num1 + num3)*2);
console.log(" (num1 + num3 * 2) = "+(num1 + num3*2) );

funcao_separador.separador();
// ----------------------------------------------------

res = num1 / num2;
console.log(" num1 / num2 = "+res);

res = num1 % num2;
console.log(" num1 % num2 = "+res);

funcao_separador.separador();
// ----------------------------------------------------

console.log("num1 = "+num1);

// Operador de Incremento: Adiciona 1 ao valor da variável
num1++; // num1 = num1 + 1
console.log("num1++;\nnum1 = "+num1);

num1--;  // num1 = num1 - 1
num1--;
console.log("\nnum1--;\nnum1--;\nnum1 = "+num1);

console.log("\nnum2 = "+num2);
num2 += 5;  // num2 = num2 + 5
console.log("num2 += 5;\nnum2 = "+num2);

num2 *= 2;  // num2 = num2 * 2
console.log("\nnum2 *= 2;\nnum2 = "+num2);

num2 /= 2;  // num2 = num2 / 2
console.log("\nnum2 /= 2;\nnum2 = "+num2);