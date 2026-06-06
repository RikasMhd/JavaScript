sum(2, 3, displayConsole);     //show in console
sum(2, 3, displayPage);     //show in display


function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myh1").textContent=result;
}