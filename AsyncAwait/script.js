//Callback Concept

function hod(name, callback) {
  callback(name);
}

function printName(name) {
  console.log("First Callback Ex. ", name);
}
//Here printName func is passed as an argument in Higher Order Func - hod
hod("Pritesh", printName);







//Let's try two nested callbacks
function hod1(firstName, callback1) {
  callback1(firstName);
  hod2("Ranoliya", printLastName);
  function hod2(lastName, callback2) {
    callback2(lastName);
  }
}

function printFirstName(name) {
  console.log("First Name: ", name);
}

function printLastName(name) {
  console.log("Last Name: ", name);
}

hod1("Pritesh", printFirstName);
