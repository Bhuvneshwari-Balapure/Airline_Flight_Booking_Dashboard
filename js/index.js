function CustomerLogin(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    if (name === "ayushi" && pass === "ayu123") {
        window.location.href = "/customerDash.html";
    } else {
        alert("Incorrect Name or Password!");
    }
}


function show(){
    window.location.href = "/index.html";
}
