// hooks
// styles
import GlobalStyles from "./Styles/Global.Styles";
import { Container } from "./Styles/Common.Styles";
// pages
import Hero from "./pages/Hero";
// components

// main
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Hero />
        <div style={{ minHeight: "200vh" }}></div>
      </Container>
    </>
  );
}

export default App;
