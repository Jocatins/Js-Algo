//

Stacks

// The last book you put on the stack will be the first book you take off

stack.push ==> adding item to the stack
stack.pop ==>  to remove the top or last elt of the stack
stack.length ==>  to determine how many elements are on the stack

Array as a stack

// Sets

In ES6, size is not a function. it is a property, so there won't be parenthesis when it is called

// Queues

The queue data structure is a way to hold data.
first in first out---> like the first person in the queue leaves . 
 another example is when sending data to be printed to a printer


 Overtime your mailbox gets littered with too many letters. some of them are read, while others are unread. Your mail program can either show 
 a list of all letters or show the content of a single letter. As soon as the program shows the content of an unread letter, it becomes a read letter.

 Input
 the first line contains an integer n, representing the numbers of letters in the mailbox
 the second line contains n space-separated integers (zeros and ones), representing the state of the letters in the list

 Output
 Print the minimum number of operations needed to read all the letters

 Constraints
 1 <= n <= 1000
 0 <= ar[i] <= 1

 Explanation
 In this example, the action plan is as follows. Open the first letter, move to the second letter, return to the list
 open the fifth letter, So you need to perform 4 operations