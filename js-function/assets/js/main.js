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
