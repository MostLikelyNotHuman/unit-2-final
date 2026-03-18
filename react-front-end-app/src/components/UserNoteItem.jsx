import Button from "./pieces/Button";
import { useState } from "react";
import './UserNoteItem.css';

const UserNoteItem = ({ userNote, setUserNotes, noteId}) => {

    const [ listItemVisible, setListItemVisible ] = useState(false);
    const [ editButtonText, setEditButtonText ] = useState("Edit");
    const [ noteContent, setNoteContent ] = useState(userNote.noteBody);

    const handleChange = (field, value) => {
        field(value);
    }

    const removeListItem = () => {
        fetch(`http://localhost:8080/users/user-notes/${noteId}`, {
            method: "DELETE"
        })
        .then(() => {
            setUserNotes(existingNotes => existingNotes.filter(n => n.id !== noteId));
        })
    }

    const updateNote = () => {
        fetch(`http://localhost:8080/users/1/user-notes/${noteId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 1,
                noteBody: noteContent
            })
        }).then(function(response) {
            return response.json();
        }).then(function(response) {
            setUserNotes(existingNotes => existingNotes.map(n => n.id === noteId ? { ...n, noteBody: response.noteBody } : n));
        })
    }

    return (
        <>
            <li 
            id={noteId}
            >
                <div id="user-note-item"
                hidden={listItemVisible}
                >{noteContent}</div>
                <div
                hidden={!listItemVisible}
                >
                    <input type="text" 
                    value={noteContent}
                    id="user-note-edit-body"
                    onChange={(e) => handleChange(setNoteContent, e.target.value)}
                    />
                </div>

                <Button
                    id="edit-list-item"
                    text={editButtonText}
                    onClick={() => {
                        if(listItemVisible) {
                            setListItemVisible(false);
                            setEditButtonText("Edit");
                            updateNote();
                        } else {
                            setListItemVisible(true);
                            setEditButtonText("Save");
                        }
                    }}            
                />
                <Button
                    id="remove-list-item"
                    text="Remove"  
                    onClick={removeListItem}                                 
                />
            </li>
        </>
    )
}

export default UserNoteItem;