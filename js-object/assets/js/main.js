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