"use strict"

console.log("Script is connected")

var IMGForm = document.forms["IMGForm"]

function validateForm() {
    var check = true
    var nameREGEX = /^[a-zA-Z]+$/
    if (!nameREGEX.test(IMGForm["name"].value)) {
        document.getElementById("nameError").innerHTML =
            "Name should contain only character not digits"
    } else {
        document.getElementById("nameError").innerHTML = ""
    }
    if (IMGForm["password"].value !== IMGForm["confirmPassword"].value) {
        document.getElementById("confirmError").innerHTML =
            "Password and confirm Password should be same"
        check = false
    } else {
        document.getElementById("confirmError").innerHTML = ""
    }
    var phoneREGEX = /^(91|0)?[9768]\d{9}$/
    console.log(phoneREGEX.test(IMGForm["phoneNumber"].value))
    if (!phoneREGEX.test(IMGForm["phoneNumber"].value)) {
        document.getElementById("phoneError").innerHTML =
            "Phone number is not corect"
        check = false
    } else {
        document.getElementById("phoneError").innerHTML = ""
    }
    var emailREGEX = /iitr\.ac\.in/
    if (!emailREGEX.test(IMGForm["email"].value)) {
        document.getElementById("emailError").innerHTML =
            "IITR email should be used"
        check = false
    } else {
        document.getElementById("emailError").innerHTML = ""
    }
    return check
}
