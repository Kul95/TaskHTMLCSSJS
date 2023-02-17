// console.log("Hello Javascript")
// console.log(78);

// function myFun(){
//     let carname="Valvo";
//     console.log(carname);
// }
// myFun();

// let car='Honda';
// function myFun(){
//     console.log(car);
// }
// myFun();

// car="Audi";
// var car;
// console.log(car);

// let num=76;
// if(num<20){
//     console.log("Good");
// }else{
//     console.log("Not good");
// }

// let num = 23;
// if (num >10 && num < 20) {
//   console.log("One")
// } else if (num < 20 && num < 30) {
//   console.log("Two")
// } else if (num < 30 && num < 40) {
//   console.log("Three")
// } else {
//   console.log("error!")
// }


// let num=4;
// switch(num){
//     case 1:console.log("Sunday");break;
//     case 2:console.log("Monday");break;
//     case 3:console.log("Tuesday");break;
//     case 4:console.log("Wednesday");break;
//     case 5:console.log("Thursday");break;
//     case 6:console.log("Friday");break;
//     case 7:console.log("Saturday");break;
//     default:console.log("Wrong number");
// }



// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
// //       day = "Thursday";
// //       break;
// //     case 5:
// //       day = "Friday";
// //       break;
// //     case 6:
// //       day = "Saturday";
// //   }
// //   console.log(day);



// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text.x);


// let x=5;
// for(let i=0;i<=x;i++){
//     console.log(i+" ");
// }
// console.log(x);

// const car={
//     name:"Audi",
//     color:"White",
//     price:2.1,
//     city:"Japan"
// };
// for(let brand in car){
//     console.log(brand);
// }


// let arr=[1,2,3,4,5];
// for(let x in arr){
//     console.log(x);
// }


// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value) {
//   console.log(value);
// }

// const arr=[1,2,3,4,5];
// arr.forEach(myFun);
// function myFun(num){
// console.log(num)
// }-

// let arr=["Audi","BMW","Ferari"];
// for(let x of arr){
//     console.log(x);
// }

// let i=5;
// while (i < 10) {
//     console.log(i);
//     i++;
//   }


// let i=1;
// do {
//     console.log(i);
//     i++;
//   }
//   while (i < 10);


// const name = "W3Schools";

// for (const x of name) {
//   // code block to be executed
//   console.log(x);
// }

// const letters = ["a","b","c"];

// for (const x of letters) {
//   console.log(x);
// }




// const letters = new Set(["a","b","c"]);

// for (const x of letters) {
//   console.log(x);
// }

// const x=new Set();
// x.add("Car");
// x.add("bike");
// x.add("Bus");
// console.log(x);


// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits);


// let x=()=>{
//     console.log("Hello");
// };
// console.log(typeof(x));


// let x={
//     name:"ak",
//     num:45
// }
// // console.log(typeof(x));

// // let x="Java";
// // let z=Number("Kuldeep");
// // let y=new Number(x);
// // console.log(typeof(x));
// // console.log(typeof(y));
// // console.log(typeof(z));


// // let x=String(4);
// // console.log(typeof(x));


// // let d=new Date();
// // console.log(typeof(d));

// // console.log(4 & 4);

// // var x=0;
// // function foo(){
// //     x++;
// //     this.x=x;
// //     return foo;

// // }
// // var bar =new new foo;
// // console.log(bar.x);

// var a=6;
// function test(){
//     var a=7;
//     function again(){
//         var a=8;
//         console.log(a);
//     }
//     again();
//     console.log(a);
// }
// test()
// console.log(a)

// var str=new String("This is beautiful string");
// var index=str.localeCompare("utiful string");
// console.log("Result:"+index)
//;

// function myFun(msg="Kuldeep"){
//     console.log(msg);
// }
// myFun();

// function myFun(...arr){
//     console.log(arr);
// }
// myFun(1,2,3,4,5);

// let arr=`Kuldeep 
// Sharma`;
// // let arr=[1,2,3,4,5];
// for(let x of arr){
//     console.log(x);
// }


