import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Button from "./Button.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <Button />
        <Button text="Don't Click Me!" />
        <Button />
        <Greeting />
    </React.StrictMode>
);
