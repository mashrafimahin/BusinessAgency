// hooks
// styles
import GlobalStyles from "./Styles/Global.Styles";
import { Container } from "./Styles/Common.Styles";
// pages
import Hero from "./pages/Hero";
// components
import TopBar from "./components/TopBar";

// main
function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Container>
        <Hero />
        <div style={{ minHeight: "200vh" }}></div>
      </Container>
    </>
  );
}

export default App;
