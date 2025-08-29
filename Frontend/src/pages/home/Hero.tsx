import heroImg from "../../assets/homeHero.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container text-center py-5 min-vh-100">
      <img
        src={heroImg}
        alt="Hero"
        className="img-fluid mx-auto d-block mb-5"
        style={{ maxWidth: "996px", height: "auto" }}
      />

      <h1 className="display-4 fw mb-3">Invest in everything</h1>
      <p className="lead text-muted mb-4">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <Button as="a" variant="primary" size="lg" className="mt-4 custom-hover">
          <Link to="/signup">Sign up for free</Link>
      </Button>
    </div>
  );
}
