const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is Complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});
//..............................................................................................................

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

//.............................................................................................................

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Aman", email: "ak@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//............................................................................................................

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Aman Kumar", Password: "12344asd" });
    } else {
      reject("Error:- Something Went wrong.");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally The Promise Either resolve or reject.");
  });

//........................................................................................................

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Aditya", email: "ak@gmail.com" });
    } else {
      reject("Error:- JS Went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
//............................................................................................................

// async function getAllUSers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("errror:- ", error);
//   }
// }

// getAllUSers();

// ..........................................................................................................

fetch("https://api.github.com/users/amanKumarweb19")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error:- ", error);
  });
