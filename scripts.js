var cars={
    businessName: "Josh's Rentals",
    economyCars:{total: 80, rented: 0},
    midCars: {total: 100, rented: 0},
    rentMid: function(){
        this.midCars.rented++;
        this.update();
    },
    rentEcon: function(){
        this.economyCars.rented++;
        this.update();
    },
    update: function(){
        document.getElementById('econoCarsAvail').innerHTML = this.economyCars.total -this.economyCars.rented;
        document.getElementById('midCarsAvail').innerHTML = this.midCars.total -this.midCars.rented;
    }
};

window.onload = function(){
    document.getElementById('businessName').innerHTML = cars.businessName;
};
document.getElementById('updateAvail').onclick = function(){
    cars.update();
};
document.getElementById('rentEcono').onclick = function(){
    cars.rentEcon();
};
document.getElementById('rentMid').onclick = function(){
    cars.rentMid();
};