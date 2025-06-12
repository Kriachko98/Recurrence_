function task1(){
    const userAge = document.getElementById('userAge').valueAsNumber;

    if(userAge >= 0 && userAge <= 11){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви дитина</span>'
    }else if(userAge > 11 && userAge <= 17){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви підліток</span>'
    }else if(userAge > 17 && userAge <=59){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви дорослий</span>'
    }else if(userAge > 59 && userAge <= 100){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви пенсіонер</span>'
    }else if(userAge > 100 && userAge <= 125){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви продали душу дияволу?</span>'
    }else if(userAge > 125){
        document.getElementById('funcRez').innerHTML = '<span style="color:blue">Стільки не живуть</span>'
    }else{
        document.getElementById('funcRez').innerHTML = '<span style="color:red">Incorrect value</span>'
    }
};

function task2(){
    const num = document.getElementById('number').valueAsNumber;

    switch (num){
        case 0:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ ")"</span>'
            break;
        case 1:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "!"</span>'
            break;
        case 2:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "@"</span>'
            break;
        case 3:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "#"</span>'
            break;
        case 4:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "$"</span>'
            break;
        case 5:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "%"</span>'
            break;
        case 6:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "^"</span>'
            break;
        case 7:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "&"</span>'
            break;
        case 8:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "*"</span>'
            break;
        case 9:
            document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "("</span>'
            break;
        default:
            document.getElementById('funcRez2').innerHTML = '<span style="color:red">Incorrect value</span>'
    }
}

function task3(){
    const num1 = document.getElementById('num1').valueAsNumber;
    const num2 = document.getElementById('num2').valueAsNumber;

    let from = Math.min(num1, num2);
    let to = Math.max(num1, num2);
    let sum = 0;

    if(num1 === num2){
        document.getElementById('funcRez3').innerHTML = '<span style="color:red">Numbers must be different</span>'
        return;
    }else if(isNaN(num1) || isNaN(num2)){
        document.getElementById('funcRez3').innerHTML = '<span style="color:red">Incorrect value</span>'
    };

    for(i=from;i<=to;i++){
        sum += i;
    };

    document.getElementById('funcRez3').innerHTML = `<span style="color:green">Сума діапазону ваших чисел дорівнює ${sum}</span>`;
}

function task4(){
    const oneNum = Math.abs(document.getElementById('oneNum').valueAsNumber);
    const secNum = Math.abs(document.getElementById('secNum').valueAsNumber);
    const min = oneNum < secNum ? oneNum : secNum;
    let devRez = 1;

    if(isNaN(oneNum) || isNaN(secNum)){
        document.getElementById('funcRez4').innerHTML = `<span style="color:red">Incorrect value</span>`;
        return;
    }else if(oneNum === 0 && secNum === 0){
        document.getElementById('funcRez4').innerHTML = `<span style="color:red">Ділити на 0 не можна</span>`;
        return;
    }else if(!Number.isInteger(oneNum) || !Number.isInteger(secNum)){
        document.getElementById('funcRez4').innerHTML = `<span style="color:red">Числа мають бути цілими</span>`;
        return;
    };

    for(let dev = 1; dev <= min; dev++){
        if(oneNum % dev === 0 && secNum % dev === 0){
            devRez = dev;
        };
    };
    document.getElementById('funcRez4').innerHTML = `<span style="color:orange">Найбільший спільний дільник: ${devRez}</span>`;
};

function task5(){
    const numForDev = document.getElementById('numForDev').valueAsNumber;
    let i = numForDev;
    let devisors = '';

    if(isNaN(numForDev)){
        document.getElementById('funcRez5').innerHTML = `<span style="color:red">Incorrect value</span>`;
        return;
    }else if(!Number.isInteger(numForDev)){
        document.getElementById('funcRez5').innerHTML = `<span style="color:red">Число має бути цілим</span>`;
        return;
    }else if(numForDev === 0){
        document.getElementById('funcRez5').innerHTML = `<span style="color:red">Не можна вказувати 0</span>`;
        return;
    }

    for(; i > 0; i--){
        if(numForDev % i == 0){
            devisors += i + '; '
        };
    }
    document.getElementById('funcRez5').innerHTML = `<span style="color:brown">Дільниками вашого числа є ${devisors}</span>`;
}