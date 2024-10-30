// -----------Js code for List.html -----------------------
window.onload = display;
async function display() {
  let table = `<table id="tab" width=100% border="2">
                    <tr>
                    
                    <th> airline id</th>
                    <th> flight Number </th>
                    <th> departure City </th>
                    <th> arrival City </th>
                    <th> departure Date  </th>
                    <th> first Name  </th>
                    <th> last Name  </th>
                    </tr>
                    `;
  let url = "http://localhost:3000/bookings";
  let mydata = await fetch(url);
  let data = await mydata.json();
  console.log(data);
  data.forEach((key) => {
    table += `
                    <tr  border="1">

                        <td>${key.airline_id}</td>
                        <td>${key.flightNumber}</td>
                        <td>${key.departureCity}</td>
                        <td>${key.arrivalCity}</td>
                        <td>${key.departureDate}</td>
                        <td>${key.firstName}</td>
                        <td>${key.lastName}</td>
                        
                    
                        </tr>
                    `;
  });
  table += `</table>`;
  document.getElementById("show").innerHTML = table;
}