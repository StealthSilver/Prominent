import { Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div className="container text-center py-5 min-vh-100">
      <h3 className="mt-5 mb-3 text-muted">
        Open a free demat and trading account online
      </h3>

      <p className="text-muted mb-4">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>

      <Button as="a" variant="primary" size="lg" className="mt-4 custom-hover">
        Sign up for free
      </Button>
    </div>
  );
}
