"use strict";
// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

const chess = {

    tagSymbol: ["A", "B", "C", "D", "E", "F", "G", "H"],
    tagFigures: ["&#9817;","&#9816;","&#9815;","&#9814;","&#9813;","&#9812;"],
// &#9817 - пешка 0, &#9816 - конь 1, &#9815 - ферзь 2, &#9814 - ладья 3, &#9813 - королева 4, &#9812 - король 5
    styleName: ' width: 50px; height: 50px;',
    styleTable: 'border-collapse: collapse;text-align: center;',
    styleWhiteCell: 'border: 1px solid black; background-color: #efe3ac; font-size: 48px;',
    styleBlackCell: 'border: 1px solid black; background-color: #60562f;font-size: 48px;',


    renderTable () {
        //делаем поле таблицы
        const table = document.createElement("table");
        table.className = "chessTable";
        table.style.cssText = this.styleTable;
        document.body.appendChild(table);

        //заполняем ячейками
        for (let i = 0; i < 9; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 9; j++) {
                let td = document.createElement('td');
                if (i === 0 || j === 0) {
                    td.className = "rowCellName";
                    td.style.cssText = this.styleName;
                }
                else {
                    if (i%2 === j%2) {
                        td.className = "whiteCell";
                        td.style.cssText = this.styleWhiteCell;
                    }
                    else {
                        td.className = "blackCell";
                        td.style.cssText = this.styleBlackCell;
                    }

                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

    },

    addColText () {
        let col = document.querySelectorAll(".rowCellName");
        for (let val of col) {
            for (let key = 1; key < 9; key++) {
                col[key].textContent = this.tagSymbol[key - 1];
            }
        }
    },

    addRowText () {
        let row = document.querySelectorAll(".rowCellName");
        for (let key = 9; key < 17; key++) {
                row[key].textContent = key - 8;
            }

    },

    addFigures () {
        let figureCell = document.querySelectorAll(".whiteCell, .blackCell");
        let figureColor = document.querySelectorAll(".whiteCell, .blackCell");
        for (let key in figureCell) {
            switch (Number(key)) {
                case 0:
                case 7:
                case 56:
                case 63:
                    figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[3]);
                    break;

                case 1:
                case 6:
                case 57:
                case 62:
                    figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[1]);
                    break;

                case 2:
                case 5:
                case 58:
                case 61:
                    figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[2]);
                    break;

                case 3:
                case 59:
                    figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[4]);
                    break;

                case 4:
                case 60:
                    figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[5]);
                    break;

            }
        }
        for (let key = 8; key < 16; key++) {
            figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[0]);
        }
        for (let key = 48; key < 56; key++) {
            figureCell[key].insertAdjacentHTML("beforeend", this.tagFigures[0]);
        }
        for (let key = 48; key < 64; key++) {
            figureColor[key].style.cssText += 'color:white;';
        }
    },

    startGame (){
        this.renderTable();
        this.addColText();
        this.addRowText();
        this.addFigures();

    },

};

chess.startGame();

// 2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,


// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


const cart = {
    cartArr: [
        {
            name: "nikeAirForce1",
            category: "Обувь",
            price: 9999,
            quantity: 1
        },
        {
            name: "nikeAirMaxPlus",
            category: "Обувь",
            price: 16499,
            quantity: 1
        },
        {
            name: "jordanFlight",
            category: "Брюки",
            price: 7199,
            quantity: 1
        },
        {
            name: "nikeEveryday",
            category: "Носки",
            price: 999,
            quantity: 4
        },
    ],

    countBasketQuantity () {
        return this.cartArr.reduce((first, second) => first + second.quantity,0)
    },

    countBasketSum () {
        return this.cartArr.reduce((first, second) => first + second.quantity * second.price,0)
    },

    renderCart () {
        let cartDiv = document.querySelector('#cart')
        if (this.cartArr.length === 0) {
            cartDiv.insertAdjacentHTML("afterbegin", `Ваша корзина пуста`);
        } else if (this.cartArr.length > 0) {
            cartDiv.insertAdjacentHTML("afterbegin", `В корзине: ${this.countBasketQuantity()} товаров на сумму ${this.countBasketSum()} рублей`);
        }
    },
};

cart.renderCart();



// 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

const catalog = {
    catalogArr: [
        {
            name: "nikeAirForce1",
            category: "Обувь",
            price: 9999,
            quantity: 1
        },
        {
            name: "nikeAirMaxPlus",
            category: "Обувь",
            price: 16499,
            quantity: 1
        },
        {
            name: "jordanFlight",
            category: "Брюки",
            price: 7199,
            quantity: 1
        },
        {
            name: "nikeEveryday",
            category: "Носки",
            price: 999,
            quantity: 4
        },
    ],


    catalogPositions () {
        let product
        let catalogDiv = document.querySelector('#catalog')
        catalogDiv.insertAdjacentHTML("beforeend", "<p class='h1'> Каталог товаров: </p>");

        for (let i = 0; i < this.catalogArr.length; i++) {
            catalogDiv.insertAdjacentHTML("beforeend", "<div class='item'></div>");
            product = document.querySelectorAll('.item')

            for (let j = 0; j < Object.values(this.catalogArr[i]).length; j++) {
                product[i].insertAdjacentHTML("beforeend", `<p class="categoryName"> ${Object.keys(this.catalogArr[i])[j]}: </p> <p class="categoryValue">${Object.values(this.catalogArr[i])[j]} </p>`);
            }
        }

    },

    catalogStyle () {
        let catalogStyle = document.querySelectorAll('.item')
        for (let key of catalogStyle)
            key.style.cssText = "padding-bottom: 12px;";

        catalogStyle = document.querySelector('.h1')
        catalogStyle.style.cssText = "font-size: 24px; font-weight:700; margin-bottom:8px;"

        catalogStyle = document.querySelectorAll('.categoryName')
        for (let key of catalogStyle)
            key.style.cssText = "font-size: 12px; color:grey; margin: 0px;";

        catalogStyle = document.querySelectorAll('.categoryValue')
        for (let key of catalogStyle)
            key.style.cssText = "margin-top: 0px; margin-bottom: 4px;";
    },

    render () {
        this.catalogPositions()
        this.catalogStyle()
    },

};

catalog.render()

