import Button from "./pieces/Button";
import './ReviewPage.css';

const ReviewPage = ({ reviewNotes, setReviewNotes, reviewIntervals, setReviewIntervals }) => {

    return (
        <main className="review-list">
            <h3>Review!</h3>
            <p>Here you can find a list of everything you've added to your review list! 
                Brush up on your skills on the problems you've added to solidify your knowledge!
                As a reminder, you can find images of all the notes and intervals available in the 
                exercises here on the help page.</p>
            <h4>Notes: </h4>
            {reviewNotes.length ?
                <div id="review-notes">
                    <ul>
                        {reviewNotes.map(problem => <li key={problem}>{problem}</li>)}
                    </ul>
                    <Button
                        text={'Clear Notes Review'}
                        onClick={() => {
                            setReviewNotes([]);
                        }}
                    /> 
                </div> :
                <p>Nothing to review!</p>
            }
            <h4>Intervals: </h4>
            {reviewIntervals.length ?
                <div id="review-intervals">
                    <ul>
                        {reviewIntervals.map(problem => <li key={problem}>{problem}</li>)}
                    </ul>
                    <Button
                        text={'Clear Intervals Review'}
                        onClick={() => {
                            setReviewIntervals([]);
                        }}
                    /> 
                </div> :
                <p>Nothing to review!</p>
            }
        </main>
    );

}


export default ReviewPage;