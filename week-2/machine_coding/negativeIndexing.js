const person = {
  name: "Amol",
  age: 32,
  password: function () {
    console.log("function:", this.name);
  },
};

// this is a deep copy
const newPersonn = JSON.stringify(person);
new Object(newPersonn);

const newPerson = new Proxy(person, {
  get(target, prop) {
    if (prop === "password") throw new Error("Access denied");

    return target[prop];
  },
});

//_______________________________________________________________________________________________________//

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function negativeIndex([...arr]) to prevent shallow copy of original array
function negativeIndex(arr) {
  const target = new Proxy(arr, {
    // getter: to get the value
    get(target, prop) {
      const index = Number(prop);

      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    // setter: to set the value
    set(target, prop, value) {
      const index = Number(prop);

      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
  return target;
}

const proxyArray = negativeIndex(arr);

proxyArray[-1] = 100;

// console.log("proxyArray:", proxyArray);
// console.log("arr[-1]:", arr[-1]);
//_______________________________________________________________________________________________________//
