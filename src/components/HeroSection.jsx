import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-primary text-white text-center d-flex align-items-center vh-100">
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to E-Shop</h1>
        <p className="lead">
          Discover the best collections curated just for you.
        </p>
        <Link to={"/app/collections"} className="btn btn-light btn-lg mt-3">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
