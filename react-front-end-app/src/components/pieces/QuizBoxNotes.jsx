import { useState } from "react";
import Button from "./Button";
import './QuizBoxNew.css'

const QuizBoxNotes = ({ questionText, questionImage, answers, correctAnswer, correctAnswerObject, selected, onSelect, notesReview, setNotesReview, nextClick, isLoggedIn }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');

    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                {console.log(questionImage)}
                <img src={questionImage}></img>
            </div>
            <div id="next-div">
                <Button onClick={() => {
                    if(isLoggedIn) {
                        const userReviewNotes = fetch("http://localhost:8080/users/1/notes")
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(json) {
                                console.log(json);
                                if (!json.find((problem) => problem.id === correctAnswerObject.id)) {
                                    console.log(correctAnswerObject);
                                    fetch(`http://localhost:8080/users/1/notes/${correctAnswerObject.id}`, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            correctAnswer
                                        }),
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    })
                                }
                            })
                        }
                    }
                } 
                id={'add-review-button'}
                text={'Add to Review'}/>
                <Button onClick={() => {
                    nextClick();
                    setAnswerDisabled(false);
                    setNextDisabled(true);
                    setNextId('next-button-disabled')
                }}
                id={nextId}
                disabled={nextDisabled}
                text={"New Question ->"}/>
            </div>
            <div id="question-answers">
               {answers.map((a) => { //Maps four answers, adds styling for correct and incorrect answers once clicked on 
                    let className = "answer";

                    if (selected) {
                        if (a.text === correctAnswer) className += "-correct";
                        else if (a === selected) className += "-incorrect";
                    }

                    return (
                        <Button
                            key={a.id}
                            id={a.id}
                            text={a.text}
                            className={className}
                            disabled={answerDisabled}
                            onClick={() => {
                                onSelect(a);
                                setAnswerDisabled(true);
                                setNextDisabled(false);
                                setNextId('next-button')
                                }
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default QuizBoxNotes;