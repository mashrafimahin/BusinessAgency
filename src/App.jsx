// hooks
// styles
import GlobalStyles from "./Styles/Global.Styles";
// pages
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Service from "./pages/Service";
// components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

// main
function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Service />
    </>
  );
}

export default App;
