const toast = {
    timeoutID: null,
    styles: {
        position: 'fixed',
        right: '60px',
        top: '30px',
        'border-radius': '10px',
        padding: '10px 20px',
        'z-index': 10,
        color: 'white'
    },
    success: function(text){
        this.show(text, 'success')
    },
    error: function(text){
        this.show(text, 'error')
    },
    warning: function(text){
        this.show(text, 'warning')
    },
    info: function(text){
        this.show(text, 'info')
    },
    show: function(text, type = 'info'){
        const myToast = document.getElementById('my-toast');
        let style = '';

        if(myToast){
            clearTimeout(this.timeoutID);
            myToast.remove();
        };

        Object.entries(this.styles).forEach(([key, value]) => {
            style += `${key}: ${value};` 
        });
        
        switch(type){
            case 'success':
                style += 'background-color: #198754;'
                break;
            case 'error':
                style += 'background-color: #dc3545;'
                break;
            case 'warning':
                style += 'background-color: #fd7e14;'
                break;
            case 'info':
                style += 'background-color: #0dcaf0;'
                break;
        };

        const html = `<div id="my-toast" style="${style}">
            <p class="mb-0">${text}</p>
        </div>`;
        document.body.insertAdjacentHTML('afterbegin', html);

        this.hide(3000);
    },
    hide: function(timeout){
        this.timeoutID = setTimeout(function(){
            const myToast = document.getElementById('my-toast');
            myToast && myToast.remove();
        }, timeout);
    }
};