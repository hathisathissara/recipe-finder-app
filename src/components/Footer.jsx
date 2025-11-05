import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-light shadow-sm py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-1 text-muted">
                    &copy; {currentYear} RecipeFinder App. All Rights Reserved.
                </p>
                <p className="footer-attribution text-muted">
                    Develop by <a href="https://hathisathissara.unaux.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Hathisa Thissara</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
