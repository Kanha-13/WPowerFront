import React, { useContext, useState } from "react";
export const StateContext = React.createContext();
const StateProvide = (props) => {
  const [helpCalled, setHelpCalled] = useState(false)
  return (
    <StateContext.Provider
      value={{
        helpCalled,
        setHelpCalled
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export default StateProvide;