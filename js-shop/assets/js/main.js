const CART = [
    {
        title: 'Milk',
        qty: 2,
        price: 25.5
    }
];
productList();

let editMode = false;
let editID = null;

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

    if(editMode){
        CART[editID] = {
            title,
            qty,
            price
        }
        toast.success('Product is updated');
        editMode = false;
        editID = null;
    }else{
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
    }

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
        <td>
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'dec')">-</button>
                <input type="text" class="form-control" value="${prod.qty}">
                <button class="btn btn-outline-secondary" type="button" onclick="changeQty(${index}, 'inc')">+</button>
            </div>
        </td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
        <td>
            <button type="button" class="btn btn-info btn-sm" onclick='editProd(${index})'>Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick='deleteProd(${index}, "${prod.title}")'>Remove</button>
        </td>
        </tr>`
    });
    _el(`cart_tbody`).innerHTML = tbody;
    const disc = calcDisc();
    _el(`cart_total`).innerHTML = (sumProd() - disc).toFixed(2);
    _el('cart_disc').innerHTML = disc.toFixed(2);
};

function editProd(index){
    const prod = CART[index];
    editMode = true;
    editID = index;
    _el(`prod_title`).value = prod.title;
    _el(`prod_qty`).valueAsNumber = prod.qty;
    _el(`prod_price`).value = prod.price; 
}

function deleteProd(index, title){
    if(confirm(`Do you want to delate ${title}?`)){
        CART.splice(index, 1);
        productList();
        toast.success(`${title} was deleted`);
    };
};

function sumProd(){
    return CART.reduce((accum, prod) => accum + prod.qty * prod.price, 0);
};

function changeQty(index, action){
    const qtyFirst = CART[index].qty;
    if(action === 'inc'){
        CART[index].qty++;
    }else if(action === 'dec'){
        if(qtyFirst === 1){
            deleteProd(index, CART[index].title)
        }else{
            CART[index].qty--;
        };
    };
    productList();
};

function applyDisc(){
    const amount = _el('disc_amount').valueAsNumber;

    if(isNaN(amount)){
        toast.error('Enter amount of discount');
        return;
    };
    productList();
};

function calcDisc(){
    const type = _el('disc_type').value;
    const amount = _el('disc_amount').valueAsNumber || 0;
    let sum = sumProd();

    if(type === 'percent'){
        return sum * amount / 100;
    }
    if(type === 'fixed'){
        return amount;
    }
    return 0;
}