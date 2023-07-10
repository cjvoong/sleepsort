const my_array = [15,1,3,5,9,2,2,3,11]
var sorted_array = []
let results = my_array.map(async(x) => { setTimeout(function(){sorted_array.push(x)},x*1000);});
let max_sleep = my_array.reduce((a,b) => Math.max(a,b),-1)+1;
console.log("Sleeping for " + max_sleep*1000);
setTimeout(function(){console.log(sorted_array)},max_sleep*1000);
