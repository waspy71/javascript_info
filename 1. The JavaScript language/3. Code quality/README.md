## 3.1 Debugging in the browser [link](https://javascript.info/debugging-chrome)
- command `debugger` inserted into a code block will trigger the **debugger** if dev tools are opened, it is ignored otherwise


## 3.2 Coding Style [link](https://javascript.info/coding-style)
- avoid extra nesting in loops with `if (!cond) continue`


### Exercises 
- 2_coding_style.js


## 3.3 Comments [link](https://javascript.info/comments)
- try to write **self-descriptive** functions/code
- add comments when necessary to understand what/why/how the code works


## 3.4 Ninja code [link](https://javascript.info/ninja-code)
A humorous presentation of incorrect practices in writting code.


## 3.5 Automated testing with Mocha [link](https://javascript.info/testing-mocha)


### Exercises
- 5_automated_testing.js


## 3.6 Polyfills and transpilers [link](https://javascript.info/polyfills)
`Transpiler` parses modern code and rewrites it using older syntac constructs, so that it'll also work in outdated engines.

`Polyfill` is a script that updates/adds new functions in some (very outdated) JavaScript engines. It "fills in" the gap and adds missing implementations.