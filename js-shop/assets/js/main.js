const CART = [
    {
        title: '',
        qty: 1,
        price: 1.00
    }
];

function _el(id){
    return document.getElementById(id);
};

function addToCart(){
    const title = _el(`prod_title`).value;
    const qty = _el(`prod_qty`).valueAsNumber;
    const price = _el(`prod_price`).valueAsNumber;

    if(title !== '' && qty > 0 && !isNaN(price)){
        CART.push({
            title,
            qty,
            price
        })
    }else{
        toast.error(`Enter product info`);
    }
};

const toast = {
    timeuotID: null,
    success: function(text){
        this.show(text, `success`)
    },
    error: function(text){
        this.show(text, `error`)
    },
    warning: function(text){
        this.show(text, `warning`)
    },
    info: function(text){
        this.show(text, `info`)
    },
    show: function(text, type = ``){
        const myToast = document.getElementById(`my-toast`);
        if(myToast){
            clearTimeout(this.timeuotID);
            myToast.remove();
        };
        const html = `<div id="my-toast" class="my-toast ${type}">
            <p class="mb-0">${text}</p>
        </div>`;
        document.body.insertAdjacentHTML(`afterbegin`, html);
        this.hide(3000);
    },
    hide: function(timeout){
        this.timeoutID = setTimeout(function(){
            const myToast = document.getElementById(`my-toast`);
            myToast && myToast.remove();
        }, timeout);
    }
}
