// import the stylesheet for this page
import "./App.css";
// bring in PageHeader from the components folder
import PageHeader from "./components/PageHeader.jsx";
// bring in Section from the components folder
import Section from "./components/Section.jsx";
// bring in MarketCard from the components folder
import MarketCard from "./components/MarketCard.jsx";
// bring in SourceNote from the components folder
import SourceNote from "./components/SourceNote.jsx";

// define the App component as a function
function App() {
  // return one parent div that holds everything
  return (
    <div>
      {/* the header at the top of the page */}
      <PageHeader
        title="Florida Housing Dashboard"
        subtitle="Home price index, then and now"
      />
      {/* first section: the latest month in the data */}
      <Section title="June 2026">
        {/* Miami: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="Miami" index={447.519} change={2.29} />
        {/* Tampa: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="Tampa" index={369.611} change={-1.23} />
        {/* National: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="National" index={332.294} change={1.62} />
      </Section>
      {/* second section: same components, data from ten years earlier */}
      <Section title="June 2016">
        {/* Miami: Jun 2016 index and change vs. Jun 2015 */}
        <MarketCard market="Miami" index={213.652} change={6.97} />
        {/* Tampa: Jun 2016 index and change vs. Jun 2015 */}
        <MarketCard market="Tampa" index={182.482} change={8.01} />
        {/* National: Jun 2016 index and change vs. Jun 2015 */}
        <MarketCard market="National" index={180.058} change={5.02} />
      </Section>
      {/* the source line; no text prop, so it uses its default */}
      <SourceNote />
    </div>
  );
}

// make App available to main.jsx
export default App;
