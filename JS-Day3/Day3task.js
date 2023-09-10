//print odd numbers in Array using  Arrow functions/IIFE/anonymous functions

//1.Arrow Function:

var oddNumber = (array) => {
    for( var i=0; i<array.length; i++)
    {
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
  }
  

  //2.IIFE Function:

  (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i]);
               } 
          }
    })([1,2,3,4,5,7])

//3.Anonymous Function:

 var odd=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  }
  ([1,2,3,4,5,7])


 //Write code for Sum of all numbers in an array Arrow functions/IIFE/anonymous functions

  //1.Array Function

  sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          
        }

 //2.Anonymous function:

         const sum =  function(array){
            var sum = 0;
            for(var i = 0 ; i< array.length ; i++){
               sum = sum + array[i];
             }
             return sum;
          }

 //3.IIFE:      

      (function(array){
        var sum = 0;
             for(var i = 0 ; i< array.length ; i++){
                sum = sum + array[i];
              }
              return sum;
            })


   // Write program for Return all the prime numbers in an array using arrow function,IIFE,Anonymous function
            
  //1.Arrow Function:

           const primeNumber = (numArray) => {
                numArray = numArray.filter((number) => {
                  for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                  }
                  return true;
                });
                console.log(numArray);
            }

    // 2.IIFE Function:

            (  
                function(numArray){
                   numArray = numArray.filter((number) => {
                     for (var i = 2; i <= Math.sqrt(number); i++) {
                       if (number % i === 0) return false;
                     }
                     return true;
                   });
                   console.log(numArray);
               })([1,2,3,4])
   
    //3.Anonymous Function:

      const PrimeNumber=  function(numArray){
            numArray = numArray.filter((number) => {
              for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
              }
              return true;
            });
            console.log(numArray);
        }


     //Convert all the strings to title caps in a string array using Arrow , IIFE, Anonymous Function

    // Anonymous Function:

         var titllecap = function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
      }

      //IIFE Function:

          (function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
      })("SOFIA IS GOOD");
            
      