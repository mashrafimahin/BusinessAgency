// hook
import React, { useEffect, useState } from "react";
// context
export const ScreenContext = React.createContext(null);
// context provider
export const ScreenContextProvider = (props) => {
  // state
  const [size, setSize] = useState(0);
  // calculate
  useEffect(() => {
    // func
    const func = () => {
      setSize(window.innerWidth);
    };
    // event listeners
    window.addEventListener("resize", func);
    // initialize
    func();
    // free up  memory
    return () => window.removeEventListener("resize", func);
  }, []);
  // provider
  return (
    <ScreenContext.Provider value={{ size }}>
      {props.children}
    </ScreenContext.Provider>
  );
};
