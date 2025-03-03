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
