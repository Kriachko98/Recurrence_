const CART = [];

function _el(id){
    return document.getElementById(id);
};

function addToCart(){
    const title = _el(`prod_title`).value;
    const qty = _el(`prod_qty`).valueAsNumber;
    const price = _el(`prod_price`).valueAsNumber;

    if(title === ''){
        toast.error(`Enter title`);
        return;
    }else if(qty <= 0){
        toast.error(`Incorrect quantity`);
        return;
    }else if(isNaN(price)){
        toast.error(`Enter price`);
        return;
    };

    const prodIndex = CART.findIndex(prod => prod.title === title);
    if(prodIndex === -1){
        CART.push({
            title,
            qty,
            price
        })
        toast.success(`Product is added`);
    }else{
        CART[prodIndex].qty += qty
    };

    _el(`prod_title`).value = '';
    _el(`prod_qty`).valueAsNumber = 1;
    _el(`prod_price`).value = ''; 

    productList();
};

function productList(){
    let tbody = ``;
    CART.forEach((prod, index) => {
        tbody += `<tr>
        <td>${index + 1}</td>
        <td>${prod.title}</td>
        <td>${prod.qty}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
        <td>
            <button type="button" class="btn btn-danger btn-sm" onclick='deleteProd(${index}, "${prod.title}")'>Remove</button>
        </td>
        </tr>`
    });
    _el(`cart_tbody`).innerHTML = tbody;
};

function deleteProd(index, title){
    if(confirm(`Do you want to delate ${title}?`)){
        CART.splice(index, 1);
        productList();
        toast.success(`${title} was deleted`);
    };
};