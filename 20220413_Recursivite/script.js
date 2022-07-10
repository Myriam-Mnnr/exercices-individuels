let arrayToTest = [1, 4, 10, 2]

//ETAPE 1 SUM
function sum1(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sum1(arrayToTest))

//ETAPE 2 : RECURSIVITE SUM 
function sum2(array) {
    if (array.length == 0) {
        return 0;
    }
    return array[0] + sum2(array.slice(1))
}

console.log(sum2(arrayToTest))


//ETAPE 3 : FACTORIAL 
function factorial(x) {
    if (x == 1) {
        return 1;
    }
    return x * factorial(x - 1)
}

console.log(factorial(3))
console.log(factorial(6))



//ETAPE 4 FIBONACCI 
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(9)); 

/*
//Version sans recursivite 

function fibonacci(n){
    if(n < 3) {
        return 1;
    }

    let prev = 1;
    let curr = 1;

    for(let i = 2; i < n; i++){
        const next = prev + curr;
        prev = curr; 
        curr = next; 
    }
    return curr; 
}

*/