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

        let editedNotes = [...notes];
        let valueCompare = [];
        let correctValue;
        let images = [];
        let answersArray = [];
        correctAnswer.current = '';

        for (let i = 0; i < 2; i++) {
            const correctRNG = Math.floor(Math.random() * editedNotes.length);
            const newNote = editedNotes[correctRNG];
            editedNotes.splice(correctRNG, 1);
            valueCompare.push(newNote);
            images.push(newNote.img);
        }
        if (valueCompare[0].pitch < valueCompare[1].pitch) {
            images.reverse();
        }
        setQuestionImage(images);
        correctValue = Math.abs(valueCompare[0].pitch - valueCompare[1].pitch);

        let editedIntervals = [...intervals];
        editedIntervals.splice(0, 1);    
        for (let i = 0; i < editedIntervals.length && !correctAnswer.current; i++) {
            if (editedIntervals[i].size === correctValue) {
                answersArray.push(editedIntervals[i].name)
                correctAnswer.current = editedIntervals[i].name;
                editedIntervals.splice(i, 1);
            }
        }
        
        for (let i = 0; i < 3; i++) {
            let incorrectRNG = Math.floor(Math.random() * editedNotes.length);
            let incorrectAnswer = editedIntervals[incorrectRNG];
            answersArray.push(incorrectAnswer.name);            
            editedIntervals.splice(incorrectRNG, 1);
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