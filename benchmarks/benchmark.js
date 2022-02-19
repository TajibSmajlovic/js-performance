const { performance } = require("perf_hooks");

// SETUP 🏁

let iterations = 1e6;

const a = 1;
const b = 2;

const add = (x, y) => x + y;
const square = (x) => x * x;
const addWithSquare = (x, y) => square(x) + square(y); // equivalent to x*x + y*y

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const test = () => {
  const add = (point) => point.x + point.y;

  // class Point {
  //   constructor(x, y) {
  //     this.x = x;
  //     this.y = y;
  //   }
  // }

  const point = new Point(10, 20);
  add(point);
};

// %NeverOptimizeFunction(add); // -> node --allow-natives-syntax
// node --trace-opt --trace-deopt

// 🔚 SETUP

performance.mark("start");

// EXERCISE 💪

while (iterations--) {
  // 1
  // if (iterations % 2 === 0) {
  //   add(a, b);
  // } else {
  //   // add(a, b);
  //   add("a", "b");
  // }

  // 2
  // // const point = new Point(2, 4, 6);
  // // point.x = undefined;
  // // delete point.x;

  // // point.y = undefined;
  // // delete point.y;

  // // point.z = undefined;
  // delete point.z;

  // JSON.stringify(point);

  // 3
  // test();

  // 4
  addWithSquare(iterations, iterations + 1);
}

// 🔚 EXERCISE

performance.mark("end");

performance.measure("My Special Benchmark", "start", "end");

const [measure] = performance.getEntriesByName("My Special Benchmark");
console.log(measure);
