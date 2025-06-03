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
    const pcsFiles = parseInt(flashCapacity * 1000 / 820);
    alert(`На вашу флешку вміститься ${pcsFiles} файлів об'ємом 820Мб`);
};