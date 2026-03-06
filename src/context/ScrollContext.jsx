// hooks
import React, { useEffect, useState } from "react";
// context
export const ScrollContext = React.createContext(null);
// provider
export const ScrollContextProvider = (props) => {
  // state
  const [scrolled, setScrolled] = useState(false);
  // effect
  useEffect(() => {
    // func
    const func = (e) => {
      if (e.deltaY < 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // event handles
    window.addEventListener("wheel", func);
    // remove handler
    return () => window.removeEventListener("wheel", func);
  }, []);
  //  statement
  return (
    <ScrollContext.Provider value={{ scrolled }}>
      {props.children}
    </ScrollContext.Provider>
  );
};
