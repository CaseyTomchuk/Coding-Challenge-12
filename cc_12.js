// NOTE: There's a short period of time between the first couple commits because I started progress on this in another file because I was having issues with executing and launching the code
// Task 1: Business Dashboard – DOM Element Selection and Creation

const dashboardItem = document.getElementById("dashboard"); // dashboardItem will refer to the div object with the dashboard ID 
const dashboardQuery = document.querySelector("#dashboard");

const revCard = document.createElement("div"); // initializing revCard as a <div>
revCard.setAttribute("class", "metric-card"); // class will be metric-card
revCard.setAttribute("id", "revenueCard"); // id will be revenueCard

revCard.innerHTML = // this will be the initial html content of the revenue card 
    `<h2>Revenue</h2>
    <p> $0 </p>`;

dashboardItem.appendChild(revCard); // revenue card will be added to the dashboard <div>

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

// These next couple steps are just a repeat of Task 1

const profitCard = document.createElement("div"); 
const expensesCard = document.createElement("div");

profitCard.setAttribute("class", "metric-card");
profitCard.setAttribute("id", "profitCard");
expensesCard.setAttribute("class", "metric-card");
expensesCard.setAttribute("id", "expensesCard");

profitCard.innerHTML = `<h2>Profit</h2>
<p> $0 </p>`;

expensesCard.innerHTML = `<h2>Expenses</h2>
<p> $0 </p>`;

dashboardItem.appendChild(profitCard); // appending our new items
dashboardItem.appendChild(expensesCard); 

const metricCardSelector = document.querySelectorAll(".metric-card"); // selecting all items with the metric-card class

let nodeArray = Array.from(metricCardSelector); // converting the resulting NodeList into an array.

nodeArray.forEach((item) => { // (item) represents an individual metric card, for each metric card we are running:
    const paragraph = item.querySelector("p"); // selecting only <p> to have its text updated so I dont ruin the existing formatting or headers
    paragraph.textContent = paragraph.textContent + " - Updated"; // updating the <p> text content of all metric cards
    item.style.backgroundColor = 'lightblue'; // set background color of the cards to light blue
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items

function addInventoryItem(productName) {
    const inventoryListItem = document.getElementById("inventoryList");
    const newItem = document.createElement("li"); // creating a list element and assigning it to newItem
    newItem.textContent = productName; // the text of this item should be the productName parameter
    newItem.setAttribute("class", "product-item"); // the class for newItem is product-item
        
    newItem.addEventListener("click", function() { // on click we are preparing to run a function that removes the clicked item
    removeInventoryItem(this);
    }); 
        
    inventoryListItem.appendChild(newItem); // the newItem is added to the list 
};
        
function removeInventoryItem(item) { // function that runs on click when we want to remove an item
    const inventoryListItem = document.getElementById("inventoryList");
    inventoryListItem.removeChild(item); // remove the item from the list
};

// Task 4: Business Customer Section – Handling Event Bubbling

const customerSec = document.getElementById("customerSection");
const customers = ["Customer 1", "Customer 2", "Customer 3"]; // initializing the customer cards in the HTML doc

customers.forEach(customer => {
    const card = document.createElement("div"); // creates new div element 
    card.className = "customer-card"; // sets the class for the new div element to customer card
    card.textContent = customer; // text content of the card should be the customer parameter
    customerSec.appendChild(card); // a card is created for each item in the customers array, and we are appending it to the customerSection <div>
});

customerSec.addEventListener("click", function () { // attaching click event listener to the container
    console.log("Parent container clicked");
});

const customerCards = document.querySelectorAll(".customer-card"); 
customerCards.forEach(card => { // attaching click event listener for each customer card
    card.addEventListener("click", function (event) {
        console.log("Customer card clicked");
        event.stopPropagation(); // if this is removed, it will output both on click events (parent and cutomer card)
    });
});