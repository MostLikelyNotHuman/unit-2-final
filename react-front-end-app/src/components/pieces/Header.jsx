import { Link } from "react-router";
import Button from "./Button";
import './Header.css';

const Header = () => {

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
                    <Link to={'/practice-notes'}>
                        <Button text={'Notes'} />
                    </Link>
                    <Link to={'/practice-intervals'}>
                        <Button text={'Intervals'}/>    
                    </Link>
                    <Link to={'/review'}>
                        <Button text={'Review'}/>
                    </Link>
                    <Link to={"/help"}>
                        <Button text={'Help'}/>
                    </Link>
                    <Link to={"/contact"}>
                        <Button text={'Contact'}/>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;