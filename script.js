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

const getAllServicePrices = function (additionalService1, additionalService2) {
    return additionalService1 + additionalService2;
}

function getFullPrice(costOfAdditionalServices, layoutCost) {
    return costOfAdditionalServices + layoutCost;
}

const getServicePercentPrices = function (rollbackPercentage, finalCost) {
    return finalCost - (finalCost * rollbackPercentage);
}


let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(allServicePrices, screenPrice);
let servicePercentPrice = getServicePercentPrices(rollback, fullPrice);
/*console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");

console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log((screens.toLowerCase()).split(", "));
*/
console.log(servicePercentPrice);

if (fullPrice >= 30000) console.log("Даем скидку в 10%");
else if (fullPrice >= 15000) console.log("Даем скидку в 5%");
else if (fullPrice >= 0) console.log("Скидка не предусмотрена");
else console.log("Что то пошло не так");


