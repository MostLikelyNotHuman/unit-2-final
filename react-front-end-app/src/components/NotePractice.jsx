import QuizBoxNotes from "./pieces/QuizBoxNotes";
import { useEffect, useState, useRef } from "react";

const NotePractice = ({ notesReview, setNotesReview, isLoggedIn, reviewMode, setReviewMode, reviewModeText, setReviewModeText }) => {

    const [ questionImage, setQuestionImage ] = useState(null);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [ correctAnswerObject, setCorrectAnswerObject ] = useState([]);
    const [ selected, setSelected ] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);
      
    const generateCorrectAnswer = (notes) => {
        let correctRNG = Math.floor(Math.random() * notes.length);
        let newQuestion = notes[correctRNG];
        setCorrectAnswerObject(newQuestion);
        correctAnswer.current = newQuestion.text;
        setQuestionImage(newQuestion.imageURL);
        return newQuestion;
    }

    async function retrieveQuestion() {
        let answersArray = [];

        let notes = await fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })
           
        notes.splice((notes.length-1), 1);

        if (reviewMode && isLoggedIn) {
            let reviewModeNotes = await fetch("http://localhost:8080/users/1/notes")
                .then(function(response) {
                    return response.json();
                })
            let generated = generateCorrectAnswer(reviewModeNotes);
            for (let i = 0; i < notes.length; i++) {
                if (generated.id === notes[i].id) {
                    notes.splice(i, 1);
                    break;
                }
            }
            answersArray.push(generated);
        } else {
            let generated = generateCorrectAnswer(notes);
            answersArray.push(generated);
            notes.splice(generated.id - 1, 1);
        }

        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * notes.length);
            let incorrectAnswer = notes[incorrectRNG];
            answersArray.push(incorrectAnswer);    
            notes.splice(incorrectRNG, 1);
        }

        answersArray.sort(() => Math.random() - 0.5);
        setAnswers(answersArray);        
    }
    
    useEffect(() => {
        retrieveQuestion();
    }, [])
    
    return (
        <main className="notePracticeMain">
            <QuizBoxNotes 
                questionText={'Notes Practice'} 
                questionImage={questionImage}
                answers={answers}
                correctAnswer={correctAnswer.current}
                correctAnswerObject={correctAnswerObject}
                notesReview={notesReview}
                setNotesReview={setNotesReview}
                selected={selected}
                onSelect={setSelected}
                answerDisabled={answerDisabled}
                isLoggedIn={isLoggedIn}
                reviewMode={reviewMode}
                setReviewMode={setReviewMode}
                reviewModeText={reviewModeText}
                setReviewModeText={setReviewModeText}
                nextClick={() => {
                    setSelected(null);
                    retrieveQuestion();
                    setAnswerDisabled(false)
                }}
            />
        </main>
    );
};

export default NotePractice;