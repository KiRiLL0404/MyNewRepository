'use strict'

const tagName = document.getElementsByTagName('h1')[0];

const buttonStart = document.getElementsByClassName("handler_btn")[0];

const buttonReset = document.getElementsByClassName("handler_btn")[1];

const plusItem = document.querySelector('.screen-btn');

const otherItemsPercent = document.querySelectorAll(".other-items.percent");

const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputType = document.querySelector('.rollback > div > input');

const spanItem = document.querySelector('.rollback > div > .range-value');

const inputTotal = document.getElementsByClassName('total-input')[0];
const inputTotalCount = document.getElementsByClassName('total-input')[1];
const inputTotalCountOther = document.getElementsByClassName('total-input')[2];
const inputTotalFullCount = document.getElementsByClassName('total-input')[3];
const inputTotalCountRollback = document.getElementsByClassName('total-input')[4];

let screenItems = document.querySelectorAll(".screen");

console.log(spanItem);

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
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор");
        } while (appData.isNumber(appData.title))


        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        for (let i = 0; i < 2; i++) {
            let name = "";
            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");
            } while (appData.isNumber(name))
            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?", 1500);
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: +price });
        }

        appData.screenPrice = appData.screens.reduce(function (sPrice, screen) {
            return sPrice + screen.price;
        }, 0);

        for (let i = 0; i < 2; i++) {
            let name = "";
            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isNumber(name))

            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price))

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