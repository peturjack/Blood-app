import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import Visit from "./visit";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <>
      <Visit />
    </>
  );
};

export default App;
