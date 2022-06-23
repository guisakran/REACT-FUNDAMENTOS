import reactDom from "react-dom";
import react from "react";

import './index.css'

import App from "./App";

const el = document.getElementById('root')

reactDom.render(
    <App />,
    el
)