'use strict'

let title
let screens
let screenPrice
let adaptive
let service1
let servicePrice1
let service2
let servicePrice2
const rollback = Math.round(Math.random() * 100);

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNamber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", 1500);
    } while (!isNamber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0;
    let price;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) service2 = prompt("Какой дополнительный тип услуги нужен?");

        do {
            price = prompt("Сколько это будет стоить?");
        } while (!isNamber(price))

        sum += +price;
    }
    return sum;
}

function getFullPrice() {
    return +screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const showTypeOf = function (variabole) {
    console.log(variabole, typeof variabole);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) return "Даем скидку в 10%";
    else if (price >= 15000) return "Даем скидку в 5%";
    else if (price >= 0) return "Скидка не предусмотрена";
    else return "Что то пошло не так";
}

const getTitle = function (str) {
    return (str.trim())[0].toLocaleUpperCase() + (str.trim().slice(1)).toLocaleLowerCase();
}

asking();

allServicePrices = +getAllServicePrices();
fullPrice = +getFullPrice();
servicePercentPrice = getServicePercentPrices();


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(fullPrice);
console.log(getRollbackMessage(fullPrice));
