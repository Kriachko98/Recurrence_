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
};

// Task 6
const getSquare = (a, b = a) => a * b;
function squareRez(){
    const width = document.getElementById(`width`).valueAsNumber;
    let height = document.getElementById(`height`).valueAsNumber;

    if(isNaN(width)){
        document.getElementById(`squareRez`).innerHTML = `<span style=color:red>Incorrect value. Enter first value</span>`;
        return;
    }else if(isNaN(height)){
        height = undefined;
    }

    document.getElementById(`squareRez`).innerHTML = `Площа вашого прямокутника: ${getSquare(width, height)}`;
};

// Task 7
function isPerfectNum(a){
    let rez = 0;
    for(let i = 1; i < a; i++){
        if(a % i === 0){
            rez += i;
        };
    };
    if(rez === a && a !== 0){
        return `Число досконале`;
    }else{
        return `Число не досконале`;
    };
};
function perfectNumRez(){
    const userNumPerfect = document.getElementById(`perfectNum`).valueAsNumber;

    if(isNaN(userNumPerfect)){
        return document.getElementById(`perfectRez`).innerHTML = `<span style=color:red>Incorrect value</span>`;
    }else if(userNumPerfect < 0){
        return document.getElementById(`perfectRez`).innerHTML = `<span style=color:red>Число не може бути від'ємним</span>`;
    };

    document.getElementById(`perfectRez`).innerHTML = `${isPerfectNum(userNumPerfect)}`;
};

// Task 8
function perfectNumInScale(c, d){
    let allNums = ``;
    for(let a = c; a <= d; a++){
        let rez = 0;
        for(let i = 1; i < a; i++){
            if(a % i === 0){
                rez += i;
            };
        };
        if(rez === a && a !== 0){
            allNums += String(a) + ` `
        }
    };
    return allNums;
};
function allPerfectNum(){
    const scaleStart = document.getElementById(`scaleStart`).valueAsNumber;
    const scaleFinish = document.getElementById(`scaleFinish`).valueAsNumber;
    const scaleRez = perfectNumInScale(scaleStart, scaleFinish);

    if(isNaN(scaleStart) || isNaN(scaleFinish)){
        document.getElementById(`scaleRez`).innerHTML = `<span style=color:red>Incorrect value</span>`;
        return;
    };

    if(scaleRez === ``){
        document.getElementById(`scaleRez`).innerHTML = `З вашого діапазону немає досконалих чисел`;
        return;
    };

    document.getElementById(`scaleRez`).innerHTML = `З вашого діапазону досконалими числами є: ${scaleRez}`;
};