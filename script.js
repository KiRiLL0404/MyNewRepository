'use strict'
const appData = {
    title: "",
    screens: "",
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
        appData.title = prompt("Как называется ваш проект?", "Калькулятор");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?", 1500);
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        let price = 0;
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price))

            appData.services[name + i] = +price;
        }

    },

    getAllServicePrices: function () {
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
        for (let key in appData) {
            console.log("Ключ: " + key + " Значение :" + appData[key]);
        }
    },

    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.logger();
    }

}

appData.start();
