1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:Below are the differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById(): getElementById() is a JavaScript DOM method that is used to select a single HTML element based on its specific id.

a.Selects a single element using a specific id

b.Returns a single element object

c.Very fast because an id must be unique in the document

d.Returns null if no matching id is found
Syntax: document.getElementById("idName");

getElementsByClassName: getElementsByClassName() is a JavaScript DOM method that is used to select one or more elements using a specific class name.

a.Finds elements by a given class name

b. Can return multiple elements

c.Returns an HTMLCollection (live collection)

d. Automatically updates when the DOM changes
Syntax: document.getElementsByClassName("className");

querySelector():querySelector() is a JavaScript DOM method that allows you to select the first matching element using a CSS selector.



a. Finds an element using a CSS selector (id, class, tag, attribute, etc.)

b. Returns only the first matching element

c. Returns a single element object

d. Returns null if no matching element is found
Syntax: document.querySelector("#myId");

querySelectorAll(): querySelectorAll() is a JavaScript DOM method that allows you to select all matching elements using a CSS selector.

a. Finds elements using a CSS selector (id, class, tag, attribute, etc.)

b. Returns all matching elements

c. Returns a NodeList

d. Returns an empty NodeList if no elements are found

e. Can be easily looped through using forEach()

Syntax: document.querySelectorAll("CSS_Selector");





2. How do you create and insert a new element into the DOM?

Ans:To create and insert a new element into the DOM, we use JavaScript.

First, we create a new element using the document.createElement() method.
Then, we can add text or content to that element.
Finally, we insert the element into the DOM using methods like appendChild() or append().
Create a new element:
let newDiv = document.createElement("div");
Add content:
newDiv.textContent = "Hello World";
Insert into DOM:
document.body.appendChild(newDiv);


3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a JavaScript concept where an event that happens on a child element automatically propagates (bubbles up) step by step to its parent elements.

When an event (like a click) occurs on a child element,

First, the event is handled on the child element itself.

Then, it propagates upward to the parent element → grandparent → and continues up through the DOM hierarchy step by step.

If the child element is clicked, it will first show the alert "Child clicked", and then "Parent clicked".
This is called event bubbling.

example:  document.getElementById("child").addEventListener("click", function() {
            alert("Child clicked");
          });

        document.getElementById("parent").addEventListener("click", function() {
          alert("Parent clicked");
        });
4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique where we attach an event listener to a parent element and handle the events of its child elements.
 No need to add separate listeners for multiple child elements.
 The listener still works even if new child elements are added dynamically.
 It is more memory-efficient and improves performance.

    Example: document.getElementById("parent").addEventListener("click", function(e) {
    if(e.target && e.target.tagName === "BUTTON") {
        alert("Button clicked: " + e.target.textContent);
    }
    });

  Here, the parent listener is used to handle clicks for all the buttons.  

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Below are the differences between preventDefault() and stopPropagation() methods

preventDefault() :Stops the browser’s default action from occurring.

Example: Preventing a page reload when a link is clicked.

stopPropagation()

Prevents the event from reaching parent or ancestor elements.

Example: When a child element is clicked, the parent’s event listener will not be triggered.
