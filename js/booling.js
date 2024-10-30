document.getElementById("addflight").addEventListener("submit" , flightSave);
async function flightSave(event)
{
    event.preventDefault();

    let airline_id = document.getElementById("airline_id").value;
    let flightNumber = document.getElementById("flightNumber").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivalCity = document.getElementById("arrivalCity").value;
    let departureDate = document.getElementById("departureDate").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    

    let url = "http://localhost:3000/bookings";
    const response = await fetch(url , {
        method : "POST",
        body : JSON.stringify({
            airline_id : airline_id,
            flightNumber : flightNumber,
            departureCity : departureCity,
            arrivalCity : arrivalCity,
            departureDate : departureDate,
            firstName : firstName,
            lastName : lastName
          
        }),
        header : {
            "Content-Type": "application/json",
        },
        
    });
    console.log(response);
    alert("data save!!!");
}