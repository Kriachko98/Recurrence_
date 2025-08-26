// Task 1
const playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

const root = document.createElement('div');
root.id = 'root';
document.body.append(root);

const ol = document.createElement('ol');
const liMaster = document.createElement('li');
liMaster.classList = 'song lowercase';
root.append(ol);

playList.forEach((elem) => {
    const li = liMaster.cloneNode();
    li.innerText = `${elem.author} - ${elem.song}`;
    ol.append(li);
});

// Task 2
const btnOpen = document.createElement('button');
btnOpen.innerText = 'Відкрити';
document.body.append(btnOpen);
btnOpen.onclick = function(){
        const modalWrap = document.createElement('div');
        modalWrap.classList = 'modal-wrap modal-container';
        const modalWindow = document.createElement('div');
        modalWindow.className = 'modal-window'
        modalWrap.append(modalWindow);
        const btnClose = document.createElement('button');
        btnClose.innerText = 'Закрити';
        modalWindow.append(btnClose);
        document.body.append(modalWrap);
        btnClose.onclick = function(){
        btnClose.closest('.modal-wrap').remove();
    };
};

// Task 3
const trafficLight = document.createElement('div');
trafficLight.className = 'traffic-light';
document.body.prepend(trafficLight);
const redLight = document.createElement('div');
redLight.classList = 'red lights active-light';
trafficLight.append(redLight);
const yellowLight = document.createElement('div');
yellowLight.classList = 'yellow lights';
trafficLight.append(yellowLight);
const greenLight = document.createElement('div');
greenLight.classList = 'green lights';
trafficLight.append(greenLight);
const changeColorBtn = document.createElement('button');
changeColorBtn.innerText = 'Змінити колір';
trafficLight.after(changeColorBtn);

changeColorBtn.onclick = function(){
    if(redLight.classList.contains('active-light')){
        redLight.classList.remove('active-light');
        yellowLight.classList.add('active-light');
    }else if(yellowLight.classList.contains('active-light')){
        yellowLight.classList.remove('active-light');
        greenLight.classList.add('active-light');
    }else if(greenLight.classList.contains('active-light')){
        greenLight.classList.remove('active-light');
        redLight.classList.add('active-light');
    };
};