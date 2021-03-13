"use strict";

// 1. Доработать модуль корзины.
//     a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида


const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Категория</b>: ${good.category}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Категория</b>: ${good.category}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button id="${good.id}" class="buy-btn">Купить</button>
                </div>`;
    }
}

const cart = {
    cart: [],

    init () {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },
    render() {

        this.cartListBlock.textContent = ''
        this.cartListBlock.insertAdjacentHTML("beforeend", "<p class='h1'> Товары в корзине: </p>");
        if (this.cart.length) {
            this.cart.forEach(cart => {
                this.cartListBlock.insertAdjacentHTML('beforeend', cartItem.render(cart));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.cart.length}</b> позиций(а), <b>${this.getCartQuantity()}</b> шт., стоимостью <b>${this.getCartPrice()}</b>`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }

    },

    getCartQuantity() {
        return this.cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity, 0)
    },

    getCartPrice() {
        return this.cart.reduce(function (price, cart) {
            return price + cart.price * cart.quantity;
        }, 0);
    },
    clearCart() {
        this.cart = [];

        this.render();
    },
};

const catalog = {
    catalogDiv: null,
    product: null,
    buttonBuy: null,

    catalogArr: [
        {
            id: 1,
            name: "nikeAirForce1",
            category: "Обувь",
            price: 9999,
            quantity: 1,
        },
        {
            id: 2,
            name: "nikeAirMaxPlus",
            category: "Обувь",
            price: 16499,
            quantity: 1,
        },
        {
            id: 3,
            name: "jordanFlight",
            category: "Брюки",
            price: 7199,
            quantity: 1,
        },
        {
            id: 4,
            name: "nikeEveryday",
            category: "Носки",
            price: 999,
            quantity: 1,
        },
    ],


    init () {
        this.catalogDiv = document.querySelector('#catalog')
        this.render()
        this.buttonBuy = document.querySelectorAll(".buy-btn");
        for (let i = 0; i < this.catalogArr.length; i++) {
            this.buttonBuy[i].addEventListener('click', this.addCart.bind(this));
        }


    },

    render () {

        this.catalogDiv.insertAdjacentHTML("beforeend", "<p class='h1'> Каталог товаров: </p>");
        this.catalogArr.forEach(catalogArr => {
            this.catalogDiv.insertAdjacentHTML('beforeend', catalogItem.render(catalogArr));
        });



    },

    addCart() {
        let targetObj = this.catalogArr.find(item => item.id === Number(event.target.id))
        if (cart.cart.find(item => item.id === Number(event.target.id))) {
            cart.cart.find(item => item.id === targetObj.id).quantity +=1

            cart.render()
            return
        }

        cart.cart.push(Object.assign({}, this.catalogArr.find(item => item.id === Number(event.target.id))))
        cart.render()
        console.log(cart.cart)
    },



};


catalog.init();
cart.init();


// 2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")