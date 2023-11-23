// 3. Conversion of Arr to Object

// input:  [{ a: 1 }, { b: 2 }, { c: 3 }]
// output: { a: 1, b: 2, c: 3 };

const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
const obj = {};

arr.map((ele) => {
  const key = Object.keys(ele)[0];
  const value = Object.values(ele)[0];

  Object.keys(ele).map((arrEle) => {
    const key = arrEle;
    const value = ele[arrEle];

    obj[key] = value;
  });
});

console.log(obj);
