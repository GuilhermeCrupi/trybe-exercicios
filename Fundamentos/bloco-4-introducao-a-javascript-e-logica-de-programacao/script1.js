// Variaveis

let a = 50;
let b = 25;
let c = 75;
const d = -45;
let ang1 = 28;
let ang2 = 59;
let ang3 =  93;

//Exercicio parte 1//

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Exercicio parte 2//

if(a > b){
    console.log(a)
}

//Exercicio parte 3//

if(a > b > c){
    console.log(c)
}

//Exercicio parte 4//

if(d < 0){
    console.log('Negative')
}
else if(d > 0){
    console.log('Positive')
}
else{
    console.log('Zero')
}

//Exercicio 5//

if(ang1 + ang2 + ang3 == 180){
    console.log('True')
}else if(ang1 + ang2 + ang3 !== 180){
    console.log('False')
}else{(ang1, ang2, ang3 > 180 || ang1 + ang2 + ang3 > 180)
console.log('ERRO!Deu Ruim!CORRE')}
