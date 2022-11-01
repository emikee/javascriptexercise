// //exercise 1 - following day
// // Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
// const day = prompt("What day of the week is it:");
// switch(day){
//     case "monday":
//         console.log('tuesday');
//         break;
//     case "tuesday":
//         console.log('wednesday');
//         break;
//     case "wednesday":
//         console.log('thursday');
//         break;
//     case "thursday":
//         console.log('friday');
//         break;
//     case "friday":
//         console.log('saturday');
//         break;
//     case "saturday":
//         console.log('sunday');
//         break;
//     case "sunday":
//         console.log('monday');
//         break;
//     }

// //exercise 2 - number comparison
// //Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// const num1 = Number(prompt("Enter a number:"));
// const num2 = Number(prompt("Enter another number:"));
// if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
// } else if (num1 < num2) {
//     console.log(`${num1} is less than ${num2}`);
// } else {
//     console.log(`${num1} is equal to ${num2}`);
// }

// //exercise 3 - number of days in a month
// //Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
// const monthNum = Number(prompt("Enter a month number (1-12):"));
// if (monthNum >= 1 && monthNum <= 12) {
//     const thirtyone = [1,3,5,7,8,10,12];
//     if (monthNum == thirtyone){
//         console.log("there are 31 days");
//     } else {
//         console.log("there are 30 days");
//     }
// } else {
//     console.log("You entered an invalid month");
// }

// //exercise 4 - following second
// //Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
// let hour = Number(prompt('Enter an hour value'));
// let minutes = Number(prompt('Enter a minute value'));
// let seconds = Number(prompt('Enter a second value'));
// if (hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59 && seconds >=0 && seconds <= 59){
//     seconds++;
//     if (seconds === 60){
//     seconds = 0;
//     minutes++;
//     if (minutes === 60){
//     minutes = 0;
//     hour++;
//     if (hour === 24){
//     hour = 0;
//     }
//     }
//     }
//     console.log (`In a second the time will be ${hour}h${minutes}m${seconds}s`);
//     }
//     else {
//     console.log("Enter correct information");
//     }