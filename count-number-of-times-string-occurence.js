function countAlphabetInString(alphabet , str){
    var i = 0;
    var counter =  {'a' : 0};
    var al = null;
    while (str[i] !== '') {
        if(typeof(str[i]) != 'undefined')
           {
               if(str[i] == alphabet){
                   counter = counter+1;
                   return counter;
               }
               
               
           }
      i++;
    }
}

var str = 'RAMANKUMAR';
console.log(countAlphabetInString('R' , str))