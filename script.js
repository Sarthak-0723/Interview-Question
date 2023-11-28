// 1. What are data types in JavaScript?

// I. Primetive Data Type = String, Number, Boolean, Null, Undefined, Symbol
// II. Non-Primetive or Refrence Data Type = Object and Arrays



// 2. Diffrence in Null and undefined?

var num;
// console.log(num); // Output undefined

var num2 = null;
// console.log(num2); // Output null

// Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.

// Undefined: It means the value does not exist in the compiler. It is the global object.



// 3. What is hoisting in JavaScript?

// console.log(a);
// sar()
function sar() {
  console.log("Hellow World!");
}

var a = 7; //Decleration hoisted on top but initilzation not

// let and const are exeption for this function



// 4. What are closures in JavaScript?

function init() {
  var name = "Sarthak";// name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
// init();




// 5. What is a callback function in JavaScript?

/*
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
*/

function sar(callback) {
  setTimeout(() => {
    console.log("Hellow World!");
  }, 1000);
}
function sr() {
  console.log("Hellow Worldddddd!");
}
// sar();
// sr();

// &

function sar(callback) {
  console.log("Hellow World!");
}
function sr() {
  console.log("Hellow Worldddddd!");
}
// sar();
// sr();




// 6. What are promises in JavaScript?

/*
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code
*/


/*
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { console.log('Hellow world'); },
    function (error) { console.log('Hellow world not'); }
);

// console.log(myPromise)

*/


// 7. What is the purpose of the setTimeout() function in Javascript?

//  function: It is the reference to a function that is going to run after a given time.
//  time: The milliseconds after which the given function will execute.
//  Return value: It returns a timer Id which can be useful later in case when you want to clear that countdown timer for function.

// console.log("Alert in 3 Seconds");

function alertin3sec() {
  alert("Your welcome in SR world!");
}

// setTimeout(alertin3sec, 3000);




// 8. How can you check if an array includes a certain value?

const arr = [1, 2, 3, 4, 5];
/*

if (arr.includes(3)) {
    console.log("Array includes 3!")
}
else{
    console.log("Array not include 3")
}

*/


// 9. How can you remove duplicates in an array?

var arrr = [1, 1, 1, 2, 23, 4, 4, 5, 6, 8, 8];

var newarrr = [...new Set(arrr)];

// console.log(newarrr);




// 10. What is the purpose of async and await in JavaScript?

// Async simply allows us to write promises-based code as if it was
// synchronous and it checks that we are not breaking the execution thread.

/*
const getData = async () => {
  let data = "Hello World";
  return data;
}

getData().then(data => console.log(data));

// Await function is used to wait for the promise. It could be used within the async block only.
// It makes the code wait until the promise returns a result.

const getData2 = async () => {
  let y = await "Hello World";
  return y;
}

console.log(1);
getData2();
console.log(2);
*/

// let's Make one project on this function type

async function whther() {
  let punewether = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 1000);
  })

  let delhiwether = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 deg");
    }, 3000);
  })

  console.log("Pune's wether is loding....");
  let punew = await punewether
  console.log("Pune's wether is :" + punew);

  console.log("Delhi's wether is loding....");
  let delhiw = await delhiwether
  console.log("Delhi's wether is :" + delhiw);
}
// console.log("welcome to wether");

const cherry = async () => {
  console.log("Hellow i am SR");
}

const main = async () => {
  s = await whther()
  h = await cherry()
}

// main();