// //01- Function Declaration
// function getData() {
//     console.log("Hello From getData!");
// }
// function sum(num1, num2) {
//     console.log(num1 + num2);

// const { use } = require("react");

// }
// //02- Function Expression
// let setData = function () {
//     console.log("Hello From setData!");
// }
// let getNetSalary = function (salary) {
//     console.log(salary - salary * 0.1);
// }
// //02- Arrow Function
// let deleteData = () => {
//     console.log("Hello From deleteData!");
// }
// let getTax = (salary) => {
//     console.log(salary * 0.1);
// }
// //Invoke/Call | () -> Mean Immediate Execution for this function
// getData();//Hello From getData!

// let num1 = 10, num2 = 20;
// sum(num1, num2);//30

// setData();//Hello From setData!

// let salary = 20000;
// getNetSalary(salary);

// deleteData();//Hello From deleteData! 

// getTax(salary);

//-------------------------- --------------------------------- ---------------------------

// //01- Function Declaration 
// function getTax01(salary) {
//     return salary * 0.1;
// }
// function getNetSalary01(salary, tax) {
//     console.log("NetSalary01 = " + (salary - tax));
// }
// let salary01 = 20000;
// let tax01 = getTax01(salary01);
// getNetSalary01(salary01, tax01);

// //02- Function Expression
// let getTax02 = function (salary) {
//     return salary * 0.1;
// }
// let getNetSalary02 = function (salary, tax) {
//     console.log("NetSalary02 = " + (salary - tax));
// }
// let salary02 = 30_000;
// let tax02 = getTax02(salary02);
// getNetSalary02(salary02, tax02);

// //03- Arrow Function
// let getTax03 = (salary) => {
//     return salary * 0.1;
// }
// let getNetSalary03 = (salary, tax) => {
//     console.log("NetSalary03 = " + (salary - tax));
// }
// let salary03 = 40_000;
// let tax03 = getTax02(salary03);
// getNetSalary03(salary03, tax03); 

//-------------------------- --------------------------------- ---------------------------

// function calcNums01(number){
//     let result01 = number*10;
//     let result02 = result01+10;
//     console.log(result02);
// }

// //calcNums();//NAN - mean Not a Number because you don't send argument to this function that take parameter like make that "let number;" => so when print this number=> undefined
// //And inside this function you make processing on this passing parameter so make arithmetic calc on undefined => NAN.

// //Default parameter
// function calcNums02(number = 10){
//     let result01 = number*10;
//     let result02 = result01+10;
//     console.log(result02);
// }

// calcNums02();//110

//-------------------------- --------------------------------- ---------------------------

// //Nested Function
// function outer() {
//     console.log("Hello From Outer!");
//     function inner() {
//         console.log("Hello From Inner!");
//         function deepInner() {
//             console.log("Hello From DeepInner!");
//         }
//         deepInner();
//     }
//     inner();
// }

// outer();// Hello From Outer!
//         // Hello From Inner!
//         // Hello From DeepInner!
// // inner();//it's block scoped - can't accessed outside "outer" function
// // deepInner();//it's block scoped - can't accessed outside "inner" function

//-------------------------- --------------------------------- ---------------------------
//var vs let vs const [In Scope of accessibility] 

//var variable is accessed every where inside the function [function scope ]
//let&const variables are blocked scope
// function test() {
//     var x = 5;
//     if (x === 5) {
//         var a = 10;
//         let b = 15;
//         const c = 20;
//         console.log("from if block(var) a = " + a);//from if block(var) a = 10
//         console.log("from if block(let) b = " + b);//from if block(let) b = 15
//         console.log("from if block(const) c = " + c);//from if block(const) c = 20
//     }
//     console.log("===============================");
//     console.log("outside if block (var) a = " + a);//outside if block (var) a = 10
//     console.log("outside if block (let) b = " + b);
//     console.log("outside if block (const) c = " + c);
// }
// test();

//------------------------- ---------------------------------- -----------------
// //Object

// let user = {
//     name:"Eslam",
//     age:22,
//     country:"Mansoura",
//     login:(id)=>{ //Method
//         console.log("Logged In!\nid = "+id);
//     }
// };

// //dot notation Access
// console.log(user.name);///Eslam

// //bracket notation Access
// console.log(user["age"]);//22

// user["country"] = "alexandria";//override last value of country
// console.log(user.country);//alexandria

// //add new key to the object 
// user.gender = "male";
// console.log(user.gender);//male

// console.log(user);//{name: 'Eslam', age: 22, country: 'alexandria', gender: 'male'}

// //delete specific key from object
// delete user.gender;
// console.log(user);//{name: 'Eslam', age: 22, country: 'alexandria'}


// //Access method inside object
// let id = 5;
// user.login(id);//Logged In!
//                //id = 5

//--------------------------------------------------------------------------------
////Array
// let colors = ["red", "green", "blue", "brown", 1, 5, 4, 7, 8, 5, 6, 4, 7, 8, 5, 2, 6, 8, 5, 2, 5, 2, 5, 8, 5, 9, 8, 7, 8, 5, 8, 89, 4];
// console.log(colors);//['red', 'green', 'blue', 'brown']

// console.log(colors.length);//4 [number of elements inside the array]

// //Access array elements with 0-index
// console.log(colors[0]);//red
// console.log(colors[1]);//green
// console.log(colors[2]);//blue
// console.log(colors[3]);//brown
// console.log(colors[colors.length-1]);//4 [to access last element in the array]

// let colors = ["red", "green", "blue", "brown"];

// //add element at the "end" of array [push] 
// colors.push("yellow");
// console.log(colors);//['red', 'green', 'blue', 'brown', 'yellow']

// //add element at the "start" of array [unshift] 
// colors.unshift("black");
// console.log(colors);//['black', 'red', 'green', 'blue', 'brown', 'yellow']

// //delete element from the "end" of array [pop] 
// colors.pop();
// console.log(colors);//['black', 'red', 'green', 'blue', 'brown']

// //delete element from the "start" of array [shift] 
// colors.shift();
// console.log(colors);//['red', 'green', 'blue', 'brown']




