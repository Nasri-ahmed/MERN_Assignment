import React, { useContext } from "react";
import NameContext from "./NameContext";

function Form() {
  const { name, setName } = useContext(NameContext);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label style={{ marginRight: "10px", fontWeight: "bold" }}>Your Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#f5f5f5"
        }}
      />
    </div>
  );
}

export default Form;
