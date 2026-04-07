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
        message = "GOOD NIGHT";
    } else if (x < 12) {
        message = "GOOD MORNING";
    } else if (x < 18) {
        message = "GOOD AFTERNOON";
    } else {
        message = "GOOD EVENING";
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

function loadLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    console.log("Leaflet did not load.");
    return;
  }

  if (mapElement._leaflet_id) return;

  const museumLat = 40.4443;
  const museumLng = -79.9436;

  const map = L.map("map").setView([museumLat, museumLng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([museumLat, museumLng])
    .addTo(map)
    .bindPopup("Museum Location")
    .openPopup();
}

document.addEventListener("DOMContentLoaded", function () {
  loadLeafletMap();
});




function toggleMenu() {
    const navbar = document.querySelector('.nav_bar');
    navbar.classList.toggle('responsive');
}


function ActiveNav() {
    const navLinks = document.querySelectorAll('.nav_bar a');
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage) currentPage = "index.html"; 

    navLinks.forEach(link => {
        let linkPage = link.getAttribute('href').split("/").pop(); 
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', ActiveNav);







document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".ticket-qty");
    
    inputs.forEach(input => {
        input.addEventListener("input", updateSummary);
        input.addEventListener("change", updateSummary);
    });
});

function updateSummary() {
    const qtyInputs = document.querySelectorAll("input.ticket-qty[type='number']");
    const orderSummary = document.getElementById("orderSummary");
    const totalPriceEl = document.getElementById("totalPrice");
    const dateInput = document.getElementById("visitDate");
    const paymentDateDisplay = document.getElementById("selectedDate");

    let total = 0;
    let listItems = "";

    if (dateInput && dateInput.value) {
        paymentDateDisplay.value = "Selected Date: " + dateInput.value;
    }


    qtyInputs.forEach(input => {
        const qty = parseInt(input.value) || 0;
        const type = input.getAttribute("data-type");
        const price = parseInt(input.getAttribute("data-price"));

        if (qty > 0) {
            const lineTotal = qty * price;
            total += lineTotal;
            listItems += `<li style="display:flex; justify-content:space-between; margin-bottom:10px;">
                            <span>${type} x ${qty}</span>
                            <span>$${lineTotal}</span>
                          </li>`;
        }
    });
    orderSummary.innerHTML = listItems || "<li>No tickets selected</li>";
    totalPriceEl.innerText = total;
}

function openPayment() {
    const dateInput = document.getElementById('visitDate');
    const displayInput = document.getElementById('selectedDate');
    const total = document.getElementById("totalPrice").innerText;

    if (!dateInput || !dateInput.value) {
        alert("Please select a visit date first!");
        return;
    }

    if (total === "0") {
        alert("Please add at least one ticket to your cart.");
        return;
    }

    if (displayInput) {
        displayInput.value = "Selected Date: " + dateInput.value;
    }

    $('#step1-content').removeClass('show').slideUp();
    $('#step2-content').addClass('show').slideDown();
    
    const step2 = document.getElementById('step2-content');
    if (step2) {
        step2.scrollIntoView({ behavior: 'smooth' });
    }
}

function submitPurchase() {
    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const total = document.getElementById("totalPrice").innerText;
    const date = document.getElementById("visitDate").value;

    if (!name || !email) {
        alert("Please enter your name and email to complete the order.");
        return;
    }

    alert(`Success! \n\nThank you, ${name}. \nYour order for ${date} has been confirmed. \nTotal: $${total}`);

    document.getElementById("payment-form").reset();
    document.querySelectorAll(".ticket-qty").forEach(input => input.value = 0);
    updateSummary();
    $('#step2-content').removeClass('show').slideUp();
    $('#step1-content').addClass('show').slideDown();
}

function showSupportForm(label, price) {
    const formContainer = $('#support-form-container');
    $('#supportType').val(label);
    
    if (label === 'Donation') {
        $('#form-title').text("One-Time Donation");
        $('#donation-amount-area').show();
    } else {
        $('#form-title').text(`${label} Sign-Up ($${price})`);
        $('#donation-amount-area').hide();
    }

    formContainer.fadeIn().addClass('show');
    formContainer[0].scrollIntoView({ behavior: 'smooth' });
}

function submitSupport() {
    const name = $('#supName').val();
    const type = $('#supportType').val();
    const email = $('#supEmail').val();

    if (!name || !email || !$('#supPhone').val()) {
        alert("Please fill out all fields.");
        return;
    }

    alert(`Thank you, ${name}!\nYour ${type} payment was successful.\nA receipt has been sent to ${email}.`);
    
    $('#active-support-form')[0].reset();
    $('#support-form-container').fadeOut();
}

function toggleAccordion(id) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('show');
    });
    document.getElementById(id).classList.add('show');
}

function openPayment() {
    const dateValue = document.getElementById('visitDate').value;
    const total = parseFloat(document.getElementById('totalPrice').innerText);

    if (!dateValue) {
        alert("Please select a visit date.");
        return;
    }
    if (total <= 0) {
        alert("Please select at least one ticket.");
        return;
    }

    document.getElementById('selectedDate').value = dateValue;
    toggleAccordion('step2-content');
}
$(document).ready(function() {
    $('.ticket-qty').on('input', function() {
        updateSummary();
    });
});

function updateSummary() {
    let total = 0;
    let summaryHtml = "";
    let hasItems = false;

    $('.ticket-qty').each(function() {
        const qty = parseInt($(this).val());
        const price = parseFloat($(this).data('price'));
        const type = $(this).data('type');

        if (qty > 0) {
            hasItems = true;
            const subtotal = qty * price;
            total += subtotal;
            summaryHtml += `<li>${qty}x ${type} Ticket(s) — $${subtotal}</li>`;
        }
    });

    if (!hasItems) {
        summaryHtml = "<li>No tickets selected</li>";
    }

    $('#orderSummary').html(summaryHtml);
    $('#totalPrice').text(total);
}

function submitPurchase() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('cardNumber').value;
    const exp = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !email || !card || !exp || !cvv) {
        alert("Please fill out all contact and payment fields.");
        return;
    }

    if (card.length < 16) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }

    alert("Thank you for your purchase, " + name + "! Your tickets have been sent to " + email + ".");
    
    window.location.href = "../index.html";
}

function addYear() {
    const d = new Date();
    document.getElementById("copyYear").innerHTML = "&copy; " + d.getFullYear() + " MonoMuse Museum. All rights reserved.";
}

function toggleMenu() {
    var x = document.querySelector(".nav_bar");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } else {
        x.className = "nav_bar";
    }
}