function checkTruthyValue(input) {
  if (input) return console.log("truthy value");

  return console.log("falsy value");
}

// checkTruthyValue(null);
// checkTruthyValue(undefined);
// checkTruthyValue("");
// checkTruthyValue(0);
// checkTruthyValue([]);
// checkTruthyValue(1);

//_______________________________________________________________________________________________________//

// find most active user

const userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 32 },
  { user: "Charlie", activityCount: 77 },
];

const mostActiveUser = userActivity.reduce((accumulator, current) => {
  if (current.activityCount > accumulator.activityCount) accumulator = current;

  return accumulator;
});

// console.log("mostActiveUser:", mostActiveUser);
