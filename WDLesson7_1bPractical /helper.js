//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.

function card(cardinfo){

  let build = document.createElement("div");
  build.className = "fitted card";

  build.innerHTML = `
    <h3>Summons #: ${cardinfo.summons_number}</h3>
    <p>Violation: ${cardinfo.violation}</p>
    <p>Plate ID: ${cardinfo.plate}</p>
    <p>Issue Date: ${cardinfo.issue_date}</p>
  `;

  return build;
} 