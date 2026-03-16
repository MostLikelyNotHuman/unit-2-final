import Button from "./pieces/Button"

const UserReviewItem = ({ deleteEndpoint, setFunction, reviewItemId, reviewItemText }) => {

    const removeListItem = () => {
        fetch(`${deleteEndpoint}`, { //pass through endpoint
            method: "DELETE"
        })
        .then(() => {
            setFunction(list => list.filter(item => item.id !== reviewItemId))
            //pass through setUserNotes or setUserIntervals
            // pass through id of each item
        })
    }

    return (
        <>
            <li id={reviewItemId}>
                {reviewItemText}
                <Button
                    id="remove-list-item"
                    text="Remove"  
                    onClick={removeListItem}                                 
                />
            </li>
        </>
    )
}

export default UserReviewItem;
