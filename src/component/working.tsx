import "./css/working.css";
import chain from '../assets/chain.png'
const Working = () => {
  return (
    <div className="Working-container">
      <div className="working-wrapper">
        <h1>Powered By Movement</h1>
        <p>
          At MoveDAO, we believe in the power of collective decision-making. Our
          platform is designed to enable transparent, secure, and efficient
          voting processes, giving every stakeholder a voice in the governance
          of decentralized organizations. Whether you're a part of a DAO, a
          blockchain-based project, or any other decentralized entity, MoveDAO
          is here to facilitate your voting needs with cutting-edge technology.
        </p>
      </div>
      <div className="chain">
        <img src={chain} alt="" />
      </div>
    </div>
  );
};

export default Working;
