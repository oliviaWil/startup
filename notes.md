# CS260 Notes
## Github notes
Git lens does make it easy but the terminal isn't too complicated.
You need to save before you commit, make sure to pull before in case things have been changed.

## Web Server Notes
ssh command: ssh -i /Users/oliviawilson/Downloads/ahsoka.pem ubuntu@107.21.37.243

## HTML Notes
icon hexcode is #8374D1

In the following code, what does the link element do?

Link Element: In HTML, the <link> element is used to define relationships between the current document and external resources. Typically, it's used to link to external stylesheets (CSS files) to control the presentation of the document.
In the following code, what does a div tag do?

Div Element: The <div> element is a generic container in HTML. It's used to group and style content within a document. It doesn't carry any specific semantic meaning of its own but is often used as a building block to structure and style content.
In the following code, what is the difference between the #title and .grid selector?

Selectors: In CSS, #title is an ID selector that targets an element with the id attribute set to "title." It's used to select a single unique element. .grid is a class selector that targets elements with the class attribute set to "grid." It can be used to select multiple elements with the same class.
In the following code, what is the difference between padding and margin?

Padding vs. Margin: In CSS, both padding and margin are used for layout and spacing:
Padding: Padding is the space inside an element between its content and its border. It affects the area within the element.
Margin: Margin is the space outside an element, which separates it from other elements. It doesn't affect the element's content area.
Given this HTML and this CSS how will the images be displayed using flex?

Flexbox: To determine how images are displayed using flex, the actual HTML and CSS code is required. Flexbox is a CSS layout model that allows you to create flexible and responsive layouts, but its behavior depends on the specific code in use.
What does the following padding CSS do?

To answer this, I would need the specific CSS code you're referring to. Padding in CSS is used to create space around an element, but its effect depends on the properties and values applied.
What does the following code using arrow syntax function declaration do?

To answer this, I would need the actual code snippet you're referring to. Arrow functions in JavaScript are a way to declare functions, but their behavior depends on the specific code within the function.
What does the following code using map with an array output?

To answer this, I would need the code snippet that uses the map method with an array. The map method is used to create a new array by applying a function to each element in an existing array.
What does the following code output using getElementByID and addEventListener?

To answer this, I would need the actual code snippet that uses getElementById and addEventListener. These methods are used for manipulating the DOM and handling events, but their behavior depends on the specific code.
What does the following line of Javascript do using a # selector?

JavaScript doesn't use a # selector. The # selector is typically associated with CSS to select elements by their id attribute. In JavaScript, you might use document.querySelector('#id') to select an element by its id.
Which of the following are true? (mark all that are true about the DOM)

You haven't provided the statements to evaluate, but the Document Object Model (DOM) is a programming interface for web documents. It represents the page's document as objects, allowing you to interact with and manipulate the document's content.
By default, the HTML span element has a default CSS display property value of:

By default, the HTML <span> element has a CSS display property value of inline. It's typically used for inline elements within text.
How would you use CSS to change all the div elements to have a background color of red?

To change the background color of all <div> elements to red, you can use the following CSS rule:
css
Copy code
div {
  background-color: red;
}
How would you display an image with a hyperlink in HTML?

To display an image with a hyperlink in HTML, you can use the <a> (anchor) element to create a hyperlink and the <img> element to embed an image within the hyperlink. Here's an example:
html
Copy code
<a href="https://example.com">
  <img src="image.jpg" alt="Description of the image">
</a>
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

In the CSS box model, starting from the inside and working out, the layers are as follows:
Content (innermost)
Padding
Border
Margin (outermost)

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

To set the text "troubl" to green and leave "double" text unaffected, you can use a CSS rule like this:

css
Copy code
.green-text {
  color: green;
}
Then, apply this class to the HTML element that contains "troubl":

html
Copy code
<span class="green-text">troubl</span>
<span>double</span>
What will the following code output when executed using a for loop and console.log?

To answer this, I would need to see the specific code you are referring to.

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

You can use JavaScript to select the element with the id "byu" and change its text color like this:

javascript
Copy code
const element = document.getElementById("byu");
element.style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>

How do you declare the document type to be HTML?

You declare the document type as HTML by adding the following line at the beginning of your HTML document:

html
Copy code
<!DOCTYPE html>
What is valid JavaScript syntax for if, else, for, while, switch statements?

If Statement:

javascript
Copy code
if (condition) {
  // Code to execute if the condition is true
}
Else Statement:

javascript
Copy code
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
For Loop:

javascript
Copy code
for (initialization; condition; increment) {
  // Code to execute in a loop
}
While Loop:

javascript
Copy code
while (condition) {
  // Code to execute in a loop
}
Switch Statement:

javascript
Copy code
switch (expression) {
  case value1:
    // Code to execute if expression equals value1
    break;
  case value2:
    // Code to execute if expression equals value2
    break;
  default:
    // Code to execute if expression doesn't match any case
}
What is the correct syntax for creating a JavaScript object?

The correct syntax for creating a JavaScript object is as follows:

javascript
Copy code
const obj = {
  key1: value1,
  key2: value2,
  // Additional key-value pairs
};
Is it possible to add new properties to JavaScript objects?

Yes, it is possible to add new properties to JavaScript objects dynamically. You can do this by simply assigning a value to a new property, like this:

javascript
Copy code
obj.newProperty = "new value";
If you want to include JavaScript on an HTML page, which tag do you use?

To include JavaScript on an HTML page, you use the <script> tag. For example:

html
Copy code
<script src="myscript.js"></script>
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Assuming you want to change the text content dynamically using JavaScript:

html
Copy code
<span id="animal">animal</span>
<span id="fish">fish</span>
You can use JavaScript to change the text like this:

