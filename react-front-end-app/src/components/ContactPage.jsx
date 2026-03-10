import { useState } from "react";
import "./ContactPage.css";
import Button from "./pieces/Button";
import Divider from "./pieces/Divider";

const ContactPage = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ feedbackType, setFeedbackType ] = useState('');
    const [ error, setError ] = useState('');
    const [ feedback, setFeedback ] = useState('');
    const [ isFeedbackSubmitted, setIsFeedbackSubmitted ] = useState(false);
    const [ isSending, setIsSending ] = useState(false);

    const handleChange = (field, value) => {
        field(value);
    }
    
    const emailValidation = /^\S+@\S+\.\S+$/; //Super simple regex for email format
    
    const verifyInput = () => {
        setIsFeedbackSubmitted(false);
        if (!name) {
            return setError('Please enter your name.')
        } else if (!emailValidation.test(email)) {
            return setError('Please enter a valid email address.')
        } else if (feedbackType === '') {
            return setError('Please select the type of feedback.')
        } else if (feedback.length < 25) {
            return setError('Please enter at least 25 characters of feedback.')
        }

        confirmSubmission();
    }

    const confirmSubmission = () => { //Simulation of sending the data to a server
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setIsFeedbackSubmitted(true);
            setError('');
            setName('');
            setEmail('');
            setFeedbackType('');
            setFeedback('')
        }, "2000");
    }

    return (
        <main className="contactPage-main">
            <h3>Contact Form</h3>
            <p>Want to provide feedback? Report a bug or error? Just say hello?
                Fill out the form below and I'll get back to you as soon as possible.</p>
            <Divider />
            <form id="contact-form">
                <fieldset>
                    <legend>Your Information</legend>
                    <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            id="name"
                            required
                            onChange={(e) => handleChange(setName, e.target.value)}
                        />
                    <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            value={email}
                            id="email"
                            placeholder="yourname@example.com"
                            required
                            onChange={(e) => handleChange(setEmail, e.target.value)}
                        />
                </fieldset>
                <fieldset>
                    <legend>Feedback</legend>
                    <label htmlFor="feedback-type">Type of Feedback</label>
                        <select id="feedback-type" required onChange={(e) => handleChange(setFeedbackType, e.target.value)}>
                            <option value="">Select...</option>
                            <option value="general-feedback">General Feedback</option>
                            <option value="report-bug">Report a Bug</option>
                            <option value="report-error">Report an Error</option>
                        </select>
                    <label htmlFor="text-area">Feedback:</label>
                        <textarea 
                            id="text-area"
                            value={feedback}
                            required
                            placeholder="Please enter at least 25 characters..."
                            onChange={(e) => handleChange(setFeedback, e.target.value)}>
                        </textarea>
                </fieldset>
                <Button 
                    id="feedback-submit" 
                    text="Submit" 
                    onClick={(e) => {
                        e.preventDefault();
                        verifyInput();
                    }} />
            </form>
            <div id="feedback-result"> 
                {error && 
                    <div id="error-message"> 
                        <p>{error}</p>
                    </div>
                }
                {isSending &&
                    <div>
                        <p>Sending...</p>    
                    </div>
                }
                {isFeedbackSubmitted && !isSending &&
                    <div id="feedback-confirmation">
                        <p>Thank you for your feedback! I'll get back to you as soon as possible!
                        </p>
                    </div>
                }
            </div>
        </main>        
    );
}

export default ContactPage;