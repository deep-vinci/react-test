import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem(props) {
    return <li>{props.animalVar}</li>;
}

function List(props) {
    return (
        <ul>
            {props.animalList.map(animal => {
                return <ListItem key={animal} animalVar={animal} />;
            })}
        </ul>
    )
}

function App() {
    const animals = ["Lions", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animalList={animals} />
        </div>
    );
}

export default App;
