window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 11,
    run: function () {
        const collection = {
            one: 1,
            two: 2,
            three: 3,
            [Symbol.iterator]: function* () {
              for (let key in this) {
                yield this[key];
              }
            },
          };
          const iterator = collection[Symbol.iterator]();
          console.log(iterator.next()); // {value: 1, done: false}
          console.log(iterator.next()); // {value: 2, done: false}
          console.log(iterator.next()); // {value: 3, done: false}
          console.log(iterator.next()); // {value: undefined, done: true}
    },
    code: `const collection = {
    one: 1,
    two: 2,
    three: 3,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    },
};
const iterator = collection[Symbol.iterator]();
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); `,
})

