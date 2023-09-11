var request = new XMLHttpRequest();

//console.log(request);
request.open('GET',' https://restcountries.com/v3.1/all');
request.send();
request.onload = function(){ 

    //console.log("page loaded")-optional
    var data = JSON.parse(request.response)
       console.log(data);


       for(i=0;i<data.length;i++){

              console.log(data[i].area);
              console.log(data[88].area);
              console.log(data[i].name['common']);
              
       }

}
