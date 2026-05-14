//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, leftPanel, mapObj; //global variables

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  //Challenge 5: Get the data using the API link and analyze it
  
  let response = await fetch(link);
  data = await response.json();
  
  let leftPanel = get("leftPanel");
  let build = "";

  //Challenge 6: Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let crash = data[i];

     build += `
      <div class="card">
        <h3>${crash.borough || "Unknown Borough"}</h3>
        <p><strong>Date:</strong> ${crash.crash_date}</p>
        <p><strong>Time:</strong> ${crash.crash_time}</p>
        <p><strong>Location:</strong> ${crash.on_street_name || "Unknown Street"}</p>
        <p><strong>Injured:</strong> ${crash.number_of_persons_injured || 0}</p>
        <p><strong>Killed:</strong> ${crash.number_of_persons_killed || 0}</p>
    `;

    // Add map button only if latitude and longitude exist
    if(crash.latitude && crash.longitude){
      build += `
        <button onclick="showMap(${crash.latitude}, ${crash.longitude})">
          Show Map
        </button>
      `;
    }

    build += `</div>`;
    
    
  }
  //Challenge 7: Display cards in the div with id "leftPanel"
leftPanel.innerHTML = build;
  
}

//Challenge 8: Create a function filterByBoro() that retrieves the borough from the user via text input, filters the data and generates cards for this subset of the data.
function filterByBoro(){
  

  let borough = get("boroInput").value.toUpperCase();

  let filtered = data.filter(crash =>
    crash.borough && crash.borough.toUpperCase() === borough
  );

  let build = "";
  
  for(let i = 0; i < filtered.length; i++){

    let crash = filtered[i];

    build += `
      <div class="card">
        <h3>${crash.borough}</h3>
        <p><strong>Date:</strong> ${crash.crash_date}</p>
        <p><strong>Time:</strong> ${crash.crash_time}</p>
        <p><strong>Location:</strong> ${crash.on_street_name || "Unknown Street"}</p>
        <p><strong>Injured:</strong> ${crash.number_of_persons_injured || 0}</p>
        <p><strong>Killed:</strong> ${crash.number_of_persons_killed || 0}</p>
    `;

    if(crash.latitude && crash.longitude){
      build += `
        <button onclick="showMap(${crash.latitude}, ${crash.longitude})">
          Show Map
        </button>
      `;
    }

    build += `</div>`;
  }

  leftPanel.innerHTML = build;

}
