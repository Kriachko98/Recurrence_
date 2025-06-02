'use strict';

function task1(){
    const userName = prompt('Enter your name');
    alert(`Your name is ${userName}`);
};

function task2(){
    const yearBirth = parseInt(prompt('Enter your year of birth'));
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearBirth;
    alert(`You are ${age}y.o.`)
};

function task3(){
    const lengthSquareSide = parseFloat(prompt('Enter length of one side of square'));
    const squarePerimeter = lengthSquareSide * 4;
    alert(`Perimeter of your square is ${squarePerimeter}`);
};

function task4(){
    const radius = parseFloat(prompt('Введіть радіус кола'));
    const circleSquare = Math.PI * radius * radius;
    alert(`Площа щкружності дорівнює ${circleSquare}`);
};

function task5(){
    const distanceBetweenCities = parseInt(prompt('Яка дистанція між двома містами в кілометрах?'));
    const tripTime = parseFloat(prompt('За скільки годин ви хочете доїхати?'));
    const neededSpeed = distanceBetweenCities / tripTime;
    alert(`Вам треба їхати зі швидкістю ${neededSpeed}км/г щоб дістатися іншого міста вчасно`);
};

function task6(){
    const dollarEuroCoefficient = 0.85;
    const dollar = parseFloat(prompt('Введіть суму у долларах'));
    const euroFromDollar = dollar * dollarEuroCoefficient;
    alert(`Це буде ${euroFromDollar}евро`);
};