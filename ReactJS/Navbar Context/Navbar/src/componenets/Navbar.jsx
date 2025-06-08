import React, { useContext } from "react";
import NameContext from "./NameContext";

function Navbar() {
  const { name } = useContext(NameContext);

  return (
    <div style={{
      backgroundColor: "#8e24aa",
      color: "white",
      padding: "10px",
      textAlign: "right",
      fontWeight: "bold"
    }}>
      Hi {name}!
    </div>
  );
}

export default Navbar;
