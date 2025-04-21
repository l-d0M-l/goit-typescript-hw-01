function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// const objA = { name: "Alice" };
// const objB = { age: 25 };

// const merged = merge(objA, objB);
// console.log(merged);

export {};
