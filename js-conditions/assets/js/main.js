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
};

function task6(){
    const fiveNum = document.getElementById('fiveNum').valueAsNumber;
    let aNum = parseInt(fiveNum / 10000, 10);
    let bNum = Math.trunc(fiveNum / 1000) % 10;
    let dNum = Math.trunc(fiveNum / 10) % 10;
    let eNum = fiveNum % 10;

    if(isNaN(fiveNum)){
        document.getElementById('funcRez6').innerHTML = '<span style="color:red">Incorrect value</span>';
        return;
    }else if(fiveNum < 10000 || fiveNum > 99999){
        document.getElementById('funcRez6').innerHTML = `<span style="color:red">Це не п'ятизначне число</span>`;
        return;
    };

    if(aNum === eNum && bNum === dNum){
        document.getElementById('funcRez6').innerHTML = '<span style="color:green">Ваше число є паліндромом</span>';
    }else{
        document.getElementById('funcRez6').innerHTML = '<span style="color:purple">Це не паліндром</span>';
    };
};

function task7(){
    const sumProd = document.getElementById('sumProd').valueAsNumber;
    let finishSum;

    if(isNaN(sumProd)){
        document.getElementById('funcRez7').innerHTML = `<span style="color:red">Incorrect value</span>`;
        return;
    }else if(sumProd < 0){
        document.getElementById('funcRez7').innerHTML = `<span style="color:red">Від'ємної суми не може бути</span>`;
        return;
    }

    if(sumProd > 199 && sumProd < 300){
        finishSum = sumProd * 0.97
    }else if(sumProd > 299 && sumProd < 500){
        finishSum = sumProd * 0.95
    }else if(sumProd > 499){
        finishSum = sumProd * 0.93
    }else{
        finishSum = sumProd
    };
    document.getElementById('funcRez7').innerHTML = `<span style="color:orange">Сума до сплати: ${finishSum.toFixed(2)}грн</span>`;
};

function task8(){
    const userNum10pcs = document.getElementById('userNum10pcs').value;
    const parts = userNum10pcs.split(/[\s,]+/).map(Number);
    let positiveNum = 0;
    let negativeNum = 0;
    let zero = 0;
    let evenNum = 0;
    let oddNum = 0;

    if (parts.some(num => isNaN(num))) {
        document.getElementById('funcRez8').innerHTML = `<span style="color:red">Incorrect value: введіть лише числа</span>`;
        return;
    }else if (parts.some(num => !Number.isInteger(num))) {
        document.getElementById('funcRez8').innerHTML = `<span style="color:red">Числа мають бути цілими</span>`;
        return;
    }

    for(let i of parts){
        if(i > 0){
            positiveNum++
        }else if(i < 0){
            negativeNum++
        }else{
            zero++
        }

        (i % 2 === 0) ? evenNum++ : oddNum++;
    }
    document.getElementById('funcRez8').innerHTML = `<span style="color:darkgray">Ви ввели ${positiveNum} додатніх значеннь, ${negativeNum} від'ємних значеннь, ${zero} нулів, ${evenNum} парних значеннь та ${oddNum} непарних значеннь</span>`
};

function task9(){
    const today = new Date();
    let dayOfWeek = today.getDay();
    const weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    let currentDay = weekDays[dayOfWeek];

    // TODO переписати на do while
    while(confirm(`${currentDay}. Хочеш побачити наступний день?`)){
        dayOfWeek = (dayOfWeek + 1) % 7;
        currentDay = weekDays[dayOfWeek];
    }
};

function task10(){
    let min = 0;
    let max = 100;
    let answear = '';
    
    while(true){
        let mid = parseInt((min + max) / 2);
        answear = prompt(`Ваше число > ${mid}, або < ${mid}, або = ${mid}?`);

        if(answear === '<'){
            max = mid - 1;
        }else if(answear === '>'){
            min = mid + 1;
        }else if(answear === '='){
            alert(`Ваше число = ${mid}`);
            return;
        }else if(answear !== '=' && answear !== '<' && answear !== '>'){
            alert(`Ви ввели некорректне значення`);
        }
    }
};

function task11(){
    for(let a = 2; a < 10; a++){
        for(let b = 1; b <= 10; b++){
            document.getElementById('funcRez11').innerHTML += `<div>${a} * ${b} = ${a*b}</div>`
        }
        document.getElementById('funcRez11').innerHTML += `<span>=======</span>`
    }
};

function task12() {
    let userDate = document.getElementById('userDate').value;
    let day = parseInt(userDate.substring(0, 2));
    let month = parseInt(userDate.substring(3, 5));
    let year = parseInt(userDate.substring(6, 10));

    if(day < 1 || day > 31 || month < 1 || month > 12){
        document.getElementById('funcRez12').innerHTML = `<span style="color:red">Такої дати не існує</span>`;
        return;
    }else if(isNaN(day) || isNaN(month) || isNaN(year)){
        document.getElementById('funcRez12').innerHTML = `<span style="color:red">Incorrect value</span>`;
        return;
    }

    let startDate = new Date(year, month - 1, day);
    // Збільшуємо день
    startDate.setDate(startDate.getDate() + 1);
    // Виводимо як дату
    document.getElementById('funcRez12').innerText = `Наступна дата: ${startDate.toLocaleDateString()}`;
};