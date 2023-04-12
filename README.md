# Some Notes on JavaScript

The program in this language are called scripts.
They can be written right in a web page’s HTML and run automatically as the page loads.

# How do engines work

-   The engine (embedded if its a browser) reads ("parses") the script
-   Then it converts ("complies ") the script to machine code
-   And then the machine code runs pretty fast

# Variables

A variable is a named storage for data. To create a variable, you use the let, var ot const keyword
`var`

-   it has no block scope.
-   it tolerates re-declarations

The Null and the Undefined

In `JS`, `null` is a special value that represents "nothing", "empty"
`Undefined` means a value has not be assigned.

`typeof` is an operator not a function.

The important difference between || and NULLISH COALESCING OPERATOR is:

|| returns the first truthy value.
?? returns the first defined value.

# Polyfills

A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.
