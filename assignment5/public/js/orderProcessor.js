//import { createRow } from "./tableWriter";
/*
Add an event handler for the submit event on the form with id "orderForm" in
    the file "order.html.
This event handler must:
1. Prevent submission of the form (which is the default action for the submit
    event on a form).
2. Get the values of the 2 input elements in the form. The value of an input
    element in a form is available as the attribute "value" of the element.
3. Append a new row to the table with the id "orderTable" in the file 
    "order.html." This row must contain the values entered by the user in the 2 input elements.
*/

function createRow(content, isHeader) {
  let row = document.createElement("tr");

  content.forEach((e) => {
    let td = null;
    if (isHeader) {
      td = document.createElement("th");
    } else {
      td = document.createElement("td");
    }
    td.appendChild(document.createTextNode(e));
    row.appendChild(td);
  });

  return row;
}

function formHandle() {
  const formElem = document.getElementById("orderForm");
  formElem.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form submitted");
    let data = new FormData(formElem);
    let table = document.getElementById("orderTable");
    table.appendChild(createRow(data, false));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
  formHandle();
});
