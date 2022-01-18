let prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("First Div Loaded");
  }, 2000);
});
prom1
  .then(function (result) {
    document.getElementById("div1").innerText = result;
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Second Div Loaded");
      }, 2000);
    });
  })
  .then(function (result) {
    document.getElementById("div2").innerText = result;
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Third Div Loaded");
      }, 2000);
    });
  })
  .then(function (result) {
    document.getElementById("div3").innerText = result;
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Fourth Div Loaded");
      }, 2000);
    });
  })
  .then(function (result) {
    document.getElementById("div4").innerText = result;
  });

let prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ div: "div5", content: "Fifth Div Loaded" });
  }, 2000);
});

let prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ div: "div6", content: "Sixth Div Loaded" });
  }, 2000);
});

let prom4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ div: "div7", content: "Seventh Div Loaded" });
  }, 2000);
});

let prom5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ div: "div8", content: "Eighth Div Loaded" });
  }, 8000);
});

Promise.all([prom2,prom3,prom4,prom5])
  .then(function (result) {
    result.forEach((element) => {
      document.getElementById(element.div).innerText = element.content;
    });
  })
  .catch(function (error) {
    console.log("Cant render promise all divs" + error);
  });
