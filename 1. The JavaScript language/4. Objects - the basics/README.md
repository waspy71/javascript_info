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