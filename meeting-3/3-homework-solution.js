class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }
  owners = [];

  addOwner = (oneParameter) => {
    this.owners.push(oneParameter);
  };

  removeOwner = function (name) {
    for (let i = 0; i < this.owners.length; i++) {
      if (this.owners[i].name === name) {
        this.owners.splice(i, this.owners.length - 1);
        return;
      }
    }
  };
  getOwnersCount = () => this.owners.length;

  getOwnerNames() {
    return this.owners.map((owner) => owner.fullName);
  }

  getFullInfo() {
    const ownerNames = this.getOwnerNames().join(', ');
    return `${this.make} ${this.model} from ${this.year}. ${this.owners.length} person owns this car. There are ${ownerNames} ${ownerNames}`;
  }
  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  }
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }
  fullName() {
    return `${this.name} ${this.surname}`;
  }
  countCars() {
    return this.cars.length;
  }

  //7
  buysCar = (oneParameter) => {
    this.cars.push(oneParameter);
    oneParameter.addOwner(this);
  };
  sellsCar = (car) => {
    const index = this.cars.indexOf(car);
    if (index > -1) {
      this.cars.splice(index, 1);
      car.removeOwner(this);
    }
  };
  getAllCarsInfo = () => {
    if (this.cars.length === 0) {
      return `${this.fullName()} doesn't own any cars.`;
    }
    const carInfoList = this.cars.map((car) => `${car.make} ${car.model}`).join(', ');
    return `${this.fullName()} owns these cars: ${carInfoList}.`;
  };
}

//////////////////////////////////////////
/// TEST /////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
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
