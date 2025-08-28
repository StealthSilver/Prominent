import varsity from "../../assets/education.svg";

export default function Education() {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center align-items-start g-5">
          <div className="col-lg-5 col-md-6 text-center">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <img
                src={varsity}
                alt="Other Trades Pricing"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 ms-lg-5">
            <h3 className="text-muted mb-5">Free and open market education</h3>

            <div className="mb-5">
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a className="text-decoration-none" href="/pricing">
                Varsity →
              </a>
            </div>

            <div className="mb-5">
              <p className="text-muted">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>
              <a className="text-decoration-none" href="/pricing">
                Trading Q&A →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
