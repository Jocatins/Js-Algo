Questions and Answers

What is Closure?
***Closure is a combination of functions bundled together.
Inner function has access to an outer function's scope and its parameters even
after the outer function has returned***

What are the differences between call, apply and bind?
*** Call and apply calls a function while bind creates a new function *****
*** Arguments are individually passed in call while apply expects an array****

What is an event loop?
**** It is responsible for executing js code, collecting and processing events
and executing queued sub-tasks *****

What is currying function?
*** is the process of taking a function with multiple arguments and turning it into a sequence
of functions each with only single argument****

What is prototype in JavaScript?
*** Prototypes are the mechanism by which JavaScript object inherits features from 
another object *****

What is memoization?
*** It is an optimization technique used primarily to speed up computer programs by storing
the result of expensive CPU function calls and returning the cached results when the same
inputs occur again****

What is higher order function?
*** It is a function that accepts another function as an argument or returns a function as a 
return value, or both a combination of functions. e.g map, filter, reduce

What is event delegation?
*** It is a useful pattern of adding an event listener to a single element(parent), instead of assigning  
events on multiple elements.

Ways of handling async operations in JavaScript
***** Callback, promise, async/ await

What is recursion?
*** It is a technique for iterating over an operation by having a function
call itself repeatedly until it arrives at a result *****

What is ECMAScript?
****It is standard specification for scripting languages. JS are based on ECMAScript***

What is the difference between == and ===?
**** == compares two values ****
*** === compares both type and value *****

What is a promise?
*** A promise is an object that may produce a single value some time in the future 
** with either a resolved value or a reason of not being resolved  ***

What is the difference between null and undefined?
*** Null type is an object that is explicitly assigned to a variable***
** undefined type is undefined where variable has been declared but has no assigned value***

What is Ajax?
*** It stands for Asynchronous JavaScript and XML. We can send data to server
and get data without refreshing the page***

--- The difference between Synchronous and Asynchronous
*** Synchronous are blocking
*** it completes the current code before the next code are executed
*** Asynchronous are non blocking
*** async continues the next code without completing the current code

The difference between var, let and const?
*** var are scoped to a function***
***let and const are blocked scoped, accessible to the next curly braces


// ============== CSS =====================//

What is CSS box Model?
*** It is a box that wraps around every HTML elements***
**the box contains content, padding, border and margin

What is a CSS sprite??
*** It combines multiple images into one single larger images
***this will only require one server request resulting to a fast loading time*** 


//////===========HTML ===================//
What are HTML entities?
***HTML entities are a piece of text(string) that begins with an
ampersand(&) and ends with a semicolon(;) 
eg
 &nbsp; => non breaking space
 &lt; ====> less than
 &gt; ====> greater than
 &amp; ===> ampersand

 What are meta tags?
 ***Meta tags are HTML tags that can be included in webpages
 that describes what the web page is about
 .These tags are not displayed on the page but it is read by search engines like 
 google.com and web crawlers***

 What are the types of storage?
 ***Local storage and Session Storage***
 ---Local storage data is not deleted automatically when the current
 browser window is closed.

 
 // =====LOOPS ===============
 ***Loops are computer programs that execute a set of instructions 
 or a block of code a certain number of times without having to write 
 it again until a certain condition is met. 
 In other words, loops let your code execute one or more statements 
 as many times as desired.


 //// JavaScript Callback

 With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.

But, asynchronus programmes are difficult to write and difficult to debug.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript,
 asynchronous programming is solved using Promises instead.