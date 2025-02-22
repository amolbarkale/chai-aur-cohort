//____________________________________________ARRAYS____________________________________________________//

const chaiTypes = ["Chamomile Tea", "Green Tea", "Black Tea", "Ginger Tea"];

chaiTypes.push("Hibiscus Tea");
// console.log("chaiTypes:", chaiTypes);

const index = chaiTypes.indexOf("Hibiscus Tea");
// console.log("index:", index);

if (index !== -1) {
  chaiTypes.splice(index, 1);
}
// console.log("chaiTypes:", chaiTypes);

const check = chaiTypes.forEach(function (chiaiItem, index) {
  //   console.log("chiaiItem:", chiaiItem);
  return "1"; // WRONG: forEach loop does not return anything
});

const moreChai = ["Oolong Tea", "White Tea"];

const combinedChai = chaiTypes.concat(moreChai);
// console.log("combinedChai:", combinedChai);

const addNewChai = [...combinedChai, "Masala Chai"];
// console.log("addNewChai:", addNewChai);

const [firstChai, secondChai] = chaiTypes;
// console.log("firstChai, secondChai:", firstChai, secondChai);

//____________________________________________OBJECTS____________________________________________________//

const chaiFile = {
  name: "masala chai",
  igredients: ["milk", "sugar", "water", "chaiPatti"],
  precautions: {
    isFullGas: false,
    addRawGiner: false,
    waterprops: "half",
    milkprops: "half",
  },
};

const newObj = { ...chaiFile, isLoveAdded: true };
// console.log("newObj:", newObj);
