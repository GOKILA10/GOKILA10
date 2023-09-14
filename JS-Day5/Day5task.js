// write a class to calculate uber price.


class Uber {
    constructor(carName, carModel, carSeater,amount) {
        this.carName=carName;
        this.carModel=carModel;
        this.carSeater=carSeater;
        this.amount=amount;
    }
}
var ride1=new Uber("suzuki", "sedan", "5-Seater", 1500);
var ride2=new Uber("kwid", "sportz", "5-Seater", 2000);
console.log(ride1);
console.log(ride2);

      


//write a person class to hold all the details

  class person{

    constructor(first,last,age,mailId,contact){

        this.first=first;
        this.last=last;
        this.age=age;
        this.mailId=mailId;
        this.contact = contact;
    }
  }
  const mine = new person("navilan","iniyan",13,"abc@gmail.com",3453453456);
  const mine1 = new person("mary","tamilan",45,"efg@gmail.com",1234567);

  console.log(mine);
  console.log(mine1);



  // typescript-oops/blob/master/Practice/Movie.md

 // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

  class movie{

    constructor(title,studio,PG){

        this.title=title;
        this.studio=studio;
        this.PG= PG;
    }
  }
  const fav = new movie("jawan","lyka production",4.5);
  const fav1 = new movie("Don","sunpictures",3.5);

  console.log(fav);
  console.log(fav1);

  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

  class movie1{

    constructor(title,studio,rating='PG'){

        this.title=title;
        this.studio=studio; 
        this.rating = 'PG';

    }
  }
  const review = new movie1("jawan","lyka production",4.5);
  const review1 = new movie1("Don","sunpictures");

  console.log(review);
  console.log(review1);


 // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

 
 class movie2{

    constructor(title,studio,PG){

        this.title=title;
        this.studio=studio; 
        this.PG = PG;

    }
  }
  const rating1 = new movie2("Casino Royale","Eon Productions","PG13");
    console.log(rating1);

  //  c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

      
   class Tamilmovie{

    constructor(title,studio,PG){

       this.title=title;
     this.studio=studio; 
       this.PG = 'PG';
       getPG() 
       {
      return (` the name of the movie is ${Tamilmovie.title} with rating ${Tamilmovie.PG}`)
       }

    }
   }
    const boxoffice = new Tamilmovie("Doctor","Sk Productions",'PG');
   console.log(boxoffice);
   console.log(Tamilmovie.getPG());
