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


$(document).ready(function() {
    var path = window.location.pathname.split("/").pop();
    if (path == '' || path == 'index.html') { path = 'index.html'; }

    $('nav a').each(function() {
        if ($(this).attr('href').includes(path)) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $(this).hide();
    });

    $("#readLess").click(function() {
        $("#longIntro").hide();
        $(this).hide();
        $("#readMore").show();
    });
});

function toggleAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}


function submitPurchase() {
    alert("Redirecting to payment system.");
}

function openPayment(date) {
    console.log("Button Clicked. Date selected:", date);
    const dateInput = document.getElementById('selectedDate');
    if (dateInput) {
        dateInput.value = "Selected Date: " + date;
    }
    $('#step1-content').removeClass('show').hide();
    $('#step2-content').addClass('show').css('display', 'block');
    const step2 = document.getElementById('step2-content');
    if (step2) {
        step2.scrollIntoView({ behavior: 'smooth' });
    }
}
