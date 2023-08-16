let myLeads = [];

let textEl = document.getElementById("text");
let btnEl = document.getElementById("btn");
let btnEl2 = document.getElementById("btn2");
let btnEl3 = document.getElementById("btn3");
let listEl = document.getElementById("list");

let leadStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadStorage);

if (leadStorage) {
    myLeads = leadStorage;

    console.log(myLeads);

    rendercode(myLeads);
}



btnEl2.addEventListener("click", function saveTab() {
    // syntax to get the currnt tab
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

    // });

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url);

        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        rendercode(myLeads);
    });
});

btnEl.addEventListener("click", function input() {
    myLeads.push(textEl.value); //textEl.value is used to get the value from the textbox

    textEl.value = " ";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    rendercode(myLeads);

    console.log(localStorage.getItem("myLeads"));
});

btnEl3.addEventListener("dblclick", function clearstorage() {
    localStorage.clear();

    if (confirm("Do you really want to delete all items")) {
        myLeads = [];
    }

    rendercode(myLeads);
});

function rendercode(lead) {
    let listItems = " ";

    for (let i = 0; i < lead.length; i++) {
        listItems += ` <li> <a  class="link" target="_blank" href="${lead[i]}"/> ${lead[i]}</li>`;
    }
    listEl.innerHTML = listItems;
}
