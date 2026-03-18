import { intervals } from "../assets/intervals";
// import { notes } from "../assets/notes";
import { useEffect, useRef, useState } from "react";
import QuizBoxIntervals from "./pieces/QuizBoxIntervals";

const IntervalPractice = ({ intervalsReview, setIntervalsReview, isLoggedIn }) => {

    const [ questionImage, setQuestionImage ] = useState([]);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [ correctAnswerObject, setCorrectAnswerObject ] = useState([]);
    const [ selected, setSelected ] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    const retrieveQuestion = () => {

        let valueCompare = [];
        let correctValue;
        let images = [];
        let answersArray = [];
        correctAnswer.current = '';

        let notes = fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                for (let i = 0; i < 2; i++) {
                    const correctRNG = Math.floor(Math.random() * json.length);
                    const newNote = json[correctRNG];
                    json.splice(correctRNG, 1);
                    valueCompare.push(newNote);
                    images.push(newNote.imageURL);
                }
                    // Reverse array for proper formatting in quizbox
                if (valueCompare[0].pitch < valueCompare[1].pitch) {
                    images.reverse();
                }

                setQuestionImage(images);
                correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);
                console.log(correctValue);

                let intervals = fetch("http://localhost:8080/intervals")
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(json) {
                        json.splice(0,1);
                            // Assigning correct object to correctAnswer and correctAnswerObject to pass down
                        for (let i = 0; i < json.length; i++) {
                            if (json[i].size === correctValue) {
                                answersArray.push(json[i]);
                                correctAnswer.current = json[i].name;
                                setCorrectAnswerObject(json[i]);
                                json.splice(i, 1);
                                break;
                            }
                        }
                            // Generate incorrect answers
                        for (let i = 0; i < 3; i++) {
                            let incorrectRNG = Math.floor(Math.random() * json.length);
                            let incorrectAnswer = json[incorrectRNG];
                            answersArray.push(incorrectAnswer);            
                            json.splice(incorrectRNG, 1);
                        }

                        answersArray.sort(() => Math.random() - 0.5);
                        setAnswers(answersArray); 
                    })
            })       
    }
    
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
                correctAnswerObject={correctAnswerObject}
                intervalsReview={intervalsReview}
                setIntervalsReview={setIntervalsReview}
                selected={selected}
                onSelect={setSelected}
                answerDisabled={answerDisabled}
                isLoggedIn={isLoggedIn}
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