// let str=`Kuldeep
// Kumar
// Sharma`;
// console.log(str);



//Spread Operator........
// var book=[1,2,3,4,5,6];
// var book1[name,name1,name2] = book;
// console.log(name);



// function myFun(a,b){
//     return a*b;
// }
// console.log(myFun(6,2));



// function myFun(a){
//  return a*a;
// }
// // console.log(myFun(5));

// // class Car {
// //     constructor(name, year) {
// //       this.name = name;
// //       this.year = year;
// //       this.sayHi()

// //     }
// //   }
// //   let y = new Car("Ford", 2014);
// // let z = new Car("Audi", 2019);
// // let x= new Car("Audi",2020);
// // console.log(x);
// // console.log(y);
// // console.log(z);



// let obj={
//     name:"Kuldeep",
//     age:23,
//     address:{
//         city:"Lucknow",
//         address:"xyz",
//     }
// }
// let x=JSON.stringify(obj)
// let y=JSON.parse(x);
// console.log(y);
// console.log(x);


// // class student{
// //     constructor(id,name, subject){
// //         this.id=id;
// //         this.name=name;
// //         this.subject=subject;
// //     }
// // }
// // let x=new student(12,"Kiran","Science");
// // let y=new student(13,"Bhushan","History");
// // let z=new student(14,"Roy","Political");
// // console.log(x);
// // console.log(y);
// // console.log(z);



// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
//   let x=new Car("Joy",2022);
//   console.log(x);

// let mul=(a,b)=>a*b;
// console.log(mul(2,8));


// let x=function(){
//     return "Hi I am a student";
// }
// console.log(x);



// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());

// const student={
//     name:"Kuldeep",
//     age:23,
//     stream:function(){
//         return this.name+" "+this.age;
//     }
// };
// console.log(student.stream());


// function myFun(msg="Hello"){
//     console.log(msg);
// }
// myFun();


// let str="I am a software Engineer";
// let x=str.replace("software","Doctor");
// console.log(x);
// console.log(str);

// console.log(5&9);

// var str="Kuldeep";
// console.log(str.charAt(3));

// let str="Hello \
// JavaScript \
// Tpoint";
// console.log(str);

// let obj={
//     name:"Kuldeep",
//     age:25
// }
// console.log(obj);


// let str="    Kuldeep   Sharma  ";
// console.log(str);

// function myFun(){
//     let arr=["Kuldeep","Joy","Karan"];
// }
// console.log(myFun);



// var arr=[1,2,3,4,5];
// var x=arr.forEach(myFun);
// function myFun(value){
//     console.log("Hello");
// }
// console.log(x);



// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers2);

//Map function......
// let arr=[1,3,5,7,9];
// let arr1=arr.map(myFun);
// function myFun(value){
//     return value*4;
// }
// console.log(arr1);


//Filter Function.....
// let arr=[1,2,3,4,5,6];
// let arr1=arr.filter(myFun);
// function myFun(value){
//     return value>4;
// }
// console.log(arr1);


// let arr=[1,2,3,4,5];
// let sum1=arr.reduce(myFun);
// function myFun(total,value){
//     return total+value;
// }
// console.log(sum1);



// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduceRight(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum);



// var arr=[1,2,3,4,5,6];
// var arr1=arr.every(myFun);
// function myFun(value){
//     return value>8;
// }
// console.log(arr1);

// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.some(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(allOver18);
  

// let arr=[1,2,3,4,5,6];
// let arr1=arr.indexOf(5);
// console.log(arr1);

// let arr=["Apple","Banana","Papaya","Kiwi"];
// let arr1=arr.lastIndexOf("Banana");
// console.log(arr1);



// let obj=JSON.stringify({name:"Joy",age:24});
// console.log(obj);


// let d=new Date();
// let k=d.toJSON();
// console.log(k);


// const cars1 = ["Saab", "Volvo", "BMW"];
// const cars2 = ["Saab", "Volvo", ..."BMW"];
// console.log(cars2);

