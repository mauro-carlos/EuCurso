/*
let num1=9.49;
let num2=Math.floor(num1);
console.log(`Arredondado para baixo ${num2}`);
let num3=Math.ceil(num1);
console.log(`Arredondado para cima ${num3}`);
let num4=Math.round(num1);
// maior ou igual que 0.5 arredonda para cima  
console.log(`Arredondado dependendo do valor ${num4}`);
*/

//array
//           0 1 2 3 4
let numeros=[1,5,7,8,9];

//            0      1       2     
let nome=["joana","vera","sandra"];
console.log(nome[0]);
console.log(numeros[3]);
//mostra o valor

console.log(nome.length);
//mostra o tamanho 
nome.push("Ana");
//adiconado um valor no array
console.log(nome);
//mostra o array com o valor adicionado
console.log(nome.length);
//mostra o array com a quantidade 
nome.pop();
//tag para excluir o ultimo valor do array
console.log(nome);

nome.unshift("clara");
nome.unshift("pedro");
//adiciona no inicio do array
console.log(nome);
console.log(nome.slice(0,3));
//separa os dois primeiros valores

//delete nome[1];
//deleta o valor dentro do array -porem deixa o espaço em branco


