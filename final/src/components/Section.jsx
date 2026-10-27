// define Section, which receives props
function Section(props) {
  // read the heading text from props
  const titleText = props.title;
  // read whatever was placed between <Section> and </Section>
  const insideContent = props.children;
  // return the section
  return (
    <section className="dash-section">
      {/* show the section heading */}
      <h2 className="section-title">{titleText}</h2>
      {/* show the content that was placed inside */}
      <div className="section-body">{insideContent}</div>
    </section>
  );
}

// make Section available to other files
export default Section;
