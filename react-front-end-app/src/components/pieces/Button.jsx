const Button = ({ onClick, id, className, disabled, text }) => {
    return (
        <>
            <button 
                onClick={onClick} 
                id={id} 
                className={className} 
                disabled={disabled}
            >{text}</button>
        </>
    );
};

export default Button;