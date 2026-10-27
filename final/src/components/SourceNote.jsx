// define SourceNote, which receives props
function SourceNote(props) {
  // read the source text from props (let, because it may change)
  let sourceText = props.text;
  // check whether the parent left the text out
  if (sourceText === undefined) {
    // use the default source line instead
    sourceText = "Source: S&P Case-Shiller Home Price Index";
  }
  // return one line of small text
  return <p className="source-note">{sourceText}</p>;
}

// make SourceNote available to other files
export default SourceNote;
