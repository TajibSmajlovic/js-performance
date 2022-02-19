// const a = { a: 1 };
// const b = { b: 1 };

// const x = Object.assign({}, a);
// const y = Object.assign({}, a);

// console.log(%HaveSameMap(a, b));
// console.log(%HaveSameMap(x, y));

const makeAPoint = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  return new Point(1, 2);
};

const a = makeAPoint();
const b = makeAPoint();
console.log(%HaveSameMap(a, b));
