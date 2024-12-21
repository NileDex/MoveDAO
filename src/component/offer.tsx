import "./css/offer.css";
import data from "../assets/data.png";
import bolt from "../assets/bolt.png";
import vote from "../assets/vote.png";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-wrapper">
        <h1 className="offer-title">What We Offer</h1>
        <p className="offer-description">
          Join our community and help shape the future of decentralized governance. Engage with like-minded individuals and take part in creating impactful solutions.
        </p>
      </div>
      <div className="offer-grid">
        {/* Offer 1 */}
        <div className="offer-card">
          <div className="offer-image">
            <img src={data} alt="Explore Our Vision" />
          </div>
          <h2 className="offer-card-title">Explore Our Vision</h2>
          <p className="offer-card-description">
            Dive into our mission and see how we're shaping the future of blockchain governance.
          </p>
        </div>

        {/* Offer 2 */}
        <div className="offer-card">
          <div className="offer-image">
            <img src={bolt} alt="Participate" />
          </div>
          <h2 className="offer-card-title">Participate</h2>
          <p className="offer-card-description">
            Engage in discussions, vote on proposals, and help steer the direction of our projects.
          </p>
        </div>

        {/* Offer 3 */}
        <div className="offer-card">
          <div className="offer-image">
            <img src={vote} alt="Build Together" />
          </div>
          <h2 className="offer-card-title">Build Together</h2>
          <p className="offer-card-description">
            Collaborate with other members, contribute to development, and create impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
