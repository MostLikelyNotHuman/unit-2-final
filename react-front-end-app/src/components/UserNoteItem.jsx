import Button from "./pieces/Button";
import { useState } from "react";

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
            <li id={noteId}>
                <div 
                    id="user-note-item"
                    hidden={listItemVisible}
                >{noteContent}</div>
                <div hidden={!listItemVisible}>
                    <textarea 
                        id="user-note-edit-body"
                        value={noteContent}
                        required
                        onChange={(e) => handleChange(setNoteContent, e.target.value)}>
                    </textarea>
                    <div hidden={!listItemVisible}>
                        {`${noteContent.length}/250 ${noteContent.length > 250 ? 'Too long!' : ''}`}
                    </div>
                </div>

                <Button
                    id="edit-list-item"
                    text={editButtonText}
                    onClick={() => {
                        if(listItemVisible) {
                            if (noteContent.length <= 250) {
                                setListItemVisible(false);
                                setEditButtonText("Edit");
                                updateNote();
                            }
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