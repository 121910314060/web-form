function calculateAge(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  
  function validateForm() {
    var name = document.forms["userForm"]["name"].value;
    var email = document.forms["userForm"]["email"].value;
    var age = parseInt(document.forms["userForm"]["age"].value);
    var dob = new Date(document.forms["userForm"]["dob"].value);
    var currentAge = calculateAge(dob);
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errors = [];
  
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }
  
    if (isNaN(age) || age < 1) {
      errors.push("Age must be a positive integer.");
    }
  
    if (currentAge !== age) {
      errors.push("Age does not match the date of birth.");
    }
  
    if (errors.length > 0) {
      document.getElementById("errorMessages").innerHTML = errors.join("<br>");
      return false;
    }
  
    return true;
  }