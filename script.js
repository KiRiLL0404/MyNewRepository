'use strict';

document.body.style.backgroundImage = 'url(./image/open_book.jpg)';

const books = document.querySelectorAll('.book');

books[1].after(books[0]);
books[5].after(books[2]);
books[4].after(books[3]);

const bookTwo = books[0].querySelectorAll('li');

bookTwo[3].after(bookTwo[6]);
bookTwo[6].after(bookTwo[8]);
bookTwo[9].after(bookTwo[2]);

const bookFive = books[5].querySelectorAll('li');

bookFive[1].after(bookFive[9]);
bookFive[9].after(bookFive[3]);
bookFive[3].after(bookFive[4]);
bookFive[8].before(bookFive[5]);

const newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

const bookSix = books[2].querySelectorAll('li');

bookSix[9].insertAdjacentElement('beforebegin', newChapter);

document.querySelector('.adv').remove();

books[4].querySelector('a').innerHTML = 'Книга 3. this и Прототипы Объектов';

console.log(bookSix);

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    servicePrice1: 0,
    servicePrice2: 0,
    rollback: Math.round(Math.random() * 100),

    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор");
        } while (appData.isNumber(appData.title));


        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        for (let i = 0; i < 2; i++) {
            let name = "";
            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");
            } while (appData.isNumber(name));
            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?", 1500);
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: +price });
        }

        appData.screenPrice = appData.screens.reduce(function (sPrice, screen) {
            return sPrice + screen.price;
        }, 0);

        for (let i = 0; i < 2; i++) {
            let name = "";
            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isNumber(name));

            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services[name + i] = +price;
        }

    },

    addPrices: function () {

        appData.screenPrice = appData.screens.reduce((sPrice, screen) => {
            sPrice.price += screen.price;
            return sPrice.price;
        });

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +(appData.screenPrice) + (appData.allServicePrices);
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) return "Даем скидку в 10%";
        else if (price >= 15000) return "Даем скидку в 5%";
        else if (price >= 0) return "Скидка не предусмотрена";
        else return "Что то пошло не так";
    },

    getTitle: function (str) {
        return (str.trim())[0].toLocaleUpperCase() + (str.trim().slice(1)).toLocaleLowerCase();
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.logger();
    }

}