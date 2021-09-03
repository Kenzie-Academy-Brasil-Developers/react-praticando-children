import "./CenteredCard.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="cardChildren">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
