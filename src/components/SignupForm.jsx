const SignupForm = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Create a password" />
                </div>
                <div className="col-12">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
