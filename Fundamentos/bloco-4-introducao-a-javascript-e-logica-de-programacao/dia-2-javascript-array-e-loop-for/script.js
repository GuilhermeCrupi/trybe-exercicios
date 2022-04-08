    //Exercicio1//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index=0; index < numbers.length; index++){
    console.log(numbers[index])
}

    //Exercicio2//

let result = 0;

for(index = 0; index < numbers.length; index++){
    result += numbers[index]
} console.log(result);

    //Exercicio3//

let sum = 0;

for(index = 0; index < numbers.length; index+= 1){
    sum += numbers[index]
} console.log(result/numbers.length);