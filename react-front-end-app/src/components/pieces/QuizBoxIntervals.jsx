import { useEffect, useState } from "react";
import Button from "./Button";
import './QuizBoxNew.css';

const QuizBoxIntervals = ({ questionText, questionImage, answers, correctAnswer, selected, onSelect, intervalsReview, setIntervalsReview, nextClick }) => {

    const [ answerDisabled, setAnswerDisabled ] = useState(false);
    const [ nextDisabled, setNextDisabled ] = useState(true);
    const [ nextId, setNextId ] = useState('next-button-disabled');
    const [ stylingId, setStylingId ] = useState([]);
        
    useEffect(() => { //Orders the images in the second intervals so the lower one is always on the left
        if (correctAnswer === 'Major Second' || correctAnswer === 'Minor Second') {
            setStylingId(['image1-offset', 'image2-offset']);
        } else {
            setStylingId(['image1', 'image2']);
        }
    }, [correctAnswer])

    return (
        <div id='quizBox'>
            <h4>{questionText}</h4>
            <div id="question-content">
                {questionImage.map((image, i) => { //Maps two images
                    return (
                        <img src={image} key={i} id={stylingId[i]}></img>
                    )
                })}
            </div>
            <div id="next-div">
                <Button onClick={() => {
                    if (!intervalsReview.find((problem) => problem === correctAnswer)) {
                        setIntervalsReview([...intervalsReview, correctAnswer])
                    }
                }} 
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

export default QuizBoxIntervals;