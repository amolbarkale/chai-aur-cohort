function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  });
}
wait(10)
  .then(() => console.log("then:", then))
  .catch((err) => console.log("err:", err))
  .finally(() => console.log("DONE"));

Promise;

// As soon as you create a Promise object, provide an executor function (callback).

// The executor function has a resolve and a reject.

// When resolve is called: The promise is fulfilled, and

// All .then functions are executed.

// When reject is called: The promise is rejected, and

// All catch functions are called.

// finally is executed every time.
