// 상속(확장_extends)
class Vehicle {
    constructor(name, wheel) {
        this.name = name  // this객체 자기 자신
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('운송수단', 4)
console.log(myVehicle);

class Bicycle extends Vehicle {
    constructor(name, wheel) {
      super(name, wheel)  // super 부모의 생성자 Vehicle 의미
    }
}

const myBicycle = new Bicycle('삼천리', 2)
console.log(myBicycle);

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel);
        this.license = license;

    }
}

const myCar = new Car('포르쉐', 4, true);

console.log(myCar);

const babyCar = new Car('보리차', 5, false);
console.log(babyCar);