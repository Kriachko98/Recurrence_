// Minimum
const car = {
    Producer: `Volkswagen`,
    Model: `Polo`,
    Year: 2011,
    "Average speed km/h": 80,
    "Fuel tank capacity": 45,
    "Average fuel consumption l/100km": 6,
    Owners: 1,
    showInfo: function (){
        let rez = `<ul>`;
        for(let key in this){
            if(typeof(this[key]) !== `function`){
                rez += `<li><b>${key}:</b> ${this[key]}</li>`
            };
        };
        rez += `</ul>`;
        return document.getElementById(`car_info`).innerHTML = `${rez}`;
    },
    calcTimeFuelForDistance: function(distance){
        const neededHours = distance / this[`Average speed km/h`];
        const neededFuel = distance / 100 * this[`Average fuel consumption l/100km`];
        const rest = Math.floor(neededHours / 4);
        let finalHours = neededHours + rest;
        
        return {
            timeForDistance: finalHours.toFixed(2),
            fuelForDistance: neededFuel.toFixed(2),
        }
    }
};

car["Owner`s name"] = `Jonh`;
car.showInfo();
console.log(`${Object.hasOwn(car, "Owner`s name")}`);

function calcDistanceValues(){
    const distance = document.getElementById(`distance`).valueAsNumber;
    const result = car.calcTimeFuelForDistance(distance);

    return document.getElementById(`calcForDistance`).innerHTML = `Для подолання вашої дистанції вам знадобиться ${result.timeForDistance} годин і ${result.fuelForDistance} літрів палива`;
}

// Normal
function msToTime(value){
    const date = new Date(value);
    const hours = String(date.getHours()).padStart(2, `0`);
    const minutes = String(date.getMinutes()).padStart(2, `0`);
    const seconds = String(date.getSeconds()).padStart(2, `0`);
    return `${hours}:${minutes}:${seconds}`;
}

const fullTime = new Date();
const changeTime = {
    hours: fullTime.getHours(),
    minutes: fullTime.getMinutes(),
    seconds: fullTime.getSeconds(),
    showTime: () => document.getElementById(`timeRez`).innerHTML = `Зараз на годиннику ${changeTime.hours}:${changeTime.minutes}:${changeTime.seconds}`,
    addSec(){
        const sec = document.getElementById(`addSec`).valueAsNumber;
        const newSecTime = fullTime.getTime() + sec * 1000;
        const finalTime = msToTime(newSecTime)
        document.getElementById(`secRez`).innerHTML = `З додаванням ваших секунд на годиннику ${finalTime}`;
    },
    addMin(){
        const min = document.getElementById(`addMin`).valueAsNumber;
        const newSecTime = fullTime.getTime() + min * 60000;
        const finalTime = msToTime(newSecTime)
        document.getElementById(`minRez`).innerHTML = `З додаванням ваших мінут на годиннику ${finalTime}`;
    },
    addHrs(){
        const hrs = document.getElementById(`addHrs`).valueAsNumber;
        const newSecTime = fullTime.getTime() + hrs * 60000 * 60;
        const finalTime = msToTime(newSecTime)
        document.getElementById(`hrsRez`).innerHTML = `З додаванням ваших годин на годиннику ${finalTime}`;
    }
}

console.log(fullTime);
console.log(changeTime);
changeTime.showTime();

// Maximum
// const fracA = document.getElementById(`fracA`).valueAsNumber;
// const fracB = document.getElementById(`fracB`).valueAsNumber;
// const fracC = document.getElementById(`fracC`).valueAsNumber;
// const fracD = document.getElementById(`fracD`).valueAsNumber;
function workWithFractions(){
    const fractions = {
        a: document.getElementById(`fracA`).valueAsNumber,
        b: document.getElementById(`fracB`).valueAsNumber,
        c: document.getElementById(`fracC`).valueAsNumber,
        d: document.getElementById(`fracD`).valueAsNumber,
        addFractions: function(){
            let rez = ``;
            let comDem = 0;
            let bigDem = Math.max(this.b, this.d);

            if(this.b === this.d){
                rez = this.a + this.c + `/` + this.b;
            }else{
                for(let i = bigDem; ; i++){
                    if(i % this.b === 0 && i % this.d === 0){
                        comDem = i;
                        break; 
                    }
                }
                rez = (comDem / this.b * this.a) + (comDem / this.d * this.c) + `/` + comDem;
            };

            document.getElementById(`addRez`).innerHTML = `Результат додавання дробів: ${rez}`;
        },
        subtractionFractions: function (){
            let rez = ``;
            let comDem = 0;
            let bigDem = Math.max(this.b, this.d);

            if(this.b === this.d){
                rez = this.a - this.c + `/` + this.b;
            }else{
                for(let i = bigDem; ; i++){
                    if(i % this.b === 0 && i % this.d === 0){
                        comDem = i;
                        break; 
                    }
                }
                rez = (comDem / this.b * this.a) - (comDem / this.d * this.c) + `/` + comDem;
            };

            document.getElementById(`subRez`).innerHTML = `Результат віднімання дробів: ${rez}`;
        },
        multiplicationFractions: function (){
            let rez = (this.a * this.c) + `/` + (this.b * this.d);
            document.getElementById(`mulRez`).innerHTML = `Результат множення дробів: ${rez}`;
        },
        devisionFractions: function (){
            let rez = (this.a * this.d) + `/` + (this.b * this.c);
            document.getElementById(`devRez`).innerHTML = `Результат ділення дробів: ${rez}`;
        }
    };
    fractions.addFractions();
    fractions.subtractionFractions();
    fractions.multiplicationFractions();
    fractions.devisionFractions();
}