import { intervals } from "../assets/intervals";
// import { notes } from "../assets/notes";
import { useEffect, useRef, useState } from "react";
import QuizBoxIntervals from "./pieces/QuizBoxIntervals";

const IntervalPractice = ({ intervalsReview, setIntervalsReview }) => {

    const [ questionImage, setQuestionImage ] = useState([]);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [selected, setSelected] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    const retrieveQuestion = () => {

        let valueCompare = [];
            // declaring comparison array
        let correctValue;
            // declaring correctValue
        let images = [];
            // declaring images array
        let answersArray = [];
            // declaring answers array
        correctAnswer.current = '';
            // setting correct answer text

        let notes = fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json)
                for (let i = 0; i < 2; i++) {
                    const correctRNG = Math.floor(Math.random() * json.length);
                    const newNote = json[correctRNG];
                    json.splice(correctRNG, 1);
                    valueCompare.push(newNote);
                    images.push(newNote.imageurl);
                }
                if (valueCompare[0].pitch < valueCompare[1].pitch) {
                    images.reverse();
                }
                setQuestionImage(images);
                correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);
                console.log(correctValue);

            })
        let intervals = fetch("http://localhost:8080/intervals")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                json.splice(0,1);
                for (let i = 0; i < json.length && !correctAnswer.current; i++) {
                    console.log(json[i].size)
                    if (json[i].size === correctValue) {
                        answersArray.push(json[i]);
                        correctAnswer.current = json[i].name;
                        json.splice(i, 1);
                    }
                }
                for (let i = 0; i < 3; i++) {
                    let incorrectRNG = Math.floor(Math.random() * json.length);
                    let incorrectAnswer = json[incorrectRNG];
                    answersArray.push(incorrectAnswer);            
                    json.splice(incorrectRNG, 1);
                    }
                answersArray.sort(() => Math.random() - 0.5);
                setAnswers(answersArray); 
            })
 
        }




                            //     onClick={async(e) => {
                            // if (newUserNote) {
                            //     const newNote = await fetch("http://localhost:8080/users/1/user-notes", {
                            //         method: "POST",
                            //         body: JSON.stringify({
                            //             noteBody: newUserNote
                            //         }),
                            //         headers: {
                            //             "Content-type": "application/json; charset=UTF-8"
                            //         }
                            //     }).then(function(response) {
                            //         return response.json();
                            //     })
                            //     setUserNotes(notes => [...notes, newNote]);
                            //     setNewUserNote("");
                            // }}
    //     let editedNotes = [...notes];
            // retrieving full notes array into 'editednotes' to edit
    //     let valueCompare = [];
            // declaring comparison array
    //     let correctValue;
            // declaring correctValue
    //     let images = [];
            // declaring images array
    //     let answersArray = [];
            // declaring answers array
    //     correctAnswer.current = '';
            // setting correct answer text

    //     for (let i = 0; i < 2; i++) {
    //         const correctRNG = Math.floor(Math.random() * editedNotes.length);
    //         const newNote = editedNotes[correctRNG];
    //         editedNotes.splice(correctRNG, 1);
    //         valueCompare.push(newNote);
    //         images.push(newNote.img);
    //     }
    //     if (valueCompare[0].pitch < valueCompare[1].pitch) {
    //         images.reverse();
    //     }
    //     setQuestionImage(images);
    //     correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);

    //     let editedIntervals = [...intervals];
    //     editedIntervals.splice(0, 1);    
    //     for (let i = 0; i < editedIntervals.length && !correctAnswer.current; i++) {
    //         if (editedIntervals[i].size === correctValue) {
    //             answersArray.push(editedIntervals[i].name)
    //             correctAnswer.current = editedIntervals[i].name;
    //             editedIntervals.splice(i, 1);
    //         }
    //     }
        
    //     for (let i = 0; i < 3; i++) {
    //         let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
    //         let incorrectAnswer = editedIntervals[incorrectRNG];
    //         answersArray.push(incorrectAnswer.name);            
    //         editedIntervals.splice(incorrectRNG, 1);
    //         }
    //     answersArray.sort(() => Math.random() - 0.5);
    //     setAnswers(answersArray);        
    // }
    
    useEffect(() => {
        retrieveQuestion();
    }, [])

    return (
        <main className="intervalPracticeMain">
            <QuizBoxIntervals 
                questionText={'Practice - Intervals'} 
                questionImage={questionImage}
                answers={answers}
                correctAnswer={correctAnswer.current}
                intervalsReview={intervalsReview}
                setIntervalsReview={setIntervalsReview}
                selected={selected}
                onSelect={setSelected}
                answerDisabled={answerDisabled}
                nextClick={() => {
                    setSelected(null);
                    retrieveQuestion();
                    setAnswerDisabled(false)
                }}
            />
        </main>
    );
};

export default IntervalPractice;