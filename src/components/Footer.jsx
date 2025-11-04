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
                    Powered by the <a href="https://spoonacular.com/food-api" target="_blank" rel="noopener noreferrer">Spoonacular API</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;