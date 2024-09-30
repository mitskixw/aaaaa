 // alert('Emanuelli Emidio Almeida e Gabielle Gaby')
// function soma(num1, num2) {
//     return num1 + num2;
// }
// soma(2, 3);
// console.log(soma(2, 3));
// function areaQuadrado(lado) {
//     return lado ** 2
// }
// console.log(areaQuadrado(6));

// let areaTriangulo = function (base, altura) {
//     return (base * altura) / 2;
// }
// console.log(areaTriangulo(6, 7))

// let num1 = parseInt(prompt('numero'));
// let num2 = parseInt(prompt('numero'));
// let num3 = parseInt(prompt('numero'));

// function media(x, y, z) {

//     return (x + y + z) / 3
// }

// document.write(media(num1, num2, num3));

let estados = ['Parana', 'Mato Grosso', 'Para', 'Santa Cantarina', 'Rio de Janeiro', 'Bahia', 'Sao Paulo', 'Mato Grosso do Sul', 'Distrito Federal', 'Goias', 'Alagoas', 'Ceara',  'Acre', 'Maranhao', 'Pernambuco', 'Piaui', 'Paraiba', 'Rio Grande do Norte', 'Sergipe', 'Acre', 'Amapa', 'Amazonas', 'Rondonia', 'Roraima', 'Tocantins', 'Espiito Santos', 'Minas Gerais'];
let i = 0;
while(i <estados.length){
    console.log(i);
    console.log(estados[i]);
i = i+1;
}
let idade = parseInt(prompt('qual a sua idade'));
if(idade>17){
console.log('já pode dirigir')

}
else{
    console.log('ilegal dirigir');
}
for(let i=0, i< estados.length, i++){
    console.log(estados[i])


}