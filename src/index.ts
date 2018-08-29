class Animal {}
class Dog extends Animal { bark() {} }
class Cat extends Animal { meow() {} }

const arr: Dog[] = [new Dog(), new Dog()]

let arr2: Animal[] = arr;

arr2.push(new Cat())

arr.forEach(d => d.bark())
