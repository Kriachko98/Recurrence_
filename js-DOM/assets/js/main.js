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

