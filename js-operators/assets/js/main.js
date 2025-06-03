function task1 (){
    const a = 0.1;
    const b = 0.2;
    alert((a + b).toFixed(1));
};

function task2 (){
    const a = '1';
    const b = 2;
    alert(Number(a) + b);
};

function task3 (){
    const flashCapacity = parseFloat(prompt(`Введіть об'єм пам'яті вашої флешки в Гб`));
    const pcsFiles = parseInt(flashCapacity * 1024 / 820);
    alert(`На вашу флешку вміститься ${pcsFiles} файлів об'ємом 820Мб`);
};

function task4 (){
    const money = parseFloat(prompt('Введіть кількість грошей в вашому гаманці'));
    const chocolatePrice = parseFloat(prompt('Введіть ціну однієї шоколадки'));
    const qntChocolate = Math.trunc(money / chocolatePrice);
    const change = money - qntChocolate * chocolatePrice;
    alert(`Ви зможете купити ${qntChocolate} шоколадок і у вас залишеться ${change} грошей`);
};

function task5 (){
    const anyNum = parseInt(prompt('Введіть будь-яке тризначне число'));
    const lustNum = (anyNum % 10).toFixed(0);
    const midNum = Math.trunc(anyNum / 10) % 10;
    const firstNum = Math.trunc(anyNum / 100);
    const turnedNum = lustNum + midNum + firstNum;
    alert(`Перевернуте число буде ${turnedNum}`);
}

function task6 (){
    const startMoney = parseFloat(prompt(`Введіть суму вкладу, яку ви хочете покласти в банк на 2 місяці, з процентною ставкою депозиту 5% річних`));
    const benefit = (startMoney * 0.05 / 12 * 2).toFixed(2);
    alert(`Через два місяці вам нарахують ${benefit}грн відсотків`);
}