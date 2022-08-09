let title = "PROJECT ON CURS";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5000;
let rollback = Math.round(Math.random() * 100);
let fullPrice = 10000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log((screens.toLowerCase()).split(", "));
console.log(fullPrice * (rollback / 100));
//Пожалуйста пустите на 3ти урок((