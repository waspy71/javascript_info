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


  ## 4.3 Garbage collection [link](https://javascript.info/garbage-collection)
  ...


  ## 4.4 Object methods, "this" [link](https://javascript.info/object-methods)
  - A function that is a property of an object is called its `method`.
  - `this` is used when an object method needs to access the information stored in the object
    - The *value* of `this` is the object **“before dot”**, the one used to call the method.
    - The *value* of `this` is **evaluated during the run-time**, depending on the context.
   ```javascript
    let user = { name: "John" };
    let admin = { name: "Admin" };

    function sayHi() {
      alert( this.name );
    }

    // use the same function in two objects
    user.f = sayHi;
    admin.f = sayHi;

    // these calls have different this
    // "this" inside the function is the object "before the dot"
    user.f(); // John  (this == user)
    admin.f(); // Admin  (this == admin)

    admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
  ```
  - `Arrow functions` *are special*: they don’t have their *“own”* this. If we reference this from such a function, it’s taken from the outer *“normal”* function. It’s useful when we actually do not want to have a separate `this`, but rather to take it from the outer context.


  ### Exercises:
  - 4_object_methods_this.js


## 4.5 Constructor, operator "new" [link](https://javascript.info/constructor-new)

- `constructor functions` and `new` operator are used instead `{...}` when we need to create many similar objects (multiple users or menus etc)
- `constructor functions` technically are regular functions but follow 2 conventions:
  - named with a **capital letter**
  - executed with `new` operator ( `let user = new User('Jack')`)
    - `constructor functions` should only be called using `new`. Such a call implies a creation of ***empty*** `this` at the start and *returning* the **populated one** at the end.

When a function is executed with `new`, it does the following steps:
``` javascript
  function User(name) {
    // this = {};  (implicitly)  - 1. A new empty object is created and assigned to "this"

    // add properties to this  - 2. The function body executes. Usually it modifies "this", adds new properties to it
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)  - 3. The value of "this" is returned
  }
```
Return from constructors:
  - constructors do not have a `return` statement ( **usually** )
  - their task is to write all necessary stuff into `this`, and it automatically becomes the result
  - if there is a `return` statement then the rule is :
    - if `return` is called with an object then the object is returned instead of `this`
    - if `return` is called with a primitive, it's ignored

Methods in constructors:
  - with how flexible the `constructor functions` are we are able to create objects with methods as well by adding methods to `this` just like properties

``` javascript
  function User(name) {
    this.name = name;

    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }

  let john = new User("John");

  john.sayHi(); // My name is: John
```


  ### Exercises:
  - 5_constructor_operator_new.js


## 4.6 Optional chaining '?.' [link](https://javascript.info/optional-chaining)

The “non-existing property” problem
 - **recent addition** to the language. Old browsers may need `polyfills`
 - the `optional chaining` `?.` is a *safe way to access nested object properties*, even if an intermediate property doesn’t exist
 - used when we prefer to get `undefined` instead of an `error`
 - before this could be achieved by using ternary `? :` and `&&` operators but it was inelegant and cumbersome way due to name/code duplication 
  ```javascript
    let user = {}; // user has no address

    alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
  ```

Optional chaining
 - the `optional chaining` `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`
 - works also if the object doesn't exist
 - we shouldn't overuse `?.` , for example, if according to our code logic user object must exist, but address is optional, then we should write `user.address?.street`, but not `user?.address?.street`
 - the variable before `?.` must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables

 Short-circuiting
  - the `?.` immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist
    - obj?.prop – returns obj.prop if obj exists, otherwise `undefined`
  - if there are any further function calls or operations to the right of `?.`, they won’t be made

Other variants: ?.(), ?.[]
  - the `optional chaining` `?.` is not an operator, but a **special syntax construct**, that also works with:
    - `functions`
      - obj.method?.() – calls obj.method() if obj.method exists, otherwise returns `undefined`
    - `square brackets`  
      - obj?.[prop] – returns obj[prop] if obj exists, otherwise `undefined`
    - `delete`
      - delete user?.name - delete user.name if user exists

  - it doesn't work with assigning values
    ```javascript 
      let user = null;

      user?.name = "John"; // Error, doesn't work
      // because it evaluates to: undefined = "John"
    ```


## 4.7 Symbol type [link] (https://javascript.info/symbol)

Only 2 primitive types may serve as object property keys:
- string type
- symbol type

Otherwise, if one uses another type, such as number, it’s autoconverted to string. So `that obj[1]` is the same as `obj["1"]`, and `obj[true]` is the same as `obj["true"]`.

Symbols:
- symbol is a **“primitive unique value”** with an *optional description*
- a **“symbol”** represents a **unique identifier**. A value of this type can be created using `Symbol()` e.g. `let id = Symbol()`
- upon creation, *we can give symbols a **description*** (also called a symbol **name**), mostly useful for debugging purposes `let id = Symbol("id")`
- **symbols are guaranteed to be unique**. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

- symbols don’t auto-convert to a string. For instance, we can `alert` almost any value, and it will work. Symbols are special. They don’t auto-convert. That’s a **“language guard”** against messing up, because **strings and symbols are fundamentally different** and should not accidentally convert one into another. If we really want to show a symbol, we need to explicitly call `.toString()` on it, like here `alert(id.toString())` or get `symbol.description` property to show the description only `alert(id.description); // id`

“Hidden” properties
- symbols allow us to create `“hidden” properties` of an object (like identifiers etc), that no other part of code can accidentally **access** or **overwrite**
- a symbolic property does not appear in `for..in`, so it won’t be accidentally processed together with other properties (which might affect pre-defined behavior in third-party code)
- in contrast `Object.assign()` **copies both string and symbol properties**
- also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.
- if we want to use a symbol in an object literal `{...}`, we need `square brackets` around it
```javascript
    let id = Symbol("id");

    let user = {
      name: "John",
      [id]: 123 // not "id": 123
    };
```


Global symbols
- there exists a **global symbol registry** for when we want same-named symbols to be same entities
- symbols inside the registry are called **global symbols**. If we want an application-wide symbol, accessible everywhere in the code
- it guarantees that repeated accesses by the same name return exactly the same symbol
- in order to *read (create if absent)* a symbol from the registry, use `Symbol.for(key)`
- that call checks the **global registry**, and if there’s a symbol described as `key`, *then returns it*, otherwise creates a new symbol `Symbol(key)` and stores it in the registry by the given `key`
- `Symbol.keyFor(symbol)` for when we cant return a name by symbol
- `Symbol.keyFor(symbol)` works with global symbol registry but doesn't work on non-global symbols. If the symbol is not global, it won’t be able to find it and returns `undefined` ( alternatively we can use `symbol.description` property)

System symbols
There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
They are listed in the specification in the Well-known symbols table:
- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
…and so on.


