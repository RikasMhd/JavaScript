const prices=[5,10,30,25,15,20];
const total=prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);
function  sum(accumulator,element){     //45,5---->return 50
    return accumulator+element;
}


//Ex:2
// .reduce() = reduce the elements of an array
// to a single value

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum); // 95
console.log(minimum); // 50

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}