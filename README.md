# **Project Name: vite-project**

This project, named "vite-project", is a modern web application built using Vite. It is designed to fetch and display data from the Poke API, providing users with information about various Pokemon. The project utilizes a range of development tools and dependencies, including eslint for linting, Jest for testing, and Husky for managing git hooks. The application is structured as a module and includes scripts for development, building, previewing, and testing.

## **Dev Dependencies**

- **Installation**: `npm install` - This command is used to install all the dependencies listed in your package.json file. It should be run in your project's root directory. After running this command, a node_modules folder will be created in your project's root directory, containing all your project's dependencies.

- **eslint**: ^8.50.0
- **eslint-config-airbnb-base**: ^15.0.0
- **eslint-plugin-import**: ^2.28.1
- **husky**: ^8.0.0
- **jest**: ^29.7.0
- **vite**: ^4.4.5

## **Scripts**

- **dev**: `npm run dev` - This command is used to start the development server provided by Vite. It enables hot-module replacement which makes it faster and easier to develop your application. You would typically use this command during the development phase of your project.

- **build**: `npm run build` - This command is used to create a production-ready build of your project. It optimizes your code for the best performance in a production environment. You would typically use this command when you are ready to deploy your project.

- **preview**: `npm run preview` - This command is used to preview the production build of your project. It serves the built app over a local server, so you can preview your project in the browser. This is useful for checking your work before deployment.

- **test**: `npm test` - This command is used to run your Jest tests. Jest is a testing framework for JavaScript, and this command will run any tests that you have defined in your project.

- **prepare**: `npm run prepare` - This command is used to prepare your project using Husky. Husky is a tool that can prevent bad git commit, git push, and more by running linters, tests, etc. on these events. You would typically use this command to ensure that your project is in a good state before committing or pushing to a repository.

