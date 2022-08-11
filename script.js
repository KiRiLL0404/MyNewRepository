'use strict'

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = !!prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = Math.random();

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
    return finalCost - (finalCost * rollbackPercentage);
}

const showTypeOf = function (variabole) {
    console.log(variabole, typeof variabole);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) return "Даем скидку в 10%"
    else if (price >= 15000) return "Даем скидку в 5%"
    else if (price >= 0) return "Скидка не предусмотрена"
    else return "Что то пошло не так"
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(allServicePrices, screenPrice);
servicePercentPrice = getServicePercentPrices(rollback, fullPrice);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
