import { useState } from "react";
import Button from "./Button";
import './QuizBoxNew.css'

const QuizBoxNotes = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, notesReview, setNotesReview, nextClick }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');

    return(
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                <img src={questionImage}></img>
            </div>
            <div id="next-div">
                <Button onClick={() => {
                    if (!notesReview.find((problem) => problem === correctAnswer)) {
                        setNotesReview([...notesReview, correctAnswer])
                    }
                }} 
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
                        if (a === correctAnswer) className += "-correct";
                        else if (a === selected) className += "-incorrect";
                    }

                    return (
                        <Button
                            key={a}
                            text={a}
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