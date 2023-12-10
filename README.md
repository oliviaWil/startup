# Letter Pentagon
## Description Deliverable
### Elevator Pitch
This is a fun puzzle based on the NYT's Letter Boxed daily puzzle. Users will try and create words by connecting letters on different sides of the pentagon. Every letter must be used at least once. Each word must start with the first letter of the previous word. Users will be able to keep track of their scores and previous answers. 

### Design
![Alt text](<Screen Shot 2023-09-20 at 1.14.37 PM.png>)
## Key Features
- secure login over HTTPS
- ability to keep track of past answers
- ability to read rules
- current puzzle progress shown both on pentagon and on text line
- restart button

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login, one for past solutions, and one for solving the puzzle. Hyperlinks to each page.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, displaying letters used and words used, restart button backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving past solutions
  - submitting solutions
  - validating solution
- **DB** - Store users, past solutions, and valid words in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't look at past solutions unless authenticated.
- **WebSocket** - As each user solves solution it will appear on solutions page.
- **React** - Application ported to use the React web framework.

### HTML Deliverable
- **HTML pages**-index,login, solutions, and how to play
- **Links**- each page has a navigation section with links to the others
- **Text**- How to play has a text explaining how to play
- **Images** - an image that will eventually be the pentagon puzzle both on the main page and on the solutions page
- **Login**- login form with submit button
- **Database**- solutions page represents data pulled from the database
- **Websocket**- solutions page represents realtime data

### CSS Deliverable
- **Header, footer, and main content body**- added css headers and footers to all pages as well as styled the content,images, and elements of each page
- **Navigation elements**- added css to the navigation links
- **Responsive Window resizing**- all web pages are responsive to resizing

### JS Deliverable
-JavaScript support for future login
-JavaScript support for your application's interaction logic
-JavaScript support for future database data
-JavaScript support for future login

### Service Deliverable
- Create an HTTP service using Node.js and Express- done
- Frontend served up using express static middleware- done
- Your frontend calls third party service endpoints-use json
- Your backend provides service endpoints- done
- Your frontend calls your service endpoints-calls dad joke


