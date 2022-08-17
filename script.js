'use strict'

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = Math.round(Math.random() * 100);

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function (additionalService1, additionalService2) {
    return additionalService1 + additionalService2;
}

function getFullPrice(costOfAdditionalServices, layoutCost) {
    return costOfAdditionalServices + layoutCost;
}

const getServicePercentPrices = function (rollbackPercentage, finalCost) {
    return finalCost - (finalCost * (rollbackPercentage / 100));
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



allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(allServicePrices, screenPrice);
servicePercentPrice = getServicePercentPrices(rollback, fullPrice);


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(screens);
console.log(getRollbackMessage(fullPrice));
