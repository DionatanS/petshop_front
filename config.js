import products from './products.js'
console.log(products['best-sallers'])
const productsExclusive = products.exclusive


document.addEventListener("DOMContentLoaded", function (event) {
    productsDetails()
});

function productsDetails() {
    document.getElementById('product-name-1').textContent = products['darlings'][0].name
    document.getElementById('product-new-price-1').textContent = products['darlings'][0]['new-price']
    document.getElementById('product-old-price-1').textContent = products['darlings'][0]['old-price']
    document.getElementById('product-img-1').setAttribute('src', products['darlings'][0]['url-img'])

    document.getElementById('product-name-2').textContent = products['darlings'][1].name
    document.getElementById('product-new-price-2').textContent = products['darlings'][1]['new-price']
    document.getElementById('product-old-price-2').textContent = products['darlings'][1]['old-price']
    document.getElementById('product-img-2').setAttribute('src', products['darlings'][1]['url-img'])

    document.getElementById('product-name-3').textContent = products['darlings'][2].name
    document.getElementById('product-new-price-3').textContent = products['darlings'][2]['new-price']
    document.getElementById('product-old-price-3').textContent = products['darlings'][2]['old-price']
    document.getElementById('product-img-3').setAttribute('src', products['darlings'][2]['url-img'])

    document.getElementById('product-name-4').textContent = products['darlings'][3].name
    document.getElementById('product-new-price-4').textContent = products['darlings'][3]['new-price']
    document.getElementById('product-old-price-4').textContent = products['darlings'][3]['old-price']
    document.getElementById('product-img-4').setAttribute('src', products['darlings'][3]['url-img'])
}



// ********** Criação do slide ***************

const sliderControls = document.querySelector('.slider-controls'),
sliderList = document.querySelector('.slider-list');
console.log(sliderList)
let lastIndex = 0, currentIndex;

productsExclusive.map((product, index) => {
    const button = `
    <button class="slider-controls__button ${index == 0 ? `is-active` : ''}" id="slide-button-${index}" type="button">Slide ${product.id}</button>
  `;
    const slide = `
    <div class="slider-item" id="slider-${index}">
        <img src="${product['url-img']}" alt=""  class="img-products-exclusive">
        <p>${product.name}</p>
        <img src="./images/products/rate.png" alt="" class="products-rate">
        <span class="price">
            <span class="new-price"> R$ <span>${product['new-price']}</span></span>
            <span class="old-price">R$ <span>${product['old-price']}</span></span>
        </span>
        <button class="btn-buy">COMPRAR</button>
    </div>
  `;

    index <= productsExclusive.length / 5 ? sliderControls.innerHTML += button : false;
    sliderList.innerHTML += slide;
});

const sliders = document.querySelectorAll('.slider-item');
const slideWidth = sliders[0].clientWidth;
console.log(slideWidth)
console.log(sliderList.clientWidth)
const getGap = () => (sliderList.clientWidth / 4) - slideWidth;
sliderList.style.gap = `${getGap()}px`;
window.onresize = () => sliderList.style.gap = `${getGap()}px`;

const buttons = document.querySelectorAll('.slider-controls__button');

function changeSlide(evt) {
    console.log('Changing slide');
    currentIndex = evt.currentTarget.id.split('-')[2];
    if (currentIndex == lastIndex) return;
    sliderList.style.transform = currentIndex == 0 ?
        `translateX(-${slideWidth * currentIndex}px)` :
        `translateX(-${ + (680 * currentIndex)}px)`;
    buttons[currentIndex].classList.add('is-active');
    buttons[lastIndex].classList.remove('is-active');
    lastIndex = currentIndex;
}

buttons.forEach(button => {
    button.addEventListener('click', changeSlide);
});