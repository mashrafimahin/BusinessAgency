// hooks
// styles
import GlobalStyles from "./Styles/Global.Styles";
// pages
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Service from "./pages/Service";
import ServiceCard from "./pages/ServiceCard";
import Progress from "./pages/Progress";
import Testimonial from "./pages/Testimonial";
// components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Bars from "./pages/Bars";

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
      <ServiceCard />
      <Progress />
      <Bars />
      <Testimonial />
    </>
  );
}

export default App;
