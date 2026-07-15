
const calculate= function (arr, func){

       const result =[];
     for(let i=0;i<arr.length;i++){
        result.push(func(arr[i], i))
     }

     return result;
}
function add(element,index){
  return element+index;
}

function multiply(element, index){
    return element * index;
}

console.log(calculate([1,2,3,4,5,6], add))
console.log(calculate([1,2,3,4,5,6], multiply))