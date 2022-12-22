import products from "../products.js";
let productsRender = [];
let productsAddedInBag = [];

localStorage.setItem("productsAddedInBag", productsAddedInBag)

window.addItenInCart = (id) => {
    document.getElementById('cart').style.display = 'flex' 
    productsAddedInBag.push(id)
    localStorage.setItem('productsAddedInBag',JSON.stringify(productsAddedInBag))  
    itensCart();
}

window.closeCart = () => {
    document.getElementById('cart').style.display = 'none' 
}

function itensCart(){
    const productIdInBag = JSON.parse((localStorage.getItem('productsAddedInBag')))
    for (const [key, value] of Object.entries(products)) {
        productIdInBag.map(id =>{
            value.map(product =>{
                if(!productsRender.includes(product)){
                    if(product.id == id) productsRender.push(product)
                }                   
            }) 
        })
    }
    renderCart()
}

function renderCart(){
    var listCart = document.querySelector('.list-cart');
    listCart.innerText = "";
    productsRender.map(iten => {
        const product = 
    `
        <div class="product-iten-cart">
            <img src="${iten.urlImg}" alt="">
            <div class="description-iten-cart">
                <h3 class="name-iten">${iten.name}</h3>
                <span class="cor-iten">Cor: ${iten.cor}</span>
                <span class="size-iten">Tamanho: ${iten.size}</span>
                <span class="price-iten">R$ ${iten.newPrice}</span>
            </div>
        </div>
    `;
    listCart.innerHTML += product;
    })
}






