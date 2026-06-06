
const date=new Date();
console.log(date);      //current date time

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

console.log("-------------");

const date1=new Date("2023-12-30");
const date2=new Date("2023-12-31");

if (date2>date1){
    console.log("HAPPY NEW YEAR!!");
}
else{
    console.log("NOT Happy New Year!!");
}
