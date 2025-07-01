// Task 2
function argPcs(){
    return arguments.length;
};

function param(){
    const parameters = document.getElementById(`argPcs`).value;
    const parts = parameters.split(/[\s,]+/);
    const answear= argPcs(...parts);
    document.getElementById(`paramRez`).innerHTML = `Кількість введених вами аргументів буде: ${answear}`;
}

// Task 3
function compare(a, b){
    if(a < b){
        return `-1 (перше число менше, ніж друге)`
    }else if(a > b){
        return `1 (перше число більше, ніж друге)`
    }else{
        return `0 (числа рівні)`
    }
};

function compAnswear(){
    const numA = document.getElementById(`numA`).valueAsNumber;
    const numB = document.getElementById(`numB`).valueAsNumber;

    if(isNaN(numA) || isNaN(numB)){
        document.getElementById(`finalRez`).innerHTML = `<span style="color:red">Incorrect value</span>`;
        return
    }

    const rezComp = compare(numA, numB);
    document.getElementById(`finalRez`).innerHTML = `відповідь: ${rezComp}`;
};

// Task 4
function getFactorial(n){
    if(n < 0) return `Факторіал від'ємних чисел не обчислюється`;

    let fact = 1;
    for(let i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;
};
function factorial(){
    const numFact = document.getElementById(`numFact`).valueAsNumber;
    const factRez = getFactorial(numFact);
    document.getElementById(`factRez`).innerHTML = `Факторіал вашого числа буде: ${factRez}`;
};

// Task 5
const unitNumbers = (a, b, c) => String(a) + b + c;

function wholeNum(){
    const numberA = document.getElementById(`numberA`).valueAsNumber;
    const numberB = document.getElementById(`numberB`).valueAsNumber;
    const numberC = document.getElementById(`numberC`).valueAsNumber;

    if(numberA < 1 || numberA > 9 || numberB < 0 || numberB > 9 || numberC < 0 || numberC > 9){
        document.getElementById(`wholeNumRez`).innerHTML = `<span style=color:red>У кожному полі має бути одна цифра від 0 до 9 окрім першого поля. В першому полі введіть цифру від 1 до 9</span>`;
        return;
    }else if(isNaN(numberA) || isNaN(numberB) || isNaN(numberC)){
        document.getElementById(`wholeNumRez`).innerHTML = `<span style=color:red>Incorrect value</span>`;
        return;
    }

    document.getElementById(`wholeNumRez`).innerHTML = `Об'єднавши ваші цифри виходить: ${unitNumbers(numberA, numberB, numberC)}`;
}