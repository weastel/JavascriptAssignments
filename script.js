"use strict";

console.log("Script is connected");

var IMGForm = document.forms["IMGForm"];

function validateForm() {
  if (IMGForm["password"].value !== IMGForm["confirmPassword"].value) {
    alert("Password and confirm Password should be same");
    return false;
  }
  var phoneREGEX = /^(91|0)?[9768]\d{9}$/;
  console.log(honeREGEX.test(IMGForm["phoneNumber"].value));
  if (phoneREGEX.test(IMGForm["phoneNumber"].value)) {
    alert("Phone number is not corect");
    return false;
  }
}
