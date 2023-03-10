/**
  |============================
  | Завдання 1
  |============================
*/
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const usersData = [
//     {id: 'id-1', name: 'Moore Hensley', age: 23},
//     {id: 'id-2', name: 'Sharlene Bush', age: 20},
//     {id: 'id-3', name: 'Ross Vazquez', age: 32},
//     {id: 'id-4', name: 'Elma Head', age: 21},
//     {id: 'id-5', name: 'Carey Barr', age: 25},
//     {id: 'id-6', name: 'Blackburn Dotson', age: 40},
//     {id: 'id-7', name: 'Sheree Anthony', age: 26},
//   ];

// function getUserName(usersName) {
//     return usersName.map(user => user.name);
// }

// console.log(getUserName(usersData));

/**
  |============================
  | Завдання 2
  |============================
*/
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {id: 'id-1', name: 'Moore Hensley', eyeColor: 'blue', age: 23},
//     {id: 'id-2', name: 'Sharlene Bush', eyeColor: 'blue', age: 20},
//     {id: 'id-3', name: 'Ross Vazquez', eyeColor: 'green', age: 32},
//     {id: 'id-4', name: 'Elma Head', eyeColor: 'green', age: 21},
//     {id: 'id-5', name: 'Carey Barr', eyeColor: 'blue', age: 25},
//     {id: 'id-6', name: 'Blackburn Dotson', eyeColor: 'brown', age: 40},
//     {id: 'id-7', name: 'Sheree Anthony', eyeColor: 'brown', age: 26},
//   ];

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

/**
  |============================
  | Завдання 3
  |============================
*/
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {id: 'id-1', name: 'Moore Hensley', eyeColor: 'blue', gender: 'male', age: 23},
//     {id: 'id-2', name: 'Sharlene Bush', eyeColor: 'blue', gender: 'female', age: 20},
//     {id: 'id-3', name: 'Ross Vazquez', eyeColor: 'green', gender: 'male', age: 32},
//     {id: 'id-4', name: 'Elma Head', eyeColor: 'green', gender: 'female', age: 21},
//     {id: 'id-5', name: 'Carey Barr', eyeColor: 'blue', gender: 'male', age: 25},
//     {id: 'id-6', name: 'Blackburn Dotson', eyeColor: 'brown', gender: 'male', age: 40},
//     {id: 'id-7', name: 'Sheree Anthony', eyeColor: 'brown', gender: 'female', age: 26},
//   ];

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender)
// .map(user => user.name);

// console.log(getUsersWithGender(users, 'male'));

/**
  |============================
  | Завдання 4
  |============================
*/
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {id: 'id-1', name: 'Moore Hensley', eyeColor: 'blue', gender: 'male', age: 23, isActive: false},
//     {id: 'id-2', name: 'Sharlene Bush', eyeColor: 'blue', gender: 'female', age: 20, isActive: true},
//     {id: 'id-3', name: 'Ross Vazquez', eyeColor: 'green', gender: 'male', age: 32, isActive: false},
//     {id: 'id-4', name: 'Elma Head', eyeColor: 'green', gender: 'female', age: 21, isActive: true},
//     {id: 'id-5', name: 'Carey Barr', eyeColor: 'blue', gender: 'male', age: 25, isActive: true},
//     {id: 'id-6', name: 'Blackburn Dotson', eyeColor: 'brown', gender: 'male', age: 40, isActive: false},
//     {id: 'id-7', name: 'Sheree Anthony', eyeColor: 'brown', gender: 'female', age: 26, isActive: true},
//   ];

// const getInactiveUsers = users => users.filter(user => !user.isActive);

// console.log(getInactiveUsers(users));

/**
  |============================
  | Завдання 5
  |============================
*/
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//++++++++++++++++++ Рішення ++++++++++++++++++

// const getUserWithEmail = (users, email) => users.find(user => user.email === email);

/**
  |============================
  | Завдання 6
  |============================
*/
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {id: 'id-1', name: 'Moore Hensley', eyeColor: 'blue', gender: 'male', age: 23, isActive: false},
//     {id: 'id-2', name: 'Sharlene Bush', eyeColor: 'blue', gender: 'female', age: 20, isActive: true},
//     {id: 'id-3', name: 'Ross Vazquez', eyeColor: 'green', gender: 'male', age: 32, isActive: false},
//     {id: 'id-4', name: 'Elma Head', eyeColor: 'green', gender: 'female', age: 21, isActive: true},
//     {id: 'id-5', name: 'Carey Barr', eyeColor: 'blue', gender: 'male', age: 25, isActive: true},
//     {id: 'id-6', name: 'Blackburn Dotson', eyeColor: 'brown', gender: 'male', age: 40, isActive: false},
//     {id: 'id-7', name: 'Sheree Anthony', eyeColor: 'brown', gender: 'female', age: 26, isActive: true},
//   ];

// const getUsersWithAge = (users, minAge, maxAge) =>
// users.filter(user => user.age >= minAge && user.age <= maxAge);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

