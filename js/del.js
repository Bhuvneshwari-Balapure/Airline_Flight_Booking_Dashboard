


async function delDisplay(id) {
    let url = `http://localhost:3000/bookings/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then((data) => {
      alert("Record Deleted");
    });
  }













window.onload = display;

async function display() {
    let table = `<table id="tab" width=100% border="2">
                    <tr>
                        <th> id</th>
                        <th> airline id</th>
                        <th> flight Number </th>
                        <th> departure City </th>
                        <th> arrival City </th>
                        <th> departure Date  </th>
                        <th> first Name  </th>
                        <th> last Name  </th>
                        <th> Update Details</th>
                    </tr>`;

    let url = "http://localhost:3000/bookings";
    let mydata = await fetch(url);
    let data = await mydata.json();

    data.forEach((key) => {
        table += `
                    <tr border="1">
                        <td>${key.id}</td>
                        <td>${key.airline_id}</td>
                        <td>${key.flightNumber}</td>
                        <td>${key.departureCity}</td>
                        <td>${key.arrivalCity}</td>
                        <td>${key.departureDate}</td>
                        <td>${key.firstName}</td>
                        <td>${key.lastName}</td>
                        <td> 
                            <a href="#" onclick="delDisplay('${key.id}')">
                            <i class="fa-solid fa-trash-can fa-lg" style="color: #032359;"></i>                        </td>
                    </tr>`;
    });

    table += `</table>`;
    document.getElementById("show").innerHTML = table;
}
