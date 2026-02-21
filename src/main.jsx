import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ScreenContextProvider } from "./context/ScreenSizeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenContextProvider>
      <App />
    </ScreenContextProvider>
  </StrictMode>,
);
