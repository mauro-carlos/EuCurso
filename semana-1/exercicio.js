//exercicio
/*
*crie um arquivo de javascript.
*crie var ou let as suas informações

*NOME
*IDADE
*CIDADE
*ALTURA
*PESO
*IMC =PESO/(ALTURA*ALTURA);
*

Ola eu me chamo NOME. 
NOME tem IDADE anos.
NOME mora em CIDADE.
O peso de NOME  é PESO.
A altura de NOME é ALTURA.
O imc de NOME é IMC.

*/


let nome = "Mauro Carlos";
let idade = 55;
const cidade = "Cuiaba - MT"
let altura = 1.70;
let peso = 80;
//let imc = peso/(altura ** 2);
imc = 23;
console.log("");
console.log(`Ola me chamo ${nome}`);
console.log(`${nome} tem ${idade} anos`);
console.log(`O peso de ${nome} é ${peso}`);
console.log(`A altura de ${nome} é ${altura}.`)
console.log(`O imc de NOME é ${imc}.`)

if (imc < 18.5){
    console.log("Abaixo do 'peso' ");
}else if (imc > 18.6 && imc < 24.9) {
    console.log("'Peso ideal ' Parabéns");
}else if (imc > 25 && imc < 29.9) {
    console.log(" 'Levemente Acima' do Peso");
}else if (imc > 30 && imc < 34.9) {
    console.log(" 'Obesidade Grau 1' ")
}else if (imc > 35 && imc < 39.9) {
    console.log(" 'Obesidade Grau II'(severa)");
}else {
    console.log(" 'Obsidade Grau III (mórbida) ");
}



