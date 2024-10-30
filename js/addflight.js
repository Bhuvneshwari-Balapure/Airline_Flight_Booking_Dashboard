document.getElementById("addflight").addEventListener("submit" , flightSave);
async function flightSave(event)
{
    event.preventDefault();

    let airline_id = document.getElementById("airid").value;
    let flight_number = document.getElementById("flightNum").value;
    let departure_airport = document.getElementById("dep").value;
    let departure_time = document.getElementById("deptime").value;
    let arrival_airport = document.getElementById("ariv").value;
    let arrival_time = document.getElementById("arivtime").value;
    let duration = document.getElementById("duration").value;
    let price = document.getElementById("price").value;
    

    let url = "http://localhost:3000/flightData";
    const response = await fetch(url , {
        method : "POST",
        body : JSON.stringify({
            airline_id : airline_id,
            flight_number : flight_number,
            departure_airport : departure_airport,
            departure_time : departure_time,
            arrival_airport : arrival_airport,
            arrival_time : arrival_time,
            duration : duration,
            price : price
        }),
        header : {
            "Content-Type": "application/json",
        },
        
    });
    console.log(response);
    alert("data save!!!");
}