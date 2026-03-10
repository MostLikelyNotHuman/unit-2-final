import './Footer.css';

const Footer = () => {

    return (
        <footer>
            &copy; Danny Hook {(new Date().getFullYear())} | Website <a href="https://github.com/MostLikelyNotHuman/unit-1-final"> source code</a>
        </footer>
    );
};

export default Footer;