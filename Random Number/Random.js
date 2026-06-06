/*
const min=50;
const max=100;

let num1=Math.floor(Math.random()*5);
let num2=Math.floor(Math.random()*(max-min))+min;

console.log(num1," ",num2);
*/

const roll=document.getElementById("roll");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");

const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

roll.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;

}