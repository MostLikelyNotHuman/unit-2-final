import Button from "./pieces/Button";
import { useEffect, useState } from "react";

const UserNoteItem = ({ userNote, setUserNote, userNotes, setUserNotes, newUserNote, setNewUserNote, key, noteId}) => {

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
            setUserNotes(list => list.filter(n => n.id !== noteId));
        })
    }

    return (
        <>
            <li 
            key={key}
            id={noteId}
            >
                <div
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
                            fetch(`http://localhost:8080/users/1/user-notes/${noteId}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    userId: 1,
                                    noteBody: noteContent
                                })
                            })
                            
                            let updatedUserNotes = [...userNotes];
                            updatedUserNotes[userNote.id].noteBody = noteContent;
                            setUserNotes(updatedUserNotes);
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












            //                     {userNotes.map(userNote =>
            //                         <li key={`usernotes-${userNote.id}`} id={userNote.id}>
            //                             <div className="usernotes-item-editable">{userNote.noteBody}</div>
                                    
            //                             <Button 
            //                                 onClick={() => {
            //                                     let noteText = userNote.noteBody;
            //                                     let id = userNote.id;
            //                                 }}
            //                                 id="edit-list-item"
            //                                 text="Edit"
            //                             />
            //                         </li>
            //                     )}
            //                 </ul>
            //             </div> :
            //             <p>No user notes yet saved</p>
            //         }
            //         <input
            //             type="text" 
            //             value={newUserNote}
            //             id="user-note-body"
            //             onChange={(e) => handleChange(setNewUserNote, e.target.value)}
            //         />
            //         <Button 
            //             onClick={async(e) => {
            //                 if (newUserNote) {
            //                     const newNote = await fetch("http://localhost:8080/users/1/user-notes", {
            //                         method: "POST",
            //                         body: JSON.stringify({
            //                             noteBody: newUserNote
            //                         }),
            //                         headers: {
            //                             "Content-type": "application/json; charset=UTF-8"
            //                         }
            //                     }).then(function(response) {
            //                         return response.json();
            //                     })
            //                     setUserNotes(notes => [...notes, newNote]);
            //                     setNewUserNote("");
            //                 }}
            //             }
            //             id = "new-user-note-button"
            //             text = "Add User Note"
            //         />
            //     </>
            //     : <p>Please log in to store and view personal notes</p>            
            // }      




}


export default UserNoteItem;