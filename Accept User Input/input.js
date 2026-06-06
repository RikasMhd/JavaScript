/*let username;
username=window.prompt("What's Your username?");

console.log(username);  //it asks username via alert then console prints your username*/


let user;
document.getElementById("submit").onclick=function(){
    user=document.getElementById("name").value;
    console.log(user);
}

document.getElementById("submit").onclick=function(){
    user=document.getElementById("name").value;
    document.getElementById("myh").textcontent=`Hello ${user}`;
}