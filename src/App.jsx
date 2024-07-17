import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function List(props) {
    if(!props.animalList) {
        return <div>Loading...</div>;
    }
    
    return (
        <ul>
            {props.animalList.map(animal => {
                return <li key={animal} a="1" animalVar={animal}>{animal}</li>;
            })}
        </ul>
    )
}

function App() {
    const animals = ["Lions", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals</h1>
            <List animalList={animals} />
        </div>
    );
}

export default App;
