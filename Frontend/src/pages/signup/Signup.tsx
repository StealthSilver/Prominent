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

      <div className="container mt-5 mb-3">
        <h5 className="mb-4">Enter mobile numebr to register</h5>
        <input type="text" placeholder="+91 - XXXXXXXXXXX" className="p-2" />
      </div>

      <Button as="a" variant="primary" size="lg" className="mt-2 custom-hover">
        Sign up for free
      </Button>
    </div>
  );
}
