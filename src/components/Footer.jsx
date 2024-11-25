const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <p className="mb-1">&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
                <p className="mb-0">
                    Follow us on:
                    <a
                        href="https://facebook.com"
                        className="text-primary mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        className="text-info mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        className="text-danger mx-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
