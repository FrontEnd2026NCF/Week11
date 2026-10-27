// define ChangeBadge, which receives props
function ChangeBadge(props) {
  // read the percent change from props
  const changeValue = props.value;
  // read the label text from props (let, because it may change)
  let labelText = props.label;
  // check whether the parent left the label out
  if (labelText === undefined) {
    // use the default label instead
    labelText = "vs. last year";
  }
  // round the change to one decimal
  const changeText = changeValue.toFixed(1);
  // return a small badge
  return (
    <span className="change-badge">
      {/* show the change, a % sign, and the label */}
      {changeText}% {labelText}
    </span>
  );
}

// make ChangeBadge available to other files
export default ChangeBadge;
