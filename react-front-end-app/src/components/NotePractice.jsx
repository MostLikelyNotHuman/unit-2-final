import { useFormState } from "react-dom";
import QuizBoxNotes from "./pieces/QuizBoxNotes";
// import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";

const NotePractice = ({ notesReview, setNotesReview, isLoggedIn }) => {

    const [ questionImage, setQuestionImage ] = useState(null);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [ correctAnswerObject, setCorrectAnswerObject ] = useState([]);
    const [ selected, setSelected ] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    
    async function retrieveQuestion() {


        let notes = await fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })
           
        console.log(notes);
        notes.splice((notes.length-1), 1);
        const correctRNG = Math.floor(Math.random() * notes.length);
        const newQuestion = notes[correctRNG];
        setCorrectAnswerObject(newQuestion);
        notes.splice(correctRNG, 1);
        console.log(newQuestion);
        correctAnswer.current = newQuestion.text;

        let answersArray = [newQuestion];
        console.log(newQuestion);
        console.log(newQuestion.imageURL);
        setQuestionImage(newQuestion.imageURL);

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
                questionText={'Practice - Notes'} 
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