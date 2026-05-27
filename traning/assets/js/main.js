const cars = [
    {
        id: 645521,
        img: 'assets/img/2015-bmw-435i-xDrive-coupe.jpg',
        brand: 'BMW',
        model: '435i xDrive',
        color: 'blue',
        year: 2015,
        power: 306,
        isNew: false,
        fuel: 'diesel',
        price: 958000
    },
    {
        id: 940833,
        img: 'assets/img/2024-bmw-x5-m60i-134-6602d491051b2.jpg',
        brand: 'BMW',
        model: 'X5 M60i',
        color: 'black',
        year: 2024,
        power: 523,
        isNew: true,
        fuel: 'electrical',
        price: 4500000
    },
    {
        id: 957789,
        img: 'assets/img/Used-2020-BMW-3-Series-M340i-1647879445.jpg',
        brand: 'BMW',
        model: 'X3 M340i',
        color: 'blue',
        year: 2020,
        power: 382,
        isNew: false,
        fuel: 'petrol',
        price: 1700000
    },
    {
        id: 635978,
        img: 'assets/img/ford-kuga-2025.jpg',
        brand: 'Ford',
        model: 'Kuga',
        color: 'green',
        year: 2025,
        power: 180,
        isNew: true,
        fuel: 'petrol',
        price: 1650000
    },
    {
        id: 113891,
        img: 'assets/img/ford-mustang-2015.jpg',
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        year: 2015,
        power: 314,
        isNew: false,
        fuel: 'disel',
        price: 728000
    },
    {
        id: 894781,
        img: 'assets/img/ford-fiesta-2019.jpg',
        brand: 'Ford',
        model: 'Fiesta',
        color: 'blue',
        year: 2019,
        power: 85,
        isNew: false,
        fuel: 'petrol',
        price: 550000
    },
    {
        id: 525463,
        img: 'assets/img/2016-volkswagen-jetta_5170.jpg',
        brand: 'Volkswagen',
        model: 'Jetta',
        color: 'white',
        year: 2016,
        power: 150,
        isNew: false,
        fuel: 'diesel',
        price: 850000
    },
    {
        id: 654796,
        img: 'assets/img/2026_volkswagen_tiguan_4dr-suv_se_fq_oem_1_1600.jpg',
        brand: 'Volkswagen',
        model: 'Tiguan',
        color: 'silver',
        year: 2026,
        power: 268,
        isNew: true,
        fuel: 'diesel',
        price: 2550000
    },
    {
        id: 458823,
        img: 'assets/img/volkswagen-polo-2025.jpg',
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'white',
        year: 2025,
        power: 84,
        isNew: true,
        fuel: 'petrol',
        price: 980000
    },
    {
        id: 623998,
        img: 'assets/img/skoda-kylaq-2026.jpg',
        brand: 'Skoda',
        model: 'Kylaq',
        color: 'red',
        year: 2026,
        power: 116,
        isNew: true,
        fuel: 'petrol',
        price: 1400000
    },
    {
        id: 936821,
        img: 'assets/img/skoda-kodiaq-2024.jpg',
        brand: 'Skoda',
        model: 'Kodiaq',
        color: 'silver',
        year: 2024,
        power: 204,
        isNew: true,
        fuel: 'petrol',
        price: 2800000
    },
    {
        id: 653697,
        img: 'assets/img/skoda-fabia-2025.jpg',
        brand: 'Skoda',
        model: 'Fabia',
        color: 'red',
        year: 2025,
        power: 95,
        isNew: true,
        fuel: 'petrol',
        price: 1150000
    },
    {
        id: 659863,
        img: 'assets/img/2019-nissan-leaf.jpg',
        brand: 'Nissan',
        model: 'Leaf',
        color: 'silver',
        year: 2019,
        power: 150,
        isNew: false,
        fuel: 'electrical',
        price: 525000
    },
    {
        id: 552369,
        img: 'assets/img/nissan-ariya-2024.jpg',
        brand: 'Nissan',
        model: 'Ariya',
        color: 'green',
        year: 2024,
        power: 214,
        isNew: true,
        fuel: 'electrical',
        price: 1650000
    },
    {
        id: 827863,
        img: 'assets/img/nissan-x-trail-2025.jpg',
        brand: 'Nissan',
        model: 'X-Trail',
        color: 'black',
        year: 2025,
        power: 181,
        isNew: true,
        fuel: 'petrol',
        price: 1840000
    },
    {
        id: 659124,
        img: 'assets/img/2024-mercedes-benz-gle450-exterior-109-677eca533ec1f.jpg',
        brand: 'Mercedes',
        model: 'Gle 450',
        color: 'black',
        year: 2024,
        power: 375,
        isNew: true,
        fuel: 'diesel',
        price: 4500000
    }
];

const container = document.getElementById('container');

cars.forEach(function (el){
    const card = document.createElement('div');
    card.setAttribute('class', 'card-wrap');
    card.innerHTML=`
        <div class="img-wrap"><img src="${el.img}" alt="${el.brand}"></div>
        <h2 class="car-title">${el.brand} ${el.model}</h2>
        <div class="info">Рік випуску: ${el.year}</div>
        <div class="info">Потужність двигуна: ${el.power} л.с</div>
        <div class="info">Тип палива: ${el.fuel ? "Нова" : "Вживана"}</div>
        <div class="info">Ціна: ${el.price.toLocaleString('uk-UA')} грн</div>
    `
    container.append(card);
})