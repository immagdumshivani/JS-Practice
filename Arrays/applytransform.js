/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
       return result         
};
fn = function constant() { return 42; }
fn = function plusI(n, i) { return n + i; }
fn = function plusone(n) { return n + 1; }