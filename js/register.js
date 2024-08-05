    
const button = document.getElementById('creaCompte');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Le bouton a été cliqué !');

    let email = document.forms["inscrireForm"]["email"].value;
    let name = document.forms["inscrireForm"]["nom"].value;
    let password = document.forms["inscrireForm"]["password"].value;
    let confirmPassword = document.forms["inscrireForm"]["confirmPassword"].value;
    let nameRegex = /^[a-zA-Z ]{3,30}$/;
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (nom == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("Name must contain only letters and be between 3 and 30 characters long");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;

});