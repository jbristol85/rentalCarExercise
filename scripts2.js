

var cars={
    businessName: "Josh's Rentals",
    economyCars:{
        total: 80, 
        rented: 0, 
        price: 30,
        models:[{
            name: "Corolla",
            category: "Economy",
            quantity: 30,
            rented: 0,
            price: 30
        },
        {
            name: "Civic",
            category: "Economy",
            quantity: 30,
            rented: 0,
            price: 32
        }]
    },
    midCars: {
        total: 100,
        rented: 0, 
        price: 50,
        models:[{
            name: "Camry",
            quantity: 30,
            price: 50
        },
        {
            name: "Accord",
            quantity: 30,
            price: 55
        }]
    },
    rentMid: function(){
        this.midCars.rented++;
        this.displayMidCarsInfo();
    },
    rentEcon: function(){
        this.economyCars.rented++;
        this.displayEconoCarsInfo();
    },
    displayEconoCarsInfo: function(){
    document.getElementById('econoCarsAvail').innerHTML = this.economyCars.total -this.economyCars.rented + " cars";
    document.getElementById('econoCarsPrice').innerHTML =  "$ "+this.economyCars.price+" per day";
    }, 
    displayMidCarsInfo: function(){
        document.getElementById('midCarsAvail').innerHTML = this.midCars.total -this.midCars.rented + " cars";
        document.getElementById('midCarsPrice').innerHTML = "$ "+this.midCars.price+ " per day";
    },
    removeMidCarsInfo:function(){
         document.getElementById('midCarsAvail').innerHTML = "";
        document.getElementById('midCarsPrice').innerHTML = "";
    },
    removeEconoCarsInfo: function(){
        document.getElementById('econoCarsAvail').innerHTML ="";
    document.getElementById('econoCarsAvail').innerHTML =  "";
    },
    displayInfo: function(){
   
    }
};

var renters  = [{
    
}];

    document.getElementById("rentCar").onclick = function(){
            var rental = document.getElementById("carType").value;
            var customersName = document.getElementById("fullName").value;
            console.log(rental, customersName);
            };  
            

     function addEconoCarsMenu (){
         cars.economyCars.models.forEach(function (element){
             var x= document.getElementById("carType");
             var option = document.createElement("option");
             option.text = element.name;
             x.add(option);
            
     });
     }
      function addMidCarsMenu (){
         cars.midCars.models.forEach(function (element){
             var x= document.getElementById("carType");
             var option = document.createElement("option");
             option.text = element.name;
             x.add(option);
            //  console.log(element);
     });
      }
      
      function checkAvailability(){
          switch
      }
     
     
addEconoCarsMenu();
addMidCarsMenu();


document.getElementById('businessName').innerHTML = cars.businessName;



// var renters ={
//     addRenter: function(rental, customersName){
//         this.customers.push(
          
//             if(this.customers.rented == "economyCar"){
//                 cars.rentEcon();
//             }else if(this.customers.rented === "midSizedCar"){
//                 cars.rentMid();
//             };
//     },
//   customers:[],
// };

//  document.getElementById("carType").onchange = function(){
//             var rental = document.getElementById("carType").value;
//             var customersName = document.getElementById("fullName").value;
//             console.log(rental, customersName);
//             }
            
           
    // if(rental == "economyCar"){
    //             cars.rentEcon();
    //             cars.displayEconoCarsInfo();
    //         }else if (rental === "midSizedCar"){
    //             cars.rentMid();
    //             cars.displayMidCarsInfo();
    
    

       


// cars.displayEconoCarsInfo();

// cars.displayMidCarsInfo();
    