# Requirements:

- Install NodeJS: https://nodejs.org/en/

# BACKEND ENVIRONMENT.

First you have to install your backend environment.

- Create a folder `images`.
- Create a `.env` file in which you have to create 3 const:
  PORT= "the port to run your server"
  MONGO= if you have an account, create a database and configure it with your ID.
  If you haven't one, you can use this path: mongodb+srv://Admin:0b1m5nc5bhTxaETd@characters.0ofqprr.mongodb.net/?retryWrites=true&w=majority
  PassJWT = "your secret key".

# Install the server

Be sure to be in the folder `backend`.
Open a new terminal and then write `npm install`.

# Run the server

To run the server write `nodemon server` or `node server` in your terminal.

# FONTEND ENVIRONMENT

# Install the server

Be sure to be in the folder `frontend`.
Open a new terminal and then write `npm install `

# Define the path

Go to the folder `src`, then go to the folder `utils` and select the file `path.js` and check if the `const local`is the good one. If it isn't change it with your host.

Please, don't touche the others const, it could broke the app.

### `npm start`

To run the server.

# INSTRUCTIONS

On this app, you can create an account, and log yourself. Then, you have a home page on which some cards about video game characters are displayed. The user who creates this cards can update/delete them. If you're not the good user you can't.
You can also create your cards with the button "+".

You can also log yourself with metamask, you just have to click on the logo and select your account. (You have to have a metamask account...).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
