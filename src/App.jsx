import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem(props) {
    console.log(props);

    return <li>{props.a}</li>;
}

function List(props) {
    console.log(props);
    return (
        <ul>
            {props.animalList.map(animal => {
                return <ListItem key={animal} a="1" animalVar={animal} />;
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
