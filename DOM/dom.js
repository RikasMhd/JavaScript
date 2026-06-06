// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

const username = "Rikas";   //If we doenst put any name that means the user is a "guest"
const welcomeMsg = document.getElementById("welcome-msg");

// Using a ternary operator to decide the display text
welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);