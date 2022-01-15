Interviews @ Avantrio
======================

Hey there!

Congratulations in making to the next round.  
Please keep in mind
- code quality matters
- think for sometime before you jump into the code, a bit of preperation would save you a lot of time later
- there will not be a time for refactoring, so write your best code
- given priority to implementing the design. We are looking for great frontend developers that understand our UX paradigm

God speed!


## Task

Your task is to implement a frontend app using React.js for the following specification.

1. You must only use React.js for implementing the web app with the following limitations.
- API calls - axios or similar
- State management - redux
- Routing - react-router

2. App consists of 2 pages
   **Login page** - User should be able to login using a username and a password
   **Dashboard page** - The design for the dashboard is given in the attached zip file

3. First task is to implement the 2 above pages. You can use any supporting CSS libraries.
- For the login page, you are free to implement any design.
- For the dashboard page, you must make it as much as similar to the given design set. The design PDF describes the intended actions and UI changes for each action as well.
  **Please note that we will be testing your ability to convert complex designs to HTML/CSS with responsive structures from the following. Moreover, we will test your technical competency in CSS.**

4. Second task is to connect the web app to the given demo backend. The endpoint for the backend is available from the postman link below  
   [https://www.getpostman.com/collections/9550beb3675e31c11242](https://www.getpostman.com/collections/9550beb3675e31c11242)

5. You need to connect to the following 3 API endpoints,  
   `/api/user/login` - to authenticate credentials and obtain an auth token  
   `/api/users` - to retrieve the list of users  
   `/api/user/<user id>/logs` - to retrieve the user logs

6. User list must be shown in the designated area in the screen.

7. On selecting a user, the logs must be retrieved from the API and shown in the designated area in the design.  

