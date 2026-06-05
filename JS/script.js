//variables

// // var a = 10;
// let b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// data types

// var num = 10;
// var string = "Tharru";
// var undefine;
// var Null = "null";
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt = 123n;
// var symbol = Symbol('li');

// console.log(typeof BigInt);
// console.log(typeof symbol);

// array type

// var arr = [10,20,30,40];
// console.log(typeof arr,arr);
// var obj = {
//     name:"Tharru",
//     dept:["AI&DS","CT"]
// }
// console.log(typeof obj,obj)

// boolean data type

// var a = 10;
// var b = "Tharru";
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// var a = true
// var b = false

// console.log(a&&b)
// console.log(a||b)
// console.log(!a)

// comparison data type

// a = 10;
// b = 10;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

// arithmetic data type

// a = 10;
// b = 20;
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// a *= b;
// console.log(a);
// a /= b;
// console.log(a);
// a %= b;
// console.log(a);
// var a = 20;
// console.log(a++);
// console.log(++a);
// var a = 10;
// console.log(a--);
// console.log(--a);

// a = 1;
// b = 1;
// c = 0;

// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log(result)

// if condition

// var a = 10;
// var b = 20;
// if(true){
//     console.log(`${a} + ${b} = ${a+b}`)
// }

// if (true){
//     a = 10;
//     console.log(a);
// }
// var a = 10;
// var b = 15;
// if(true){
//     console.log(a);
//     let b = 20;
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// if else

// var a = 10;
// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// if...else if...else

// var mark = 35;
// if(mark>=90){
//     console.log("O Grade");
// }
// else if(mark>=70){
//     console.log("A Grade");
// }
// else if(mark>=35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail")
// }

// var a = 10;
// var result = a%2===0 ? "Even" : "Odd";
// console.log(result)

// mark = 90;
// var result = (mark>=90) ? "O Grade":
//              (mark>=70) ? "A Grade":
//              (mark>=35) ? "Pass":
//              "Fail";
// console.log(result)             

// switch

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("Tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Thursday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid");
//     }
// }

// for loop

// for(var i=1;i<=10;i++){
//     console.log(i)
// }

// while loop

// var val = 10246;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/=10);
// }
// console.log(count)

// do while loop

// do{
//     console.log("Do...While")
// }while(false);


// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i)
// }

// function add(a,b){
//     console.log(a + b);
// }
// add(10,20);

// function add(a=5,b=6){
//     console.log(a+b)
// }
// add();

// arrow function

// var demo = () => {
//     console.log(10 + 20)
// }
// demo();

// arrow with parameter
// var demo=(a=1,b=2) => {
//     console.log(a+b)
// }
// demo(10,20)
// demo()
// demo(10)

// spread operator(...)
// var arr=[10,20,30];
// var arr2=[...arr,40,50];
// console.log(arr)
// console.log(arr2)

// destructing operator
// var [m1,m2,m3,m4,m5] = [90,97,98,99,88]
// console.log(m1,m2,m3,m4,m5)

// var {name,mobile,dept,email,isActive} = {
//     name:"Tharru",
//     mobile:9873210654,
//     dept:["CT","AI&DS"],
//     email:"tharru@gmail.com",
//     isActive:true,
// }
// console.log(name,mobile,dept,email,isActive)

// var arr = [10,20,30,40,50];
// for(let index in arr){
//     console.log(index)
// }
// for (let value of arr){
//     console.log(value)
// }

// var obj = {
//     name:"Tharru",
//     mobile:9873210654,
//     dept:["CT","AI&DS"],
// }
// for (let key in obj){
//     console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];
// var result = arr.map((val)=>(val*2));
// console.log(result);
// console.log(arr);

// filter
// var arr=[1,2,3,4,5];
// var result = arr.map((val)=>(val*2));
// console.log(result);
// var even = arr.filter((val)=>val%2===0);
// console.log(even)
// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

// var userName = {
//     name:"Tharru",
//     dept:["CT","AI&DS"],
//     skills:{
//         programming:["JS","JAVA","C"],
//         Database:["SQL"]
//     }
// }
// var user = {
//     ...userName,
//     password:123456789
// }
// console.log(user);