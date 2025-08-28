import press from "../../assets/press-logos.png";
import pricing from "../../assets/pricing0.svg";
import pricing2 from "../../assets/pricingEquity.svg";
import pricing3 from "../../assets/other-trades.svg";

export default function Pricing() {
  return (
    <div>
      <div className="justify-content-center text-center py-5">
        <img src={press} alt="Press Logos" className="img-fluid" />
      </div>

      <div className="container py-5">
        <div className="row justify-content-center align-items-start g-5">
          <div className="col-lg-5 col-md-6">
            <h3 className="text-muted mb-5">Unbeatable pricing</h3>

            <div className="mb-5">
              <p className="text-muted">
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
              </p>
              <a className="text-decoration-none" href="/pricing">
                See Pricing →
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 text-center">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <img
                src={pricing}
                alt="Pricing"
                className="img-fluid"
                style={{ maxWidth: "120px" }}
              />
              <img
                src={pricing2}
                alt="Equity Pricing"
                className="img-fluid"
                style={{ maxWidth: "120px" }}
              />
              <img
                src={pricing3}
                alt="Other Trades Pricing"
                className="img-fluid"
                style={{ maxWidth: "120px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
