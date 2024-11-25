const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
