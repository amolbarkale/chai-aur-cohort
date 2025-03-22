const arr = [1, 2, 3, 4, 5];

//_______________________________________________forEach________________________________________________________//
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}
arr.myForEach((item, index) => {});
//_______________________________________________map________________________________________________________//
// const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const op = arr.myMap((ele, index) => ele * 3);
//_______________________________________________resuce________________________________________________________//
// const arr = [1, 2, 3, 4, 5];

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue = undefined) {
    let acc = initialValue || this[0];

    const startIndex = initialValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  };
}
const check = arr.myReduce((acc, curr) => acc + curr, 10);
console.log("check:", check);
