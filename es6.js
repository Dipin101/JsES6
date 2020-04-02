//About let
// const name  = 'Jane Smith'
// let age = 23
//name = 'What is that'
//console.log(name) //cannot be changed for const
 
// function driver(passed) {
//     if(passed) {
//         var firstName = 'John'
//         var yearOfBirth = 1990
//     }
//     console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.')
// }
// driver(true)
// //ES6
// function driverpass(passed) {
//     if(passed) {
//         let firstName = 'John'
//         const yearOfBirth = 1990

//         console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car.')
//     }
   
// }
// driverpass(true)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Blocks and IIFE

// {//Maintains privacy 
//     const a = 1
//     let b = 2
// }
// console.log(a,b)

//ES5 IIFE
// (function(){
//     var c = 3 
// })()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Strings Template literals
// let firstName = 'john'
// let lastName = 'khatri'
// const yearOfBirth = 1990
// function calcAge(year) {
//     return 2016 - year
// }

// //ES5
// console.log('This is '+ firstName)

// //ES6
// console.log(`This is ${firstName}`) //String literals
// //some functions
// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('j')) //checks first element
// console.log(n.endsWith('i')) //checks last element
// console.log(n.includes('iii')) //checks middle element
// console.log(`${firstName} `.repeat(5)) //to repeat an element


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrow function

// const year = [1990, 1965, 1982, 1937]


//if it was before
// let ages = year.map(function(n) {
//     return 2016 - n
// })
// console.log(ages)

//ES6
// let ages = year.map(n => 2016 - n)
// console.log(ages)
//if we have more parameters we use parenthesis() and for more blocks of code  we use curly braces {}


////Lexical scoping for this
//arrow function don't have this keyword
//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         self = this
//         document.querySelector('.green').addEventListener('click' , function() {
//             let str = 'This is box number ' + self.position + ' and it is ' + self.color
//             alert(str) 
//         })
//     }
// }
// box5.clickMe()

//ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {   
//         document.querySelector('.green').addEventListener('click' , () => {
//             let str = 'This is box number ' + this.position + ' and it is ' + this.color
//             alert(str) 
//         })
//     }
// }
// box6.clickMe()

//in here the first arrow function is pointing to object but second arrow function is pointing to the window.
// const box7 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {   
//         document.querySelector('.green').addEventListener('click' , () => {
//             let str = 'This is box number ' + this.position + ' and it is ' + this.color
//             alert(str) 
//         })
//     }
// }
// box7.clickMe()

// function Person(name) {
//     this.name = name
// }

// Person.prototype.myFriends = function(friends) {
//     let arr = friends.map(function(n) {
//         return this.name + ' is friends with ' + n  
//     })
//     console.log(arr)
// }
//Using the arrow function
// function Person(name) {
//     this.name = name
// }

// Person.prototype.myFriends = function(friends) {
//     let arr = friends.map(n => {
//         return this.name + ' is friends with ' + n  
//     })
//     console.log(arr)
// }
// function Person(name) {
//     this.name = name
// }

// Person.prototype.myFriends = function(friends) {
//     let arr = friends.map(function(n) {
//         return this.name + ' is friends with ' + n  
//     }.bind(this))
//     console.log(arr)
// }

// var friends = ['Bob', 'Love', 'Mark']
// new Person('John').myFriends(friends)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Destructuring 
//Es6
// let john = ['john', 26]
// let name = john[0]
// let age = john[1]

// console.log(name + ' ' + age)

//Using destructuring
// const[firstName , year] = john
// console.log(firstName + ' ' + year)
//Similar with objects
// const obj = {
//     firstName: 'Mark',
//     lastName: 'Smith', 
//     dob: 1996,
//     age: function() {
//          return 2019 - this.dob
//     }
// }
// const {firstName, lastName} = obj
// console.log('My full name is ' + firstName + ' ' + lastName +', also my age is ' + obj.age()) 

// function calcRetirement(year) {
//     const age = new Date().getFullYear() - year 
//     return [age, 65 - age]
// }
// const [age , retirement] = calcRetirement(1990)
// console.log(age + ' , ' + retirement)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays

// const boxes = document.querySelectorAll('.box')

//ES6
// const  boxesArr6 = Array.from(boxes)
// boxesArr6.forEach(n=>{
//     n.style.backgroundColor = 'green'
// })

//ES6
// for (const n of boxesArr6) {
//     if(n.className === 'box blue'){
//         continue
//     } 
//     n.textContent = 'I change to what '
// }

//ES5

// let arr = [12, 17, 8, 21, 14, 11]
// let full = arr.map(n => n>=18)
// console.log(full)
// console.log(arr[full.indexOf(true)])