/**
  |============================
  | Завдання 7
  |============================
*/
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {id: 'id-1', name: 'Moore Hensley', eyeColor: 'blue', gender: 'male', age: 23, balance: 2000},
//     {id: 'id-2', name: 'Sharlene Bush', eyeColor: 'blue', gender: 'female', age: 20, balance: 2000},
//     {id: 'id-3', name: 'Ross Vazquez', eyeColor: 'green', gender: 'male', age: 32, balance: 2000},
//     {id: 'id-4', name: 'Elma Head', eyeColor: 'green', gender: 'female', age: 21, balance: 2000},
//     {id: 'id-5', name: 'Carey Barr', eyeColor: 'blue', gender: 'male', age: 25, balance: 2000},
//     {id: 'id-6', name: 'Blackburn Dotson', eyeColor: 'brown', gender: 'male', age: 40, balance: 2000},
//     {id: 'id-7', name: 'Sheree Anthony', eyeColor: 'brown', gender: 'female', age: 26, balance: 2000},
//   ];

//   const calculateTotalBalance = users =>
//      users.reduce((totalBalance, user) =>
//  totalBalance + user.balance,
//      0);

// console.log(calculateTotalBalance(users));

/**
  |============================
  | Завдання 8
  |============================
*/
// Отримати масив імен всіх користувачів, які мають одиного друга із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {
//         id: 1,
//         name: 'Sharlene Bush',
//         friends: [
//             { id: 2, name: 'Sheree Anthony' },
//             { id: 3, name: 'Elma Head' },
//             { id: 4, name: 'Carey Barr' },
//         ],
//     },
//     {
//         id: 2,
//         name: 'Sheree Anthony',
//         friends: [
//             { id: 1, name: 'Sharlene Bush' },
//             { id: 3, name: 'Goldie Gentry' },
//             { id: 4, name: 'Briana Decker' },
//         ],
//     },
//     {
//         id: 3,
//         name: 'Elma Head',
//         friends: [
//             { id: 1, name: 'Sharlene Bush' },
//             { id: 2, name: 'Sheree Anthony' },
//             { id: 4, name: 'Lillian Burgess' },
//         ],
//     },
//     {
//         id: 4,
//         name: 'Carey Barr',
//         friends: [
//             { id: 1, name: 'Sharlene Bush' },
//             { id: 2, name: 'Sheree Anthony' },
//             { id: 3, name: 'Elma Head' },
//         ],
//     },
// ];

// const getUsersWithFriend = (users, friendName) =>
//     users
//         .filter(user => user.friends.some(friend => friend.name === friendName))
//         .map(user => user.name);

//         console.log(getUsersWithFriend(users, 'Briana Decker'));
//         console.log(getUsersWithFriend(users, 'Goldie Gentry'));

/**
  |============================
  | Завдання 9
  |============================
*/
// Отримати масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const users = [
//     {
//         id: 1,
//         name: 'Elma Head',
//         friends: [2, 3, 4],
//     },
//     {
//         id: 2,
//         name: 'Sheree Anthony',
//         friends: [1, 3, 4],
//     },
//     {
//         id: 3,
//         name: 'Carey Barr',
//         friends: [1, 2, 4],
//     },
//     {
//         id: 4,
//         name: 'Moore Hensley',
//         friends: [1, 2, 3],
//     },
//     {
//         id: 5,
//         name: 'Blackburn Dotson',
//         friends: [2, 3, 4],
//     },
//     {
//         id: 6,
//         name: 'Sharlene Bush',
//         friends: [1, 2, 3],
//     },
//     {
//         id: 7,
//         name: 'Ross Vazquez',
//         friends: [1, 2, 3, 4],
//     },
// ];

// const getNamesSortedByFriendCount = (users) =>
//     users
//         .sort((a, b) => a.name.localeCompare(b.name))
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map((user) => user.name);

// console.log(getNamesSortedByFriendCount(users));
// Output: [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/**
  |============================
  | Завдання 10
  |============================
*/
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// уміннь, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//++++++++++++++++++ Рішення ++++++++++++++++++

// const getUsersSkill = (users) =>
//     users
//         .flatMap((user) => user.skill)
//         .filter((skill, index, arrey) => arrey.idexOf(skill) === index)
//         .sort((a, b) => a.localeComare(b));

// console.log(getUsersSkill(users));

/**
  |============================
  | Завдання 11
  |============================
*/
// Напишіть функцію compact(), яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
// const data = [0, 1, false, 2, undefined, "", 3, null];
// console.log(compact(data)); // [1, 2, 3]
//++++++++++++++++++ Рішення ++++++++++++++++++

// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = (data) => data.filter((val) => val);
// console.log(compact(data));

// Напишіть функцію without(), яка повертає новий масив без наданих значень. Використовуйте примітивні типи.

// const data = [1, 2, 3, 4, 1, 2];
// const without = (arrey, ...vals) => arrey.filter((val) => !vals.includes(val));

// console.log(without(data, 1, 2)); // [3, 4]