// const numbers = [23,55,21,87,56];
// let maxValue = Math.max(...numbers);
// console.log(maxValue);


// const cars = ["BMW", "Volvo", "Mini"];
// // let text = "";

// for (let x of cars) {
// //   text += x + " ";
// console.log(x);
// }


// let str="Kuldeepkumar";
// for(let x in str){
//     console.log(x);
// }

// class Car{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// let x=new Car("BMW",34);
// console.log(x); 

// console.log("Hi");
// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// setInterval(() => {
//     console.log("John");
// }, 2000);

// function myFun(mes=20){
//     console.log(mse);
// }
// myFun();

// function myFunction(x, y = 10) {
//     return x + y;
//   }
//   console.log(myFunction(5)); 


// function myFun(x,y=5){
// return x+y;
// }
// console.log(myFun(20));


// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);


// function sum(...args){
//     let sum=0;
// for(let x of args)
//     sum=sum+x;
//     return sum;
// };
// let y=sum(1,2,3,4,5);
// console.log(y);


// function sum(...args){
//     let sum=0;
//     for(let i of args)
//     sum=sum+i;
//     return sum;
// }
// let x=sum(2,2,2,2,2);
// console.log(x);


// let x=isNaN("Hello"); 
// console.log(x);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
// //   document.getElementById("demo").innerHTML += x;
// console.log(x);
// }


// let x = 5;
// let z = x ** 2;
// console.log(z);


// let x=Math.pow(4,3);
// console.log(x);

// let x=["Hello","Joy","Hi"];

// console.log(x.includes("Hoooo"));


// // async function myDisplay() {
// //     let myPromise = new Promise(function(myResolve, myReject) {
// //       setTimeout(function() { myResolve("I love You !!"); }, 3000);
// //     });
// //     // document.getElementById("demo").innerHTML = await myPromise;
// //     console.log(myPromise);
// //   }
  
// //   myDisplay();

// // let p=new Promise((reslove,reject)=>{
// // let age=19;
// // if(age>18){
// //     console.log(reslove("Sucess"));
// // }else{
// //     console.log(reject("Fail"));
// // }
// //     p.then(reslove=>{
// //     console.log("hello");
// // }).catch(rej=>{
// //     console.log("Not yet");
// // })
// });
// console.log(p);



//Sum of the element in array

// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<=arr.length;i++){
//     sum=sum+i;
// }
// console.log(sum);


// let arr=[1,2,3,4,5];
// let arr1=arr.reverse();
// console.log(arr1);

// let arr=[1,2,3,4,5];
// let avg=0;
// let sum=0;
// for(let i=0;i<=arr.length;i++){
//     sum=sum+i;
//     avg=sum/i;
// }
// console.log(avg);



// let arr=[1,2,3,4,5];
// let arr1=[6,7,8,9];
// let final=[...arr,...arr1,10];
// console.log(final);


// let arr=[1,2,3,4,5,6,7];
// for(let i=0;i<=arr.length;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }

// let arr=[1,,3,4,5,2,1];
// let arr1=arr.sort();
// console.log(arr1);


// let arr=[1,,3,4,5,2,1];
// let arr1=arr.sort();
// for(let i=arr;i>=arr1.length;i--){
//     console.log(i);
// }


// // let arr=[1,8,3,4,5,2,1];
// // arr.push(56);
// // console.log(arr);


// // let arr=[1,8,3,4,5,2,1];
// //  arr.pop();
// //  arr.pop();
// //   console.log(arr);


// // let arr=[1,2,1,3,2,4,3];
// // let arr1=[...new Set(arr)];
// // console.log(arr1);

// for(let i=1;i<=100;i++){
//     if(i%3==0)
//         console.log("Fizz");
    
//     else if(i%5==0)
//         console.log("buzz");
    
//     else if(i%15==0)
//         console.log("fizzbuzz")
    
// }


// setTimeout(()=>{
//     console.log("Hello")
// },5000);

let arr=["Audi","BMW","RR"];
 arr1[one,two,three]=arr;
 console.log(arr[2]);




