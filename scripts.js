var cars = {
    businessName: "Josh's Rentals",
    carIndex: 0,
    models: [{
            name: "Corolla",
            category: "Economy",
            quantity: 24,
            rented: 21,
            price: 30
        },
        {
            name: "Civic",
            category: "Economy",
            quantity: 30,
            rented: 17,
            price: 32
        },
        {
            name: "Camry",
            category: "Mid-Sized",
            quantity: 22,
            rented: 8,
            price: 50
        },
        {
            name: "Accord",
            category: "Mid-Sized",
            quantity: 14,
            rented: 12,
            price: 55
        }
    ],

       displayEconoCarsInfo: function() {
        
        cars.models.forEach(function(element) {
            var para = document.createElement("P");
            var t = document.createTextNode(element.name);
            if (element.category === "Economy") {
                para.appendChild(t);
                document.getElementById("economyList").appendChild(para);
            } else if (element.category === "Mid-Sized") {
                para.appendChild(t);
                document.getElementById("midsizedList").appendChild(para);
            }
        });
    }
};

var renters = {
    customers: []

};

document.getElementById("rentCar").onclick = function() {
    var rental = document.getElementById("carType").value;
    var customersName = document.getElementById("fullName").value;
    console.log(customersName, rental);
    if (rental != "selection" && customersName != "" && cars.models[cars.carIndex].quantity - cars.models[cars.carIndex].rented > 0) {
        renters.customers.push({
            customer: customersName,
            carRented: rental
        });
        cars.models[cars.carIndex].rented++;
        document.getElementById("formSection").reset();
        document.getElementById("quantityPrice").innerHTML = customersName + " rented the " + rental;
        postRenters(customersName, rental);
    }
};

function addCarsMenu() {
    cars.models.forEach(function(element) {
        // if(element.quantity - element.rented > 0){
        var x = document.getElementById("carType");
        var option = document.createElement("option");
        option.text = element.name;
        x.add(option);
        // }
    });
}

function addQuantityPrice() {
    var carMenu = document.getElementById("carType");
    carMenu.onchange = function() {
        cars.carIndex = this.selectedIndex - 1;
        var selectedCar = this.selectedIndex - 1;
        var available = (cars.models[selectedCar].quantity - cars.models[selectedCar].rented);
        if (available === 0) {
            document.getElementById("quantityPrice").innerHTML = "I'm sorry, we don't have any " + cars.models[selectedCar].name + "'s available currently.";
        } else {
            document.getElementById("quantityPrice").innerHTML = "We have " + available + " " + cars.models[selectedCar].name + "'s available for $" + cars.models[selectedCar].price + "/day.";
        }
    };
}
function postRenters(customersName, rental){
        var parag = document.createElement("P");
        var c = document.createTextNode(customersName + " is renting the " + rental);
        parag.appendChild(c);
        document.getElementById("currentRenters").appendChild(parag);
    }

cars.displayEconoCarsInfo();
addQuantityPrice();
addCarsMenu();



document.getElementById('businessName').innerHTML = cars.businessName;
