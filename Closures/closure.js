// closure = A function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function.
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular


//Ex:1
let count = 0;

function increment(){
    count++;
    console.log(`Count increased to ${count}`);
}

increment(); // Count increased to 1
increment(); // Count increased to 2  
increment(); // Count increased to 3
increment(); // Count increased to 4
increment(); // Count increased to 5

console.log("-----------------------------");
//Ex:2
function createCounter(){
    let count1 = 0;

    function increment(){
        count1++;
        console.log(`Count increased to ${count1}`);
    }

    function getCount(){
        return count1;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment(); // Count increased to 1
counter.increment(); // Count increased to 2
counter.increment(); // Count increased to 3

console.log(`The current count is ${counter.getCount()}`);

console.log("-----------------------------");
//Ex:3
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);  // +5pts
game.increaseScore(6);  // +6pts
game.decreaseScore(3);  // -3pts
console.log(`The final score is ${game.getScore()}pts`);