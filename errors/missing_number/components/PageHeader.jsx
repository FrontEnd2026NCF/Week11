// define PageHeader, which receives props
function PageHeader(props) {
  // read the title text from props
  const titleText = props.title;
  // read the subtitle text from props
  const subtitleText = props.subtitle;
  // return the header
  return (
    <header className="page-header">
      {/* show the title as the main heading */}
      <h1 className="page-title">{titleText}</h1>
      {/* show the subtitle under it */}
      <p className="page-subtitle">{subtitleText}</p>
    </header>
  );
}

// make PageHeader available to other files
export default PageHeader;
