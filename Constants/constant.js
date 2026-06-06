let pi=3.14;
let radius;
let c;

/*radius=window.prompt("Enter Radius :");
radius=Number(radius);
c=2*pi*radius;
console.log(c)*/

document.getElementById("submit").onclick=function(){
    radius=document.getElementById("mytext").value;
    radius=Number(radius);
    c=2*pi*radius;
    document.getElementById("myh3").textContent=c+" cm";
}