import { Button } from "react-bootstrap";

export default function OpenAccount() {
  return (
    <div className="container text-center py-5">
      <h3 className="mt-5 mb-3 text-muted">Open a Zerodha account</h3>
      <p className="text-muted mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>

      <Button
        as="a"
        href="https://prominent-lylv.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="lg"
        className="mt-4 custom-hover text-white text-decoration-none"
      >
        Sign up for free
      </Button>
    </div>
  );
}
