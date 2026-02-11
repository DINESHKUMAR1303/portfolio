import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} DINESH KUMAR M. All rights reserved.</p>
                <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
