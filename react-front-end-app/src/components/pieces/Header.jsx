import { Link } from "react-router";
import Button from "./Button";
import './Header.css';
import { routes } from "./Routes";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = ({ isLoggedIn, setIsLoggedIn, reviewMode, setReviewMode, reviewModeText, setReviewModeText }) => {

    const [ hamburgerOpen, setHamburgerOpen ] = useState(false);

    return (
        <>
            <header>
                <title>Music for Beginners</title>
                <div id="header-home-link">
                    <Link to={'/'}>
                        <Button text={'MUSIC'} />
                    </Link>
                </div>
                <div id='header-nav-links'>
                    {routes.map((route) => {
                        const { link, text } = route;
                        return (
                            <Link to={link}>
                                <Button text={text}/>  
                            </Link>
                        );
                    })}
                </div>
                <div id="login-button-div">
                    <Button text={!isLoggedIn ? "Log In" : "Log Out"}
                        onClick={() => {
                            !isLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
                            reviewMode && setReviewMode(false);
                            setReviewModeText("Review Mode OFF");
                        }}/>
                </div>
                <div id="hamburger-menu-div">
                    <Hamburger toggled={hamburgerOpen} size={70} toggle={setHamburgerOpen} />
                </div>
            </header>
        </>
    );
}

export default Header;