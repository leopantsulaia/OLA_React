function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getCarInfo = () => {
    return `${this.make} ${this.model} released in ${this.year}`;
    //`Tesla Model S released in 2015`
    //`Tesla`, `Model S`, `2015`
  };
  this.owners = [this];

  this.addOwner = (oneParameter) => {
    this.owners.push(oneParameter);
  };
  // this.removeOwner = () => {
  //   this.owners = this.owners.splice(0, this.owners.length);
  // };
  this.removeOwner = function(name) {
    for (let i = 0; i < this.owners.length; i++) {
      if (this.owners[i].name === name) {
        this.owners.splice(i,  this.owners.length-1);
        return;
      }
    }
  }
  this.getOwnersCount = () => this.owners.length;

  //8
  this.getOwnerNames = () => {
    return this.owners.map((owner) => owner.fullName);
  };

  //9
  this.getFullInfo = () => {
    //// Tesla Model S from 2015. 2 person owns this car. These are - Daniel Barbakadze, Elon Musk.
    //////map ???????????????????
    const ownerNames = this.getOwnerNames().join(', ');
    return `${this.make} ${this.model} from ${this.year}. ${this.owners.length} person owns this car. There are ${ownerNames} ${ownerNames}`;
  };
}

function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars;

  this.fullName = () => {
    return `${this.name} ${this.surname}`;
  };
  this.countCars = () => {
    return this.cars.length;
  };

  //7
  this.buysCar = (oneParameter) => {
    // return this.cars.push(oneParameter)
    this.cars.push(oneParameter);
    oneParameter.addOwner(this);
  };
  this.sellsCar = (car) => {
    const index = this.cars.indexOf(car);
    if (index > -1) {
      this.cars.splice(index, 1);
      car.removeOwner(this);
    }
  };

  this.getAllCarsInfo = () => {
    if (this.cars.length === 0) {
      return `${this.fullName()} doesn't own any cars.`;
    }
    const carInfoList = this.cars.map((car) => car.getCarInfo()).join(', ');
    return `${this.fullName()} owns these cars: ${carInfoList}.`;
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
///////////////C H E C K//////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

let daniel916 = new Person('Daniel', 'Barbakadze', 21, 'M', []);
let ilona = new Person('Elon', 'Musk', 30, 'M');
let duti_picoti = new Car('BMW', '525', '1999');
let stodevianosto = new Car('Mercedes', 'E190', 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
