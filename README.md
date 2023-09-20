# Letter Pentagon
## Description Deliverable
### Elevator Pitch
This is a fun puzzle based on the NYT's Letter Boxed daily puzzle. Users will try and create words by connecting letters accross on different sides of the pentagon. Every letter must be used at least once. Each word must start with the first letter of the previous word. Users will be able to keep track of their scores and previous answers. 

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
