const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const result=document.getElementById("result");
let age=0;

mySubmit.onclick=function(){
    age=myText.ariaValueMax;
    age=Number(age);
    if(age>=100){
        result.textContent="You are TOO OLD to enter this site";
    }
    else if(age==0){
        result.textContent="You Can't enter this site.You Just Born";
    }
    else if(age>=18){
        result.textContent="You are enter this site.";
    }
    else if(age<0){
        result.textContent="Your age Can't be below 0";
    }
    else{
        result.textContent="You must be 18+ to enter this site.";
    }
}