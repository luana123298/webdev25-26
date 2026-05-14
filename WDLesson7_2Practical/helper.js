// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
 const mapFrame = `
    <iframe
      width="100%"
      height="300"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed">
    </iframe>
  `;

  get("map").innerHTML = mapFrame;
}






// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
   return `
    <div class="card">
    <h3>${info.name}</h3>
    <p>${info.description}</p>
    <button onclick="showMap(${info.lat}, ${info.lon})">
        View Map
    </button>
    </div>
  `;
}
  