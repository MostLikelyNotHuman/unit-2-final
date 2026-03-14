import Button from "./pieces/Button";
import { useEffect, useState } from "react";
import './ReviewPage.css';

const ReviewPage = ({ reviewNotes, setReviewNotes, reviewIntervals, setReviewIntervals, isLoggedIn, setIsLoggedIn }) => {
    
    const [ userNotes, setUserNotes ] = useState([]);
    const [ newUserNote, setNewUserNote ] = useState('');

    const handleChange = (field, value) => {
        field(value);
    }

    const removeListItem = (id) => {
        console.log(id);
        fetch(`http://localhost:8080/users/notes/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setUserNotes(list => list.filter(userNote => userNote.id !== id));
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/users/1")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                setReviewNotes(json.noteReview); 
                setReviewIntervals(json.intervalReview);
            })  
        fetch("http://localhost:8080/users/1/notes")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                setUserNotes(json || [])
            })
    }, []);
  
    return (
        <main className="review-list">
            <h3>Review!</h3>
            <p>Here you can find a list of everything you've added to your review list! 
                Brush up on your skills on the problems you've added to solidify your knowledge!
                As a reminder, you can find images of all the notes and intervals available in the 
                exercises here on the help page.</p>
            <h4>Notes Review: </h4>

            {isLoggedIn ? 
                <>
                    {reviewNotes.length ?
                        <div id="review-notes">
                            <ul>
                                {reviewNotes.map(problem => <li key={problem}>{problem}</li>)}
                            </ul>
                            <Button
                                text={'Clear Notes Review'}
                                onClick={() => {
                                    setReviewNotes([]);
                                }}
                            /> 
                        </div> :
                        <p>Nothing to review!</p>
                    }
                </>
                : <p>Please log in to store and view note review</p>
            }
            
            <h4>Intervals Review: </h4>

            {isLoggedIn ?
                <>
                    {reviewIntervals.length ?
                        <div id="review-intervals">
                            <ul>
                                {reviewIntervals.map(problem => <li key={problem}>{problem}</li>)}
                            </ul>
                            <Button
                                text={'Clear Intervals Review'}
                                onClick={() => {
                                    setReviewIntervals([]);
                                }}
                            /> 
                        </div> :
                        <p>Nothing to review!</p>
                    }
                </>
                : <p>Please log in to store and view interval review</p>
            }

            <h4>User Notes: </h4>

            {isLoggedIn ?
                <>
                    {userNotes.length ? 
                        <div id="user-notes">
                            <ul>
                                {console.log(userNotes)}
                                {userNotes.map(userNote =>
                                    <li key={userNote.id} id={userNote.id}>
                                        {userNote.noteBody}
                                        <Button
                                            onClick={() => {
                                                removeListItem(userNote.id);
                                            }}
                                            id="remove-list-item"
                                            text="Remove"                                        
                                        />
                                    </li>
                                )}
                            </ul>
                        </div> :
                        <p>No user notes yet saved</p>
                    }
                    <textarea
                        type="text" 
                        value={newUserNote}
                        id="user-note-body"
                        placeholder="Enter new note here..."
                        onChange={(e) => handleChange(setNewUserNote, e.target.value)}
                    />
                    <Button 
                        onClick={async(e) => {
                            if (newUserNote) {
                                const newNote = await fetch("http://localhost:8080/users/1/notes", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        noteBody: newUserNote
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                }).then(function(response) {
                                    return response.json();
                                })
                                setUserNotes(notes => [...notes, newNote]);
                                setNewUserNote("");
                            }}
                        }
                        id = "new-user-note-button"
                        text = "Add User Note"
                    />
                </>
                : <p>Please log in to store and view personal notes</p>            
            }      
        </main>
    );

}


export default ReviewPage;