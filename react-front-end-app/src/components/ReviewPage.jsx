import Button from "./pieces/Button";
import { useEffect, useState } from "react";
import './ReviewPage.css';

const ReviewPage = ({ reviewNotes, setReviewNotes, reviewIntervals, setReviewIntervals, isLoggedIn, setIsLoggedIn }) => {
    
    const [ userNotes, setUserNotes ] = useState([]);
    const [ newUserNote, setNewUserNote ] = useState('');

    const handleChange = (field, value) => {
        field(value);
    }

    useEffect(() => {
        const userData = fetch("http://localhost:8080/users/1")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                setReviewNotes(json.noteReview); 
                setReviewIntervals(json.intervalReview);
                setUserNotes(json.userNotes);
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
                                {userNotes.map(userNote =>
                                    <li key={userNote.id}>{userNote.noteBody}</li>
                                )}
                            </ul>
                        </div> :
                        <p>No user notes yet saved</p>
                    }
                    <input
                        type="text" 
                        value={newUserNote}
                        id="user-note-body"
                        onChange={(e) => handleChange(setNewUserNote, e.target.value)}
                    />
                    <Button 
                        onClick={(e) => {
                            const userData = fetch("http://localhost:8080/users/1")
                                .then(function(response) {
                                    return response.json();
                                })
                            fetch("http://localhost:8080/user-notes", {
                                method: "POST",
                                body: JSON.stringify({
                                    noteBody: newUserNote,
                                    user: {
                                        id: 1
                                    }
                                }),
                                headers: {
                                    "Content-type": "application/json; charset=UTF-8"
                                }
                            })
                            setNewUserNote("");
                        }}
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