javascript
Copy code
const element = document.getElementById("animal");
element.textContent = "crow";
Which of the following correctly describes JSON?

JSON stands for "JavaScript Object Notation" and is a lightweight data interchange format. It is a text-based format for representing structured data that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for data exchange between a server and a web application or between different parts of a web application.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

chmod: Change file permissions.
pwd: Print the current working directory.
cd: Change the current directory.
ls: List files and directories in the current directory.
vim: A text editor used in the console.
nano: Another text editor used in the console.
mkdir: Create a new directory.
mv: Move or rename files and directories.
rm: Remove files and directories.
man: Display manual pages for commands.
ssh: Secure Shell, used for remote login to a server.
ps: List running processes.
wget: Retrieve files from the web.
sudo: Execute a command with elevated permissions.
Which of the following console command creates a remote shell session?

The console command ssh creates a remote shell session when used to connect to a remote server.

Which of the following is true when the -la parameter is specified for the ls console command?

When the -la parameter is specified for the ls command, it lists all files (including hidden files) in the current directory and provides detailed information about each file, such as permissions, owner, group, size, and timestamps.

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top-level domain, which is a subdomain, which is a root domain?

click is the top-level domain (TLD).
bozo.click is a domain, not a subdomain.
fruit is a subdomain of bozo.click.
banana is a subdomain of fruit.

Is a web certificate necessary to use HTTPS?

Yes, a web certificate (usually an SSL/TLS certificate) is necessary to use HTTPS (Hypertext Transfer Protocol Secure). The certificate helps encrypt the data transferred between a web server and a user's browser, ensuring secure and private communication.

Can a DNS A record point to an IP address or another A record?

A DNS A (Address) record typically points to an IPv4 address, not to another A record. However, DNS can be configured to create chains of records (e.g., using CNAME records) to indirectly reference other DNS records.

Port 443, 80, 22 is reserved for which protocol?

Port 443 is reserved for HTTPS (HTTP over TLS/SSL).
Port 80 is reserved for HTTP (Hypertext Transfer Protocol).
Port 22 is reserved for SSH (Secure Shell) for secure remote access.


# Final Study Guide 
Ports
Q: What ports are used for HTTP, HTTPS, SSH?

HTTP: Port 80
HTTPS: Port 443
SSH: Port 22
HTTP Status Codes
Q: What do HTTP status codes in the 300, 400, 500 range indicate?

300 Range: Redirection
400 Range: Client errors
500 Range: Server errors
HTTP Header Content-Type
Q: What does the HTTP header content-type allow you to do?

Specifies the media type of the resource. It allows you to indicate the type of data you are sending or receiving (e.g., JSON, XML, HTML).
Cookie Attributes
Q: What do the following attributes of a cookie do?

Domain: Specifies the domain for which the cookie is valid.
Path: Defines the path for which the cookie is valid.
SameSite: Controls when cookies are sent with cross-origin requests.
HTTPOnly: Restricts the cookie from being accessed through JavaScript.
Express Middleware
Q: Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?

The console.log output would be "Middleware for /foo" for an HTTP GET request with a URL path of /foo/bar.
Express Service Code (JavaScript Fetch)
Q: Given the following Express service code: What does the following JavaScript fetch return?

The JavaScript fetch returns a Promise that resolves to the Response to that request, whether it is successful or not.
MongoDB Query
Q: Given the following MongoDB query, select all of the matching documents.

It selects all documents where the cost is greater than 10 and the name matches the regular expression /fran.*/.
User Password Storage
Q: How should you store user passwords in a database?

Passwords should be securely hashed and salted before storing them in a database.
Websockets in Node.js
Q: Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?

The logged output to the console of the web browser depends on the specific code executed. Websockets typically log connection and message events.
WebSocket Protocol
Q: What is the WebSocket protocol used for?

WebSocket is a communication protocol that provides full-duplex communication channels over a single, long-lived connection.
JSX and Curly Braces
Q: What is JSX, and how are the curly braces rendered?

JSX is a syntax extension for JavaScript, often used with React. Curly braces {} in JSX are used for embedding expressions or JavaScript code.
React Component (Welcome and App)
Q: Assuming a HTML document with a <div id="root"></div> element, what content will the following React component generate?

The React component generates a list of welcome messages for different names within a parent component.
React Component (Numbers)
Q: Assuming a HTML document with a <div id="root"></div> element, what content will the following React component generate?

The React component generates an unordered list (<ul>) containing list items (<li>) with numbers from 1 to 5.
React Component (Example using State and Hooks)
Q: What does the following React component do?

The React component is a simple counter that displays the number of times a button is clicked. It utilizes the useState hook for state management.
React Hooks
Q: What are React Hooks used for?

React Hooks are used for adding state and lifecycle features to functional components in React.
useEffect Hook
Q: What is the useEffect hook used for?

The useEffect hook is used for side effects in functional components, such as fetching data, subscribing to services, or manually changing the DOM.
React Router (BrowserRouter and Routes)
Q: What does this code do?

The code sets up routing using React Router with multiple routes for different paths and components.
npm in Web Development
Q: What role does npm play in web development?

npm (Node Package Manager) is used in web development for managing and installing packages, dependencies, and scripts.
package.json in npm Project
Q: What does package.json do in an npm project?

The package.json file in an npm project contains metadata about the project and lists its dependencies, scripts, and other configuration details.
fetch Function
Q: What does the fetch function do?

The fetch function is used to make HTTP requests and returns a Promise that resolves to the Response to that request.
Node.js
Q: What does node.js do?

Node.js is a JavaScript runtime environment that allows running JavaScript code server-side.
Vite
Q: What does Vite do?

Vite is a build tool for modern web development that focuses on fast development and optimized production builds.





