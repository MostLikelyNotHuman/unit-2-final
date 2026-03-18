import Button from "./pieces/Button"

const UserReviewItem = ({ deleteEndpoint, setFunction, reviewItemId, reviewItemText }) => {

    const removeListItem = () => {
        fetch(`${deleteEndpoint}`, {
            method: "DELETE"
        })
        .then(() => {
            setFunction(list => list.filter(item => item.id !== reviewItemId))
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
