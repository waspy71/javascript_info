## 4.1 Objects [link](https://javascript.info/object)
`let user = new Object()` , Object **contructor**

`let user = {}` , Object literal syntax

Object features:
- can **access** data using `.` notation: `user.name`
- can also **set** new data with `.` notation: `user.isAdmin = true`
- **delete** property with `delete user.age`
- *multiword* properties **must** be encapsulated in `""` because of whitespace, `user["likes birds"]` / `user = { "likes birds": ture }`
- we can use ***computed properties*** with `[]` like this:
```javascript
      let fruit = 'apple';
      let bag = {
        [fruit + 'Computers']: 5 // bag.appleComputers = 5
      };
```
- Property value shorthand `{ name, age }` will use **variable** name as propery name for the value
- Property existence test, `“in”` operator `"key" in object` to check if it exists
- The `"for..in"` loop:
```javascript
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```
- **order** of Object properties: first **integer** string values from lowest to highest, then **named** properties by the creation order, we can *cheat* by changing integers to non-integers by adding `+` to change order


### Exercises:
- 1_objects.js


### 4.2 Object references and copying [link](https://javascript.info/object-copy)
- Objects are copied `by reference`, whereas Primitives `as a whole value`
- A variable assigned to an object stores not the object itself, but its `“address in memory”` – in other words `“a reference”` to it.
- When an object variable is copied, the reference is copied, but the object itself is not duplicated.
- Two objects are equal **only** if they are the same object, two independent objects are not equal.

Cloning objects:
- `Object.assign(dest, ...sources)`, `dest` = target object, .`..sources` = list of source objects
  - only performs `shallow copy` on primitive, non-nested values (assumes **ALL** properties are **PRIMITIVES**)
  - example syntax `Object.assign(user, permissions1, permissions2)`
  - if the copied property already exists, it gets **overwritten**
  - can be used for **simple object cloning** like this `let clone = Object.assign({}, user);`
  - **spread syntax** is shorthand way of doing the same `let newUser = {...user}`

Nested cloning:
  - used when Objects have other Object references as their properties (`deep copy`)
  - `structuredClone(object)` clones the object with all nested properties (`let clone = structuredClone(user)`)
    - **can** copy most data types, such as objects, arrays, primitives, circular reference to itself
    - **can't** copy function references, this can be circumvented by writing a custom code or using `lodash` library `_.cloneDeep(obj)`