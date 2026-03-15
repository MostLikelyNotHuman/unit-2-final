import { useFormState } from "react-dom";
import QuizBoxNotes from "./pieces/QuizBoxNotes";
// import { notes } from "../assets/notes";
import { useEffect, useState, useRef } from "react";

const NotePractice = ({ notesReview, setNotesReview, isLoggedIn }) => {

    const [ questionImage, setQuestionImage ] = useState(null);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [ correctAnswerObject, setCorrectAnswerObject ] = useState([]);
    const [selected, setSelected] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    
    const retrieveQuestion = () => {
        // let editedNotes = [...notes]; 
            // - copying full notes array into duplicate to edit
        // editedNotes.splice((editedNotes.length-1), 1);
            // - removing high C
        // const correctRNG = Math.floor(Math.random() * editedNotes.length);
            // - generates random number between 0 and length of edited notes array
        // const newQuestion = editedNotes[correctRNG];
            // - selects question by index with random number
        // editedNotes.splice(correctRNG, 1);
            // - removes correct answer from answers array
        // correctAnswer.current = newQuestion.text;
            // - ?

        let notes = fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                json.splice((json.length-1), 1);
                const correctRNG = Math.floor(Math.random() * json.length);
                const newQuestion = json[correctRNG];
                setCorrectAnswerObject(newQuestion);
                json.splice(correctRNG, 1);
                console.log(newQuestion);
                correctAnswer.current = newQuestion.text;

                let answersArray = [newQuestion];
                setQuestionImage(newQuestion.imageurl);

                for (let i = 0; i < 3; i++) {
                    // generates three incorrect answers
                    let incorrectRNG = Math.floor(Math.random() * json.length);
                            // - generates random number between 0 and length of edited notes array
                    let incorrectAnswer = json[incorrectRNG];
                            // - selects incorrect answer by index with random number
                    answersArray.push(incorrectAnswer);    
                            // - adds incorrect answer to the answers array shown to the user        
                    json.splice(incorrectRNG, 1);
                            // - removes incorrect answer from edited array
                    }
                answersArray.sort(() => Math.random() - 0.5);
                    // random sort answers
                setAnswers(answersArray);
                    // setanswers usestate
            })












            // retrieving full notes array into 'notes' to edit
        // notes.splice((notes.length-1), 1);
        //     // removing high c? not sure why i did this
        // const correctRNG = Math.floor(Math.random() * notes.length);
        //     // - generates random number between 0 and length of edited notes array
        // const newQuestion = notes[correctRNG];
        //     // - selects question by index with random number
        // notes.splice(correctRNG, 1);
        //     // - removes correct answer from answers array
        // correctAnswer.current = newQuestion.text;
        //     // - ?










        // let answersArray = [correctAnswer.current];
            // - adds correct answer to array to show to user
        // setQuestionImage(newQuestion.img);
            // - sets image shown to user to image retrieved from correct answer

        // for (let i = 0; i < 3; i++) {
            // generates three incorrect answers
        //     let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
                    // - generates random number between 0 and length of edited notes array
        //     let incorrectAnswer = editedNotes[incorrectRNG];
                    // - selects incorrect answer by index with random number
        //     answersArray.push(incorrectAnswer.text);    
                    // - adds incorrect answer to the answers array shown to the user        
        //     editedNotes.splice(incorrectRNG, 1);
                    // - removes incorrect answer from edited array
        //     }
        // answersArray.sort(() => Math.random() - 0.5);
            // random sort answers
        // setAnswers(answersArray);
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