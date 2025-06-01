// //01- Function Declaration
// function getData() {
//     console.log("Hello From getData!");
// }
// function sum(num1, num2) {
//     console.log(num1 + num2);

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
function test() {
    var x = 5;
    if (x === 5) {
        var a = 10;
        let b = 15;
        const c = 20;
        console.log("from if block(var) a = " + a);//from if block(var) a = 10
        console.log("from if block(let) b = " + b);//from if block(let) b = 15
        console.log("from if block(const) c = " + c);//from if block(const) c = 20
    }
    console.log("===============================");
    console.log("outside if block (var) a = " + a);//outside if block (var) a = 10
    console.log("outside if block (let) b = " + b);
    console.log("outside if block (const) c = " + c);
}
test();