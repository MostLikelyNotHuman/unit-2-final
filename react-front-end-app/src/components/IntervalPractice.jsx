import { useEffect, useRef, useState } from "react";
import QuizBoxIntervals from "./pieces/QuizBoxIntervals";

const IntervalPractice = ({ intervalsReview, setIntervalsReview, isLoggedIn }) => {

    const [ questionImage, setQuestionImage ] = useState([]);
    const [ answers, setAnswers ] = useState([]);
    const correctAnswer = useRef('');
    const [ correctAnswerObject, setCorrectAnswerObject ] = useState([]);
    const [ selected, setSelected ] = useState(null);
    const [ answerDisabled, setAnswerDisabled ] = useState(false);

    async function retrieveQuestion() {

        let valueCompare = [];
        let correctValue;
        let images = [];
        let answersArray = [];
        correctAnswer.current = '';

        let notes = await fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })

            // Grab two note objects to compare
        for (let i = 0; i < 2; i++) {
            const correctRNG = Math.floor(Math.random() * notes.length);
            const newNote = notes[correctRNG];
            notes.splice(correctRNG, 1);
            valueCompare.push(newNote);
            images.push(newNote.imageURL);
        }

            // Reverse array for proper formatting in quizbox
        if (valueCompare[0].pitch < valueCompare[1].pitch) {
            images.reverse();
        }

        setQuestionImage(images);
        correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);

        let intervals = await fetch("http://localhost:8080/intervals")
            .then(function(response) {
                return response.json();
            })

        intervals.splice(0,1);

        // Assigning correct object to correctAnswer and correctAnswerObject to pass down
        for (let i = 0; i < intervals.length; i++) {            
            if (intervals[i].size === correctValue) {
                answersArray.push(intervals[i]);
                correctAnswer.current = intervals[i].name;
                setCorrectAnswerObject(intervals[i]);
                intervals.splice(i, 1);
                break;
            }
        }

        // Generate incorrect answers
        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * intervals.length);
            let incorrectAnswer = intervals[incorrectRNG];
            answersArray.push(incorrectAnswer);            
            intervals.splice(incorrectRNG, 1);
        }

        answersArray.sort(() => Math.random() - 0.5);
        setAnswers(answersArray); 
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