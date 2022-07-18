import React from 'react'; // 'react' refers to file in node modules folder, does not need ./
import ReactDOM from 'react-dom'; // employs render method to inject js into DOM 'root'

// When you are using create-react-app through gitBash, there are certain errors that pop up for ESlint
// and BaseConfig. Use VSCode terminal to circumnavigate this.
const Greeting = () => {
  return (
    <h4>this is Aaron and this is my first component, check</h4>
  )
}

ReactDOM.render(<Greeting />,document.getElementById('root'));