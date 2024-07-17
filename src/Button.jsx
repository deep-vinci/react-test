function Button({ text = 'Click me!', color = 'blue', fontSize = 12}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button style={buttonStyle}>{text}</button>
    );
}

export default Button;