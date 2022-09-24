// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  
  function f(obj) {
    let nObj = {};
    for (let i = 1; i < obj.length; i++) {
      nObj[i] = obj[i] + 1;
    }
    nObj["5"] = 4;
    return nObj;
  }
  
  // f(obj);
  