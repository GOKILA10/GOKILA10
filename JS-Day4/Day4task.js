
//for the given JSON iterate over  all loop(for in, for of, for each loop)


//For Loop Condition

let fruitsName =[{"dragonfruit":"china","banana":"india","cherry":"ooty"},
{"peach":"austria","jackfruit":"indonisia","watermelon":"goa"}]
 
  for(let i=0;i<fruitsName.length;i++)
  {
    console.log(fruitsName[i].dragonfruit);
    console.log(fruitsName[i].peach);

  }


  // For in loop condition

  let office =[{"company":"wati","unit":"HR","year":"2022"}]
  for(let i in office)
        {
          console.log(i);
        }


  // For of loop condition
  
  let dress=[{"Brand":"firstcry","Model":"bodysuits", "price":"550"},
  {"Brand":"Ed-ma-mama","Model":"quilts", "price":"2500"}]
      for ( const best of dress)
      {
     console.log(dress);
      }









 
