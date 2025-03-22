let globalVar = "I am global";

function modifiedGlobal() {
  let scopedVar = "I am scoped";
  globalVar = "I am modified";
}
// modifiedGlobal();
//_______________________________________________________________________________________________________//

let person1 = {
  personName: "Amol",

  greet: function () {
    console.log(`Hello ${this.personName}`);
  },
};

let person2 = {
  personName: "Geeta",
};

person1.greet.call(person2);
