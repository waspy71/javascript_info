# 2. JavaScript Fundamentals

## 2.1 Hello, world! [link](https://javascript.info/hello-world)
- server-side environment execute `node my.js`
- javascript can be inserted into HTML in a few ways:
  - inside `body` element: `<script> your code here </script>`
  - as meta tag with source attribute inside head: `<script src="/path/to/script.js"></script>`
  - we can also attach multiple scripts each in separate script tag
-put ONLY the simplest scripts in HTML and more complex in separate files sos that they can be stored in cashe and be reused by other webpages
with same origin
-if `src=""` is set in `<script>` tag the content inside is ignored. We must choose either an external `<script src="…">` or a regular `<script>` with code, but we can still use more `<script>` tags together.

### Exercises:
- 1_hello_world.html
- 1_hello_world.js


## 2.2 Code structure [link](https://javascript.info/structure)
General information about **Statements, Semicolons and Comments**.


## 2.3 The modern mode, "use strict" [link](https://javascript.info/strict-mode)
To maintain old code compatibility **strict** mode is *disabled* by default. `"use strict"` has to be explicitly enabled in code to use modern,
possibly noncompatible functionality.
Things to remember about `"use strict"`:
- **HAS** to be located at the **TOP** of the `<script>` tag code content
- **CAN'T** be disabled once activated
- **CAN** be activated to work inside a singular function only
- developer console **DOESN'T** use `"use strict"` by default
- **classes/modules** enable `"use strict"` automatically


### 2.4 Variables [link](https://javascript.info/variables)
Basinc information regarding working with variables, like their definitions, naming practices, differences between `let`/`var`/`const`, etc.

### Exercises:
- 4_variables.js


### 2.5 Data types [link](https://javascript.info/types)
JavaScript is a *dynamically* typed language (meaning that there exist data types, but variables are not bound to any of them).
There are 8 basic data types:
- `Number`:
  - `integer`
  - `floating point`
  - special numeric values
    - `Infinity`/`-Infinity`
    - `NaN` - It is a result of an incorrect or an undefined mathematical operation
- `BigInt`:
  - was recently added to the language to represent integers of arbitrary length
  - value is created by appending `n` to the end of an integer like so : `const bigInt = 1234567890123456789012345678901234567890n`
- `String`:
  - a string in JavaScript must be surrounded by quotes either 
  -  there are 3 types of quotes `Double` / `Single` quotes and `Backticks` for formated strings with `${}` to incorporate variables
  and expressions.
- `Boolean` (logic type):
  - has only two values: `true` and `false`
- The `null` value:
  - it’s a special value which represents “nothing”, “empty” or “value unknown”
- The `undefined` value:
  - just like `null` it makes a type of its own, the meaning of `undefined` is “value is not assigned” (variable is declared, but not assigned, then its value is `undefined`)
- `Objects and Symbols`:
  - objects are used to store collections of data and more complex entities (unlike **primitive** types which stores only one value)
  - the `symbol` type is used to create **unique identifiers** for objects (details later on)
- The `typeof` operator:
  - returns the type of the operand (useful when we want to process values of different types differently or just want to do a quick check)
  - `typeof` is an operator, not a function and can be used as either: `typeof(x)` or `typeof x`

### Exercises:
- 5_data_types.js


### 2.6 Interaction: alert, prompt, confirm [link](https://javascript.info/alert-prompt-confirm)
- `alert` shows a mini-window with a message (**modal window**). **Modal** meaning that the visitor cannot interact with the rest of the page
  until they hahve dealt with the window, in this case until they press OK.
- `prompt` 
  - accepts 2 arguments `result = prompt(title, [default])`, title denotes the text shown to the visitor, an optional second parameter, the initial value for the input field.
  - craetes window with input field and **OK**/**CANCEL** options, returns input or `null` if the input was canceled.
- `confirm` shows a modal (`confirm(question)`) with a question and **OK**/**CANCEL** options. The result is `true` if **OK** is pressed and `false` otherwise.

### Exercises:
- 6_interactions_alert_prompt_confirm.js
- 6_interactions_alert_prompt_confirm.html


### 2.7 Type conversions [link](https://javascript.info/type-conversions)
Used when we need to explicitly convert a value to the expected type.
- **String Conversion** happens when we need the string form of a value e.g. `String(value)`. A `false` becomes `"false"`, `null` becomes `"null"`, etc.
- **Numeric Conversion** in mathematical functions and expressions happens automatically.
  - Can be performed with `Number(value)`
  - values become numerical values : 
    - `undefined` to `NaN`
    - `null` to `0`
    - `true`/`false` to `1`/`0`
    - `string` to numbers, empty string to `0`, error to `NaN` (**whitespaces**, **new lines** etc are ignored)
- **Boolean Conversion** it happens in logical operations but can also be performed explicitly with a call to `Boolean(value)`.
  - values that are intuitively **“empty”**, like `0`, an **empty string**, `null`, `undefined`, and `NaN`, become `false`.
  - other values become `true`.


## 2.8 Basic operators, maths[link](https://javascript.info/operators)
`Operand`: is what operators are applied to, like number or string.

`Operator`: is either applied to one operand(`unary`) or evalueates an expression between 2 operands(`binary`):
- `-x` is a unary operand that reverses a sign of a number
- `x - y` is a binary operand that evaluates the expression

Math operators:
- `+`, `-`, `*`, `/`
- `%`: Remainder of the integer division (8 % 3) // 2, the remainder of 8 divided by 3 is 2
- `**`: Exponentiation ( a ** b raises a to the power of b)

String concatenation with binary `+` :
- `let s = "my" + "string` concatenates strings to one string
- `'1' + 2 ` converts number to a string and concatenates
- in more complex examples with more than 1 operator expression is evaluated one after another:
  - `2 + 2 + '1'` // "41" and not "221"
  - `'1' + 2 + 2` // "122" and not "14"
- The binary `+` is the only operator that supports strings in such a way
- Other arithmetic operators work **only** with numbers and always convert their operands to numbers
  - `6 - '2'`  // 4, converts '2' to a number
  - `'6' / '2'` // 3, converts both operands to numbers

Numeric conversion, unary `+` :
- does nothing to numbers
- converts other data types into numbers like `Number()`:

  `let apples = "2"`

  `let oranges = "3"`

  `+apples + +oranges` // 5 instead of '23'

Operator precedence:
- If an expression has more than one operator, the execution order is defined by their *precedence*, or, in other words, the default priority order of operators.
- Parentheses override any precedence `(1 + 2) * 2`

Modify-in-place:
- `+=`,`-=`,`*=`, `/=` shorthand for `n = n + 5`
- `n *= 3 + 5` // right part evaluated first, same as n *= 8

Increment/decrement:
- either prefix(`++counter` returns incemented value) or postfix(`counter++`, returns preincrement value )
- can be used inside expressions like `2 * ++counter(1) // 4` but is harder to understand

Bitwise operatos and Comma are rarely used in everyday programming, more in [link](https://javascript.info/operators#bitwise-operators)

### Exercises:
- 8_operatos.js


## 2.9 Comparisons [link](https://javascript.info/comparison)
- note to be added ...

### Exercises:
- 9_comparisons.js


## 2.10 Conditional branching: if, '?' [link](https://javascript.info/ifelse)
...


### Exercises:
- 10_conditionals.js


## 2.11 Logical operators [link](https://javascript.info/logical-operators)
...


### Exercises:
- 11_logical_operators.js


