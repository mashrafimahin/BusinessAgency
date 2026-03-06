import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ScreenContextProvider } from "./context/ScreenSizeContext.jsx";
import { ScrollContextProvider } from "./context/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenContextProvider>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </ScreenContextProvider>
  </StrictMode>,
);
