var numbers = [1, 2 , 5, 9, 10];

var sorted = numbers.sort(function(a, b){
  return a - b;
})

console.log(sorted);