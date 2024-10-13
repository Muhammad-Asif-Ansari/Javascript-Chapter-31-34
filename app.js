// Question no 01:
// var today = new Date();
// console.log(today);


//  Question no 02:
// var monthNames = ["January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"];
// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// console.log(monthNames[currentMonthIndex]);

//  Question no 03:
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// console.log(dayNames[currentDayIndex]);


// Question no 04:
// var today = new Date();
// var day = today.getDay();
// if (day == 0 || day == 6) {
//     document.write("It’s Fun day");

// }
// else {
//     document.write("It’s not Fun day");
// }

// Question no 05:
// var  today = new Date();
// var dayOfMonth = today.getDay();
// if(dayOfMonth < 16) {
//     console.log("First fifteen days of the month");
// }
//     else {
//         console.log("Last days of the month");
//     }



// // Question no 06:
// var today = new Date();
// console.log("Current Date:",  today);
// var milliseconds = today.getTime();
// var secondsSinceEpoch = today.milliseconds;
// console.log("Elapsed milliseconds since January 1,1970", milliseconds);
// var minutes = Math.floor(milliseconds / (1000 * 60));
// console.log("Elapsed minutes since January 1, 1970: " + minutes);

// // Question no 07:

// var today = new Date();
// var hours = today.getHours();
// if (hours < 12) {
//     console.log("Its AM");
// } else {
//     console.log("Its PM");
// }

// Question no 08:

// var  lastDate = new Date("31 Dec, 2020");
// console.log(lastDate);

//  Question no 09:

// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();
// var timeDiff = Math.abs(today.getTime() - ramadanStart.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24
// ));
// console.log(diffDays);

// Question no 10:

// var referenceDate = new Date(); 
// var startOf2015 = new Date("January 1, 2015 00:00:00");
// var timeDifference = referenceDate - startOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// console.log("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

//Question no  11:
// var today = new Date();
// var hours = today.getHours();
// today.setHours(hours + 1);
// console.log(today);


//Question no  12:
//  var currentDate = new Date();
//  var pastDate = new Date();
//  pastDate.setFullYear(currentDate.getFullYear() - 100);
//  alert("The date 100 years back is: " + pastDate);


// Question no 13:
// var age = prompt("Enter your age");
// var birthYear = new Date().getFullYear() - age;
// alert("Your birth year is: " + birthYear);

















