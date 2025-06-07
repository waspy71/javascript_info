## 5.1 Methods of primitives [link](https://javascript.info/primitives-methods)

A primitive:
- Is a value of a primitive type.
- There are 7 primitive types : `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.
  - `undefined` and `null` are **the most primitive** which means they don't have ways to provide methods.

An object:
- Is capable of storing multiple values as properties.
- Can be created with `{}`, for instance: `{name: "John", age: 30}`. There are other kinds of objects in JavaScript: functions, for example, are objects.

A primitive as an object:
- Primitives are still primitive. A single value, as desired.
- The language allows access to methods and properties of `strings`, `numbers`, `booleans` and `symbols`.
- In order for that to work, a special **“object wrapper”** that provides the extra functionality is created, and then is destroyed.

The **“object wrappers”** are different for each primitive type and are called: `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. Thus, they provide different sets of methods.


### Exercises:
- 1_methods_of_primitives.js


## 5.2 Number [link](https://javascript.info/number)

