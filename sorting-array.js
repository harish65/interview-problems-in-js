/**
 * 
 * @param {
* } arr 
* @returns
* sortArry function will sort ASC / DESC Order
*/


function sortArry(arr){
   var temp = null;
   for(i = 0; i <arr.length; i++){
       for(j = i; j<arr.length;j++){
           if(arr[i] < arr[j]){
               temp = arr[j];
               arr[j] = arr[i]
               arr[i] = temp;
           }
           
       }
   }
   
   return arr;
   
}

var arr = [ 2,6,3,1,9,7,10,8,5,4]

console.log(sortArry(arr))


// Expected OutPut [10, 9, 8, 7, 6,5, 4, 3, 2, 1]