// //ES6
// console.log(arr.findIndex(n => n>=18))
// console.log(arr.find(n => n>=18))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread Operator -- takes an array and turns it into a couple of element or variable

// function addAges(a, b, c, d) {
//     return a + b + c + d
// }

// let sum1 = addAges(18, 30, 12, 21)
// console.log(sum1)

// //E5
// let ages = [18, 30, 12, 21]
// let sum2 = addAges.apply(null, ages)
// console.log(sum2)

// //ES6
// const sum3 = addAges(...ages)
// console.log(sum3)

// //Joining two arrays
// const familySmith = ['John', 'Jane', 'Mark']
// const familyMill = ['Mary', 'Bob', 'Ann']
// const bigFamily = [...familySmith, 'Abesh', ...familyMill]
// console.log(bigFamily)

// const h = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')

// const all = [h, ...boxes]

// Array.from(all).forEach(cur => cur.style.color = 'purple')

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Operator -- takes a couple of value and turns it into an array

//E55
// function isAges(limit) {
//     //console.log(arguments)
//     let argArr = Array.prototype.slice.call(arguments, 1)
//     console.log(argArr)
//     argArr.forEach(el => {
//         console.log(2016 - el)
//         console.log((2016 - el) >= limit)
//     });
// }

// isAges(21,1990, 1999, 1965)
// isAges(1990, 1999, 1965, 2016, 1987)

//ES6
// function isFullAge(limit, ...years) {
//     years.forEach(el => {
//         console.log((2016-el) >= limit)
//     })
// }

// //isFullAge(1990, 1999, 1965)
// isFullAge(21, 1990, 1999, 1965, 2016, 1987)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Default parameters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName
//     nationality === undefined ? nationality = 'American' : nationality
//     this.firstName = firstName
//     this.yearOfBirth = yearOfBirth
//     this.lastName = lastName
//     this.nationality = nationality
// }

// let john = new SmithPerson('John', 1990)

//ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith ', nationality = 'Kuire') {

//     this.firstName = firstName
//     this.yearOfBirth = yearOfBirth
//     this.lastName = lastName
//     this.nationality = nationality
// }

// let john = new SmithPerson('John', 1990)
// let diaz = new SmithPerson('Diaz', 1996, 'phong dong long', 'Neutral')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Map data structure

// const question = new Map()
// question.set('question', 'What is the official name of the latet major javascript version?')
// question.set(1, 'ES5')
// question.set(2, 'ES6')
// question.set(3, 'ES2015')
// question.set(4, 'ES7')
// question.set('correct', 3)
// question.set(true, 'Correct answer')
// question.set(false, 'Wrong please try again')

// console.log(question.get('question'))
// console.log(question.size)

// if(question.has(4)) {
//    // question.delete(4)
//    console.log(question.get(4))
// }

//question.clear()

// question.forEach((val, key) => {
//     console.log(`This is ${key} and it's set to ${val}`)
// });

//returns entries of questions map and then store using destructuring
// for(let [key, value] of question.entries()) {
//    // console.log(`This is ${key} and it's set to ${value}`)
//    if(typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`)
//    }
// }

// const answer = parseInt(prompt('Enter your answer'))
// console.log(question.get(answer === question.get('correct')))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Class

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }

// var john5 = new Person5('John', 1990 , 'teacher')

//ES6

//class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }

//     calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
//     }

//     //making static function
//     static greeting() {
//         console.log('Hey there')
//     }
// }

// var john6 = new Person6('John', 1990 , 'teacher')
// Person6.greeting()

//SUBCLASSES

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }

// var athlete = function(name, yearOfBirth, job, olympicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job)
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     this.olympicGames = olympicGames
//     this.medals = medals
// }
// //to manually set the prototype
// athlete.prototype = Object.create(Person5.prototype)
// athlete.prototype.wonMedal = function() {
//     this.medals++
//     console.log(this.medals)
// }



// var john = new athlete('John', 1990, 'Swimmer', 3, 4) 
// john.calculateAge()
// john.wonMedal()

//ES6

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }

//     calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
//     }

//     //making static function
//     static greeting() {
//         console.log('Hey there')
//     }
// }

// class Athlete extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals){
//         super(name, yearOfBirth, job)
//         this.olympicGames = olympicGames
//         this.medals = medals
//     }
//     wonMedal() {
//         this.medals++
//         console.log(this.medals)
//     }
// }


// let john = new Athlete('John', 1990, 'Swimmer', 3, 10)
// john.wonMedal()
// john.calculateAge()



























































