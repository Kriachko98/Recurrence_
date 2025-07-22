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
        alert(`Incorrect value`)
    }
};