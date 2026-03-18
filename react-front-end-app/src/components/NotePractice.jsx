import { useFormState } from "react-dom";
import QuizBoxNotes from "./pieces/QuizBoxNotes";
// import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";

const NotePractice = ({ notesReview, setNotesReview, isLoggedIn, reviewMode, setReviewMode }) => {

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
           
        // console.log(notes);
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
            console.log(generated);
            answersArray.push(generated);
            notes.splice(generated.id - 1, 1);
        }

        for (let i = 0; i < 3; i++) {
                    // generates three incorrect answers
            let incorrectRNG = Math.floor(Math.random() * notes.length);
                    // - generates random number between 0 and length of edited notes array
            let incorrectAnswer = notes[incorrectRNG];
                    // - selects incorrect answer by index with random number
            answersArray.push(incorrectAnswer);    
                    // - adds incorrect answer to the answers array shown to the user        
            notes.splice(incorrectRNG, 1);
                    // - removes incorrect answer from edited array
            }
        answersArray.sort(() => Math.random() - 0.5);
            // random sort answers
        setAnswers(answersArray);
                // setanswers usestate
        
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
                nextClick={() => {
                    setSelected(null);
                    retrieveQuestion();
                    setAnswerDisabled(false)
                    }
                }
            />
        </main>
    );
};

export default NotePractice;