// let Example = class {
//     constructor(a){
//         this.a=a;
//     }
// }
// let ex = new Example(222);
// console.log(ex.a)
// console.log(Example.name)

// class Example {
//     constructor(a) {
//         this.a = a
//     }
// }

// class Example1 {
//     constructor(a) {
//         this.a = a
//     }
// }

// Example.a = 3
// Example.prototype.a = 2
// Example.prototype.b = 1
// console.log('Example:' + Example.prototype.b)
// console.log('Example1:' + Example1.prototype.b)

// console.log('Example:prototype:a:' + Example.prototype.a)
// console.log('Example:a:' + Example.a)

/**
 * Example2
 */
class Example2 {
/**
 * @param {*} a
 */
  constructor(a) {
    console.log('Example2 constructor');

    this.a = a;
  }
}

const exa1 = new Example2(2);
const exa2= new Example2(3);

console.log(Example2.prototype === exa1.__proto__);

Example2.prototype.sub = 4;

console.log(Example2.prototype);
console.log(exa2.__proto__.sub);
