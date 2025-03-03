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