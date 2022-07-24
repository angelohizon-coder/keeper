import React, { useState } from "react";

function Input(props) {
    var [input, changeInput] = useState({title: "", content: ""})

    function handleInput(event) {
        var {name, value} = event.target;
        changeInput(function(previousValue) {
            if(name === "title") {
                return {title: value, content: previousValue.content}
            } else {
                return {title: previousValue.title, content: value}
            }
        });
    }

    function onClick(event) {
        event.preventDefault();
        props.addItem(input);
    }

    return (
        <div className="input-div">
            <input type="text" placeholder="Title" name="title" onChange={handleInput} value={input.title} className="input"/>
            <textarea placeholder="Take a note..." name="content" onChange={handleInput} value={input.content} className="input"/>
            <div className="submit-button">
                <button className="button" type="submit" onClick={onClick}>Add</button>
            </div>
        </div>
    );
}

export default Input;