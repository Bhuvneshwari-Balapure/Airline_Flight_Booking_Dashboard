document.getElementById("saveedit").addEventListener("click", finalUpdate);

let uid = null;

async function editDisplay(arg) {
    try {
        let url = "http://localhost:3000/bookings";
        let mydata = await fetch(url);
        let data = await mydata.json();

        uid = arg; // Assuming arg is the ID of the booking
        let a = data.find((e) => e.id === uid);

        if (!a) {
            console.error(`No booking found with id: ${uid}`);
            return;
        }

        // Populate form fields with booking data
        document.getElementById("airline_id").value = a.airline_id;
        document.getElementById("flightNumber").value = a.flightNumber;
        document.getElementById("departureCity").value = a.departureCity;
        document.getElementById("arrivalCity").value = a.arrivalCity;
        document.getElementById("departureDate").value = a.departureDate;
        document.getElementById("firstName").value = a.firstName;
        document.getElementById("lastName").value = a.lastName;
        document.getElementById("editForm").style.display = "block";
        document.querySelector(".flight").style.filter = "blur(2px)";
    } catch (error) {
        console.error('Error fetching booking data:', error);
    }
}

async function finalUpdate() {
    let obj = {
        airline_id: document.getElementById("airline_id").value,
        flightNumber: document.getElementById("flightNumber").value,
        departureCity: document.getElementById("departureCity").value,
        arrivalCity: document.getElementById("arrivalCity").value,
        departureDate: document.getElementById("departureDate").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
    };

    try {
        const response = await fetch(`http://localhost:3000/bookings/${uid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        display(); // Refresh the booking list
        document.getElementById("editForm").style.display = "none"; // Hide the edit form
    } catch (error) {
        console.error('Error updating booking:', error);
    }
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
                            <a href="#" onclick="editDisplay('${key.id}')">
                            <i class="fa-solid fa-pen-to-square fa-lg" style="color: #3609be;"></i> 
                            </a>
                        </td>
                    </tr>`;
    });

    table += `</table>`;
    document.getElementById("show").innerHTML = table;
}
