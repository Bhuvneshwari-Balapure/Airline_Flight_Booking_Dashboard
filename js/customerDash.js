function redirectToBooking() {
  window.location.href = "/booking.html";
}

//store all flight data globally
let allFlight = [];
window.onload = display;

async function display() {
  let url = "http://localhost:3000/flightData";
  let mydata = await fetch(url);
  //store the fetched data in a global variable
  allFlight = await mydata.json();
  //render the table with all Flights
  renderTable(allFlight);
}

function renderTable(flights) {
  let table = `<table id="tab"  class="bg-white w-100">
                <tr>
                    <th>Airline ID</th>
                    <th>Flight Number</th>
                    <th>Departure Airport</th>
                    <th>Departure Time</th>
                    <th>Arrival Airport</th>
                    <th>Arrival Time</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>`;

  flights.forEach((key) => {
    table += `
      <tr>
          <td>${key.airline_id}</td>
          <td>${key.flight_number}</td>
          <td>${key.departure_airport}</td>
          <td>${key.departure_time}</td>
          <td>${key.arrival_airport}</td>
          <td>${key.arrival_time}</td>
          <td>${key.duration}</td>
          <td>${key.price}</td>
          <td><button class="book" onclick="redirectToBooking()" type="button">Book Now</button></td>
      </tr>`;
  });

  table += `</table>`;
  document.getElementById("show").innerHTML = table;
}

function search(event) {
  event.preventDefault();
  const departureCity = document.getElementById("departure").value.toLowerCase();
  const arrivalCity = document.getElementById("arrival").value.toLowerCase();

  const filteredFlight = allFlight.filter(
    (flight) =>
      flight.departure_airport.toLowerCase().includes(departureCity) &&
      flight.arrival_airport.toLowerCase().includes(arrivalCity) // Corrected here
  );

  console.log("Filtered Flights: ", filteredFlight); // For debugging
  renderTable(filteredFlight);
}
