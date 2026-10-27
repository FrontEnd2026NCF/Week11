// bring in ChangeBadge, which lives in the same folder
import ChangeBadge from "./ChangeBadge.jsx";

// define MarketCard, which receives props
function MarketCard(props) {
  // read the market name from props
  const marketName = props.market;
  // read the index value from props
  const indexValue = props.index;
  // read the yearly change from props
  const changeValue = props.change;
  // round the index to one decimal
  const indexText = indexValue.toFixed(1);
  // return the card
  return (
    <div className="market-card">
      {/* show a small house icon */}
      <img src="/house.svg" alt="House icon" />
      {/* h3, because the section title above is now the h2 */}
      <h3 className="market-name">{marketName}</h3>
      {/* show the rounded index value */}
      <p className="market-index">{indexText}</p>
      {/* hand the change down; ChangeBadge supplies the label */}
      <ChangeBadge value={changeValue} />
    </div>
  );
}

// make MarketCard available to other files
export default MarketCard;
