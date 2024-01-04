import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import "./index.css"

// DOM Element for React to attach to (must already exist within index.html)
const root = document.querySelector("#root");
// React replaces the content of the 'root' element with the rendered content of the 'App' element
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
