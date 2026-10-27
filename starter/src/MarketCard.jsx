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
  // round the change to one decimal
  const changeText = changeValue.toFixed(1);
  // return the card
  return (
    <div className="market-card">
      {/* show a small house icon */}
      <img src="/house.svg" alt="House icon" />
      {/* show the market name */}
      <h2 className="market-name">{marketName}</h2>
      {/* show the rounded index value */}
      <p className="market-index">{indexText}</p>
      {/* show the change with a % sign */}
      <p className="market-change">{changeText}% vs. last year</p>
    </div>
  );
}

// make MarketCard available to other files
export default MarketCard;
