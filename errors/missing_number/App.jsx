// import the stylesheet for this page
import "./App.css";
// bring in PageHeader from the components folder
import PageHeader from "./components/PageHeader.jsx";
// bring in MarketCard from the components folder
import MarketCard from "./components/MarketCard.jsx";

// define the App component as a function
function App() {
  // return one parent div that holds everything
  return (
    <div>
      {/* the header at the top of the page */}
      <PageHeader
        title="Florida Housing Dashboard"
        subtitle="Home price index, June 2026"
      />
      {/* the row of cards under the header */}
      <div className="card-row">
        {/* Miami: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="Miami" index={447.519} change={2.29} />
        {/* Tampa: the change prop was left out by mistake */}
        <MarketCard market="Tampa" index={369.611} />
        {/* National: Jun 2026 index and change vs. Jun 2025 */}
        <MarketCard market="National" index={332.294} change={1.62} />
      </div>
    </div>
  );
}

// make App available to main.jsx
export default App;
