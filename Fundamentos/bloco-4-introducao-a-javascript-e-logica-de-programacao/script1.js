// // Variaveis

//      //VarExercicio1-2-3//
// let a = 50;
// let b = 25;
// let c = 75;

//      //VarExercicio4//
// const d = -45;

//      //VarExercicio5//
// let ang1 = 28;
// let ang2 = 59;
// let ang3 =  93;
//     //VarExercicio6//

// const chessPiece= 'Torre'

//     //VarExercicio7//

// let nota = 91;

//     //VarExercicio8-9//

// const na = 15;
// const nb = 64;
// const nc = 90;

// let isEven = false;
// let isOdd = false;

//     //VarExercicio10//

// const valorDeProducao = 10;
// const valorDeVenda = 30;

//     //VarExercicio11//

// // //let ir= salario ;
// // // let inss= ;
// // let salarioBruto= 2000;
// // // let salarioLiquido= ;

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//             //Exercicio parte 1//

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

//             //Exercicio parte 2//

// if(a > b){
//     console.log(a)
// }

//             //Exercicio parte 3//

// if(a > b > c){
//     console.log(c)
// }

//             //Exercicio parte 4//

// if(d < 0){
//     console.log('Negative')
// }
// else if(d > 0){
//     console.log('Positive')
// }
// else{
//     console.log('Zero')
// }

//             //Exercicio 5//

// if(ang1 + ang2 + ang3 == 180){
//     console.log('True')
// }else if(ang1 + ang2 + ang3 !== 180){
//     console.log('False')
// }else{(ang1, ang2, ang3 > 180 || ang1 + ang2 + ang3 > 180)
// console.log('ERRO!Deu Ruim!CORRE!')}

//             //Exercicio 6//

// switch(chessPiece){      
//     case 'Rei':
//         console.log('Rei - Se move uma casa em qualquer direção')
//         break;
//     case 'Rainha':
//         console.log('Rainha - Se move quantas casas quiser em qulquer direção')
//         break;
//     case 'Torre':
//         console.log('Torre - Se move quantas casas quiser na vertical ou na horizontal')
//         break;
//     case 'Bispo':
//         console.log('Bispo - Se move quantas casas quiser na diagonal')
//         break;
//     case 'Cavalo':
//         console.log('Cavalo - Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal')
//         break;
//     case 'Peão':
//         console.log('Peão - Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas')
//         break;
//     default:
//         console.log('Erro! Peça invalida')
//         break;
// };

//             //Exercicio 7//

// if(nota < 0 || nota > 100){
//     console.log('ERRO')
// }else if(nota >= 90){
//     console.log('Parabens! Você tirou A')
// }else if(nota >= 80){   
//     console.log('Parabens! Você tirou B')
// }else if(nota >= 70){
//     console.log('Você tirou C!')
// }else if(nota >= 60){
//     console.log('Você tirou D')
// }else if(nota >= 50){
//     console.log('Você Tirou E de ESTUDE MAIS!')
// }else{
//     console.log('Você tirou um F de... deixa pra lá...')
// }

//             //Exercicio 8//
     
// if((na % 2 === 0|| nb % 2 === 0 || nc % 2 === 0)){
//     isEven = true;
// } console.log(isEven)

//             //Exercicio 9//

// if((na % 2 !== 0 || nb % 2 !== 0 || nc % 2 !== 0)){
//     isOdd = true;
// } console.log(isOdd)

//             //Exercicio 10//

// if(valorDeProducao >= 0 && valorDeVenda >= 0){
//     const valorTotalDeProdudcao = valorDeProducao * 1.2;
//     const lucroTotal = (valorDeVenda - valorTotalDeProdudcao)*1000;
//     console.log(lucroTotal)
// }else{
//     console.log('ERRO! Valores não podem ser negativos')
// }

//             //Exercicio 11//
// let inss;
// let ir;
// let salarioBruto = 2000;

//             //INSS//

// if(salarioBruto <= 1556.94){
//      inss = salarioBruto * 0.08;
// }else if(salarioBruto >= 1556.95 || salarioBruto <= 2594.92){
//      inss = salarioBruto * 0.09;
// }else if(salarioBruto >= 2594.93 || salarioBruto <= 5189.82){
//      inss = salarioBruto * 0.11;
// }else{
//       inss = 570.88;
// }
// const salarioBase = salarioBruto - inss

//     //Imposto de renda//

// if(salarioBase < 1903.98){
//     ir = 0;
// }else if(salarioBase > 1903.99 || salarioBase < 2826.65){
//     ir = (salarioBase * 0.075) - 142.8 ;
// }else if(salarioBase > 28626.66 || salarioBase < 3751.05){
//     ir = (salarioBase * 0,15) - 354.80 ;
// }else if(salarioBase > 3751.06 || salarioBase < 4664.68){
//     ir = (salarioBase * 0.225) - 636.13 ;
// }else{
//     ir = (salarioBase * 0.275)-869.36;
// }

// console.log('Salario: '+ (salarioBase - ir))

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){
    console.log(name)
}