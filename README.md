# Project-Information
**Full Stack Lab 2: DA219B VT24**

This lab is an academic excercise in building a full-stack application that interacts with both a front-end and back-end system. Here's a breakdown of the key components:

* **Front-End (React):** The application's user interface is created using React, a popular JavaScript library for building interactive web interfaces. React allows you to create reusable components that make your code more organized and maintainable.
* **Back-End (Express.js and MongoDB):** The application's server-side logic is handled by Express.js, a Node.js web framework that simplifies creating web applications. It serves as the middle layer between the user interface and the database. The data is stored in a MongoDB database, a NoSQL database known for its flexibility and scalability.

**Lab Setup:**

1. **Clone the Repository:** Obtain the project files by cloning the repository that contains the lab code.
2. **Set Up the Development Environment:**
   - Unzip the downloaded files.
   - Open the project folder in a code editor of your choice, such as Visual Studio Code (VS Code).
   - Open a terminal window within the project's root directory.
3. **Install Dependencies:**
   - Run the command `npm install` in the terminal to install the necessary dependencies (libraries) for the project to function. This process might take a few minutes.
   - Change directory to the `client` folder within the project structure.
   - Run `npm install` again to install dependencies specifically required for the React front-end.
4. **Run the Application:**
   - Navigate back to the project's root directory in the terminal.
   - Run the command `npm run dev` to start the development server for the React front-end. This will typically launch a local web browser window to display the application.
   - In a separate terminal window (or tab), run the command `npm start` to start the Express.js server for the back-end.

**Access the Application:**

Once you've followed the setup steps, open your web browser and navigate to http://localhost:5000/. This should display the front-end of your full-stack application.

**Additional Notes:**

- Vite.js, a modern bundler, is used in this lab instead of Webpack, which is another common bundler option. Vite.js offers faster development server startup times due to its pre-bundling capabilities.
- The back-end server's database is pre-populated with three collections, each containing five documents. These collections and documents represent the data that your application will interact with.
