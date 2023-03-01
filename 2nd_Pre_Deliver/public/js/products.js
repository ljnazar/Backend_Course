const inputProduct = document.getElementById('inputProduct');
const inputProductID = document.getElementById('inputProductID');
const inputNewProduct = document.getElementById('inputNewProduct');
const inputDeleteProductID = document.getElementById('inputDeleteProductID');
const btnAddProduct = document.getElementById('btnAddProduct');
const btnUpdateProduct = document.getElementById('btnUpdateProduct');
const btnDeleteProduct = document.getElementById('btnDeleteProduct');
const paragraphRender = document.getElementById('paragraphRender');

btnAddProduct.addEventListener('click', () => {
    fetch("/products", {
    method: "post",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: inputProduct.value
    });
});

btnUpdateProduct.addEventListener('click', () => {
    fetch(`/products/${inputProductID.value}`, {
        method: "put",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: inputNewProduct.value
    });
});

btnDeleteProduct.addEventListener('click', () => {
    fetch(`/products/${inputDeleteProductID.value}`, {
        method: "delete",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    });
});