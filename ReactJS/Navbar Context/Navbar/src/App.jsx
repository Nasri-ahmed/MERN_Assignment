import React, { useState } from 'react';
import Navbar from './componenets/Navbar';
import FormWrapper from './componenets/FormWrapper';
import NameContext from './componenets/NameContext';

function App() {
 const [name, setName] = useState("Bob Smith");

  return (
    <NameContext.Provider value={{ name, setName }}>
      <Navbar />
      <FormWrapper />
    </NameContext.Provider>
  );
}

export default App;
