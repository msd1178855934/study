// if ([]) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// if ('' > '') {
//     console.log('true')
// } else {
//     console.log('false')
// }

// if ('2020-05-07' < '2020-05-06') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// console.log("杭州市 HaZ".slice(-3).trim())

// console.log([1, 2, 3].concat([4, 5, 6], ('' ? 'status_content' : [1, 2])).join(','))

// if (!(/^[\u4e00-\u9fa5\·]{1,6}$/g).test('里根·罗斯')) {
//     console.log('no pass')
// }

// console.log([1, 2].forEach((ele, index) => { return index }))

// if (Math.pow(2, 53) == Math.pow(2, 53) + 1) {
//   console.log(1);
// }

// if (Math.pow(2, 53) == Math.pow(2, 54)) {
//   console.log(2);
// }

// (function(s) {
//     console.log(s);
//   })('test');
  
//   !function(s) {
//     console.log(s);
//   }('test1');

// function test(a, b) {
//     console.log(a)
//     console.log(b)
// }
// test(1) 

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

// /**
//  * Example2
//  */
// class Example2 {
//     /**
//      * @param {*} a
//      */
//       constructor(a) {
//         console.log('Example2 constructor');
    
//         this.a = a;
//       }
//     }
    
//     const exa1 = new Example2(2);
//     const exa2= new Example2(3);
    
//     console.log(Example2.prototype === exa1.__proto__);
    
//     Example2.prototype.sub = 4;
    
//     console.log(Example2.prototype);
//     console.log(exa2.__proto__.sub);
// }
    
// console.log('testString'.substring(-3, 0))

// console.log(('000' + Math.floor(Math.random() * 999)).slice(-3))


// var Test = function() {
//     console.log("test");
//     this.init = function() {
//         console.log("test init");
//     }
// }

// (new Test).init()

// 1 == 1 && !console.log('test') && console.log("test2")

