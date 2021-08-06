let full_time_hr = 8;
let part_time_hr = 4;
let wageperhr = 20;
let hrs = 0;
let checkfor = Math.floor((Math.random() *10 ) % 2);
switch (checkfor) {
    case 1: //for full time
        hrs = full_time_hr;
        console.log("Working for Full Time -");
        break;
    case 0: //for part time
        hrs = part_time_hr;
        console.log("Working for Part Time -");
        break;

    default:
        break;
}
var cal = hrs * wageperhr;
console.log("Wage is: "+ cal);