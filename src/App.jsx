import MyNavbar from "./Components/MyNavbar";
import TopBanner from "./Components/TopBanner";
import Featured from "./Components/Featured";
import BotSection from "./Components/BotSection";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="top-container">
        <MyNavbar />
        <TopBanner />
      </div>
      <div className="mid-container">
        <Featured />
      </div>
      <div className="bot-container">
        <BotSection />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
