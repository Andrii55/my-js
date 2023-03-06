// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача через prompt
// та викликає callback-функцію greet(name)
// greet(name) - callback-функція, що приймає ім'я і виводить в консоль
// рядок "Привіт <name>"
// Реалізуте перевірку, що у prompt() введено значення, в інакшому випадку
// виведіть в консоль повідомлення "Ви не ввели імʼя"
//++++++++++++++++++ Рішення ++++++++++++++++++

// const letMeSeeYourName = function (callback){
// const userName = prompt("Привіт <name>");
//  if (!userName) {
//     return "Ви не ввели імʼя";
//  }
// return callback(userName);

// };
// const greet = function (name) {
//     return confirm(`Привіт ${name}`)
// }
// console.log(letMeSeeYourName(greet));

/**
  |============================
  | Завдання 2
  |============================
*/
// Напишіть дві функції:
// 1. makeProduct(name, price, callback), яка приймає
// ім'я, ціну товару, а також callback-функцію.
// Функція makeProduct() створює об'єкт товару <product>, додаючи йому унікальний
// ідентифікатор, ключ з імʼям <id> (для цього використайте виклик new Date().getTime())
// і викликає callback-функцію, передаючи їй створений об'єкт
// 2. showProduct(product) - коллбек, який приймає об'єкт
// продукту і виводить інформацію у консоль
// makeProduct("Fish", 350, showProduct);
//++++++++++++++++++ Рішення ++++++++++++++++++++++++

// makeProduct("Fish", 350, showProduct);

// function makeProduct(name, price, callback) {
//     const product = {
//         name,
//         price,
//         id: new Date().getTime(),
//     };

//     return callback(product);
// }
// function showProduct(product){
//     console.log(product);
// };

/**
  |============================
  | Завдання 3
  |============================
*/
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");
//++++++++++++++++++ Рішення ++++++++++++++++++

// function makeShef(shefName) {
//     return function makeDish(dish) {
//         console.log(`${shefName} is cooking ${dish}`);
//     }
// };

// const mango = makeShef("Mango");

// mango("apple pie");

// const poly = makeShef("Poly");

// poly("muffins");

/**
  |============================
  | Завдання 4
  |============================
*/
// Напишіть функцію each(array, callback)
// Функція першим параметром приймає масив довільних чисел,
// а другим - callback-функцію, яка застосовується до кожного елементу масиву.
// Функція each() повинна повернути новий масив, елементами
// якого будуть результати виклику callback-функції
// callback-функція повинна множити елементи на 2
// Реалізуйте callback-функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++

// function each(array, callback){
//     const total = [];
//     for (let i = 0; i < array.length; i += 1) {
//         total.push(callback(array[i]))
//     }
//     return total;
// };

// function multiply (values){
//     return values * 2;
// };

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// console.log(each(array, (value) => value * 2));

// console.log(each(array, multiply));

/**
  |============================
  | Завдання 5
  |============================
*/
// Напишіть функцію makeCounter(), яка повертає іншу функцію,
// яка підраховує та логує кількість своїх викликів
// Реалізуйте внутрішню функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++

 

// const makeCounter = () => {
//   let count = 0;
//   const counter = () => {
//     count += 1;
//     console.log(`function called ${count} times`);
//   };
//   return counter;
// };

// const counter = makeCounter();

// counter();
// counter();

// Напишіть функцію savePassword(password), яка приймає значення паролю,
// який потрібно зберегти і повертає внутрішню функцію checkPassword(),
// що приймає рядок з паролем на перевірку і повертає відповідь у вигляді рядка
// "Збережений пароль: qwerty збігається з введеним паролем qwerty",
// якщо рядок збігається зі збереженим паролем або якщо не збігається
// "Збережений пароль: qwerty не збігається з введеним паролем asdfgh",
//++++++++++++++++++ Рішення ++++++++++++++++++

// const savePassword = (password) => {
//   return function checkPassword(inputPassword) {
//     if (password === inputPassword) {
//       return `${password} збігається з введеним паролем ${inputPassword}`;
//     }
//     return `${password} не збігається з введеним паролем ${inputPassword}`;
//   };
// };
// const password = savePassword("qwerty");

// console.log(password("qwerty"));
// console.log(password("asdfgh"));

/**
  |============================
  | Завдання 7
  |============================
*/
// Напишіть функцію для зберігання знижки saveDiscount().
// Функція saveDiscount() повертає внутрішню функцію makeDiscount(),
// яка приймає суму покупки і повертає фінальну суму
// зi збереженою знижкою.
// Проведіть рефакторинг функції saveDiscount(), використовуючи
// стрілочні callback-функції
//++++++++++++++++++ Рішення ++++++++++++++++++

// const saveDiscount = (discount) => {
//   return (purchaseAmount) => {
//     const discontedAmount = purchaseAmount - discount;
//     return discontedAmount;
//   };
// };

// const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));
