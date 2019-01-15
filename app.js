class Garage{
    constructor(name, location, founded, employees){
        this.name = name;
        this.location = location;
        this.founded = founded;
        this.employees = employees;
    }

    carBuilder(){
        const newCar = new Car(prompt("Make"),prompt("Model"),prompt("Year"),prompt("Colour"));
        console.log(newCar);
    }
}

function Car(make, model, year, colour){
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
}

const gar = new Garage("Going Spare", "West Sussex", 1987, 6);
console.log(gar);
gar.carBuilder();