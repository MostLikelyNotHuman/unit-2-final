import { useState } from "react";








const MobileHeader = ({ }) => {

    const [isOpen, setIsOpen ] = useState(false);

    return (
        <div id="hamburger-menu-div">
            <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        </div>
    );
}

export default MobileHeader;