## Project Demo Address
 https://jxio.github.io/request-invitation/index.html#/

## Project Description
A single webpage app that allows user to enter name and email to receive email invitations.

## Technologies
Front-end framework: React;

Mordern build tool: Webpack;

Mordern styling approach: Semantic-ui-react

## Requirements && Test Cases
Click "Request an invite" button, shows a popup with "Full Name", "Email", "Confirm Email" inputs, and a "send" button:
1. Submit requests without all three fields filled, the app won't send any request to backend and the invalid fields will be heighlighted;
2. "Full Name" needs to be at least 3 characters long, "Email" needs to be in
validated email format and "Confirm Email" needs to match "Email", the app suppose to display the corresponding error message when any fields doesn't match the requests;
3. "Send" button works if all three fields valid. (send a post request to backend)
4. If request is success, another popup with success state should display, with "OK" button to close itself;
5. Use email address "usedemail@airwallex.com" to test with bad request, it should show up the error message passed from API.

## Available Scripts

In the project directory, you can run:

### `yarn`
Installs all required packages for running the app.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
