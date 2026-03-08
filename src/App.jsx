// hooks
import { useContext } from "react";
// styles
import GlobalStyles from "./Styles/Global.Styles";
import { NavHandler } from "./Styles/Global.Styles";
// pages
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Service from "./pages/Service";
import ServiceCard from "./pages/ServiceCard";
import Progress from "./pages/Progress";
import Testimonial from "./pages/Testimonial";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
// components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Bars from "./pages/Bars";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
// context
import { ScrollContext } from "./context/ScrollContext";

// main
function App() {
  // context
  const { scrolled } = useContext(ScrollContext);

  return (
    <>
      <GlobalStyles />
      <MobileNav />
      {/* <TopBar /> */}
      {/* <Navbar /> */}
      {/* <NavHandler $down={scrolled}> */}
      {/* <Navbar /> */}
      {/* </NavHandler> */}
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <Service /> */}
      {/* <ServiceCard /> */}
      {/* <Progress /> */}
      {/* <Bars /> */}
      {/* <Testimonial /> */}
      {/* <Projects /> */}
      {/* <Blog /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
