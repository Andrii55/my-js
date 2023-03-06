

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

