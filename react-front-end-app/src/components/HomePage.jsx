import { Link } from "react-router";
import Button from "./pieces/Button";
import './HomePage.css';
import Divider from "./pieces/Divider";

const HomePage = () => {
    return (
        <main className="homePage-main">
            <div id='homepage-intro'>
                <h2>Welcome to Music For Beginners!</h2>
                <p>Music For Beginners is an app designed to teach you the very basics 
                    of reading music. Here you'll find exercises to strengthen your ability 
                    to identify notes and intervals on the staff, with the goal of creating a solid 
                    foundation of skills for you to build on in the future!
                </p>
            </div>
            <Divider />
            <div id='homepage-starting-prompt'>
                <h3>Ready to get started?</h3>
                <p>Select any of the practices below.</p>
                <p>Note: All practices can also be accessed through the navigation bar at the top of the page.</p>
                <div id='homepage-starting-prompt-buttons'>
                    <Link to={'/practice-notes'}>
                        <Button text={'Notes'} />
                    </Link>
                    <Link to={'/practice-intervals'}>
                        <Button text={'Intervals'}/>    
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
