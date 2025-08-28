# Question Answers

## Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
- getElementById is to get only 1 element by an ID.
- getElementsByClassName is to get more than one element by a class name. (Its live, means if new elements are added, it updates automatically)
- querySelector returns only the first value it get by an ID or class.
- querySelectorAll returns all elements by a class name. (But it isnt live like getElementsByClassName)

## Q2. How do you create and insert a new element into the DOM?

Ans:
- crreate new element by `document.createElement()`
- insert new element by parent.append(child) or parent.prepend(child)

## Q3. What is Event Bubbling and how does it work?

Ans: 
Event bubbling is when an event happens on a child element, it bubbles up through its parent elements until it reaches the root.


## Q4. What is Event Delegation in JavaScript? Why is it useful?

Ans: 
- Event delegation is attaching one event listener on a parent element, instead of attaching separate listeners to each child.

- Event Delegation is useful because the fewer the event listeners, the better the performance. And it works even if new child elements are added dynamically.


## Q5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: 
- preventDefault() stops the page from reloading each time i input values in a form.

- stopPropagation() stops even bubbling.