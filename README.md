## React-16 Redux Typescript Boilerplate
This is a react, redux and typescript boilerplate. We are using the latest-stable react 16 version, redux, typescript and react-router-dom as router. 
React, react-router-dom, typescript, redux store, reducers everything has been setted up. We are using our custom middleware 
to make the async api calls which is very easy to use. 
You can jump into your project just in 2 minutes, all you have to do is, follow the below steps. 

### To run the project: 
1. clone it
2. run `npm install`
3. `npm start` (In package.josn you can change the REACT_APP_API_ENV varibale to LOCAL || UAT || PROD to run as the corresponding environment)

### Project setup
After you have succesfully ran the project you can go to the `config.ts` file in the src folder. You will find 3 env setup there. You can add your webUrl where your project will run and also add your base api url.

### To build the project:
To make a production build, you will run `npm run build:prod`
To make a uat build, you will run `npm run build:uat`

*P.S: If your build is failing in the server due to warnings (Because of treating warning as errors) you can add CI=false in your build command and it will resolve the issue.

AND HERE YOU GO... All set to work on your project.
