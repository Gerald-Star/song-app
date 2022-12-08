
TOPIC COVERED IN THIS PROJECT
Passing props from parent component to child component
Working with Events and States
Listening to event/listen to even changes
Using Two way binding to control component- a value selected from the dropdwon child component is passed to the parent component/receieved from the parent component.
Passing data from child component to t parent using the Lift the State up approach
Working with State to update the state.

We add the NewExpense component in order to build a user input wehre users could be able to add their own expense input.

Created a ExpenseForm component to easily add the form inputs before rendering it. 


min="2010-01-10" max="2022-12-31" adding this year from this start is to enable for the yer filter to sgtart from there



Gathering user input as to which event prop you wanna listen to. 
Example- onChange event, onTimeUpdate event, onInput.

Here, making use of onChange prop event because you can use it for all other input types event dropdown.

Setting the function for the onChange prop is done at the top of the function and never inside the onChange prop

Passing the onChange prop event, React makes sure we get the event object when changes occurs. On the titleChangeHandler, event is passed on it to enable React detects an event- user input that occurs on the type text.


On the console, the target: input holds the value property. 
Now, it is possible to console the event.target.value.

Consoling event.target.value enables to get the current value of the property that is enetered.

Using Multiple State in React over mering all to one State Approach and using spread operator


Adding Two Way Binding
We add the two way binding to enable us listen to the input and change back to the original inpput.

To add the two way binding on the input text, 
set the value prop property-changeTitle as a property.

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
