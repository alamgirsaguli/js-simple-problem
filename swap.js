var first = 5;
var second = 7;
console.log(first,second);

// first approach
// var tem = first;
// first = second;
// second = tem;
// console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second);


// -----end---20-2
