// 2. Conversion of Object to Array

// input: { a: 1, b: 2, c: 3 }
// output: [{ a: 1 }, { b: 2 }, { c: 3 }];

const obj = { a: 1, b: 2, c: 3 };
const arr = [];

for (const key in obj) {
  arr.push({ [key]: obj[key] });
}

console.log(arr);
