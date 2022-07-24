import React from "react";
import NoteTemplate from "./NoteTemplate";

function Note(props) {
    function createNote(note, index) {
        return (
            <NoteTemplate 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                getIndex={getIndex}   
            />
        );
    }

    function getIndex(input) {
        props.deleteItem(input);
    }

    return (
        <section>
            {props.array.map(createNote)}
        </section>
    );
}

export default Note;