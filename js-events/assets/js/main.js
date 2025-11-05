const infoArea = document.createElement('div');
infoArea.id = 'info';
infoArea.classList = 'wrap container';
infoArea.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quo? Sit, quidem quis explicabo porro dolor magnam, voluptate unde iste ex provident fugit aut dolorum dolorem distinctio dolores iusto quo quos alias aliquid deleniti eveniet commodi accusantium. Quod, et? Ducimus est ipsum excepturi aspernatur, quibusdam repellat perspiciatis id sapiente. Quisquam enim itaque quae suscipit aspernatur ratione ipsa blanditiis nulla? Nulla quisquam at quo, tempora repellendus, rerum vero fuga excepturi dicta magni quia maxime laboriosam accusamus quos suscipit!';
document.body.append(infoArea);

const textArea = document.createElement('textarea');
textArea.value = infoArea.textContent;
textArea.classList = 'wrap container areaContent'

document.addEventListener('keydown', function(event){
    if(event.code === 'KeyE' && event.ctrlKey){
        event.preventDefault();
        infoArea.replaceWith(textArea);
    }
    if(event.code === 'KeyS' && event.ctrlKey){
        event.preventDefault();
        infoArea.textContent = textArea.value;
        textArea.replaceWith(infoArea);
    }
});
