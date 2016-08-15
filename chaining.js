var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers = integers.sort(function(a, b){return b-a}).filter(function(num){return num < 20}).map(function(num){return (num*1.5)-1}).reduce(function(a,b){return a + b;});
console.log(integers);
