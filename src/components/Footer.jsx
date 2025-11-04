import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    &copy; {currentYear} RecipeFinder App. All Rights Reserved.
                </p>
                <p className="footer-attribution">
                    Develop by the <a href="https://hathisathissara.unaux.com" target="_blank" rel="noopener noreferrer">Hathisa Thissara</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;