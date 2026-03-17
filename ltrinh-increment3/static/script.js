//Variable Declarations and Console Output
var x = 5
var y = 7
var z = x + y
console.log(z)

var A = "Hello " 
var B = "world!"
var C = A + B
console.log(C)

//create a basic function
function sumnPrint(x1, x2){
    var result = x1 + x2
    console.log(result)   
}

sumnPrint(x, y);
sumnPrint(A, B);

//add a conditional statement
if (C.length > z) {
    console.log(C);
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}

//arrays + loops(alerts)
var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

//findTheBanana(L1);
//findTheBanana(L2);
//findTheBananaForEach(L1);
//findTheBananaForEach(L2);

// Time-Based Greeting (DOM Manipulation)

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var el = document.getElementById("greeting");
    if (!el) return;

    var message;

    if (x < 5 || x >= 20) {
        message = "Good Night";
    } else if (x < 12) {
        message = "Good Morning";
    } else if (x < 18) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }

    el.innerHTML = message;
}

if (window.location.pathname.includes("index.html")) {
    greeting(hour);
}

function addYear() {
    var year = new Date().getFullYear();
    var el = document.getElementById("copyYear");
    if (el) {
        el.innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
    }
}