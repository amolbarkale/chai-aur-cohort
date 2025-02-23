// What is the differenct between prototype and __proto__ ?

// Answer: https://stackoverflow.com/questions/9959727/what-is-the-difference-between-prototype-and-proto

// try it in the browser inspect
function Person(name) {
  this.name = name;
}

Person.prototype.age = function () {
  return "dob";
};

const person1 = new Person("29th");
const person2 = new Person("17th");
// console.log("person1:", person1.__proto__);
// console.log("person1:", Object.getPrototypeOf(person1));
//_______________________________________________________________________________________________________//

function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function () {
  return this.batteryLevel + 20 > 100 ? 100 : this.batteryLevel + 20;
};

const newRobot = new Robot("Robo1", 50);
console.log("newRobot:", newRobot.charge());
