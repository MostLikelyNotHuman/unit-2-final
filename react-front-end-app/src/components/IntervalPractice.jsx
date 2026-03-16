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

    async function retrieveQuestion() {

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


        let notes = await fetch("http://localhost:8080/notes")
            .then(function(response) {
                return response.json();
            })

        for (let i = 0; i < 2; i++) {
            const correctRNG = Math.floor(Math.random() * notes.length);
            const newNote = notes[correctRNG];
            notes.splice(correctRNG, 1);
            valueCompare.push(newNote);
            images.push(newNote.imageurl);
        }

        if (valueCompare[0].pitch < valueCompare[1].pitch) {
            images.reverse();
        }

        setQuestionImage(images);
        correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);
        console.log(correctValue);

        let intervals = await fetch("http://localhost:8080/intervals")
            .then(function(response) {
                return response.json();
            })

        console.log(intervals);
        intervals.splice(0,1);

        console.log("correctAnswer before loop:", correctAnswer.current);
        for (let i = 0; i < intervals.length; i++) {
            console.log(intervals[i].size, typeof intervals[i].size, correctValue,  typeof correctValue)
            console.log(intervals.map(i => i.size));
            
            if (intervals[i].size === correctValue) {
                answersArray.push(intervals[i]);
                correctAnswer.current = intervals[i].name;
                intervals.splice(i, 1);
                break;
            }
        }

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