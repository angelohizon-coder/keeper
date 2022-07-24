import React from "react";

function NoteTemplate(note) {
    function onClick(event) {
        note.getIndex(note.id);
    }

    return(
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <div className="submit-button">
                <button className="button" type="submit" onClick={onClick}>Delete</button>
            </div>
        </div>
    );
}

export default NoteTemplate;