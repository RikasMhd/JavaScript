//setTimeout(function(){window.alert("Hello World")}, 3000);


// setTimeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

let timeoutId; // Global variable to store the "ID" of the timer

function startTimer() {
    // Starts a 3-second (3000ms) timer
    // The browser returns a unique ID which we store in timeoutId
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer() {
    // Uses the ID stored above to tell the browser: "Cancel that specific timer!"
    clearTimeout(timeoutId);
    console.log("CLEARED");
}