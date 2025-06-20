
import { createContext, useState } from 'react';

 const MyContext = createContext();

function StoreProvider({ children }) {
  const [state, setState] = useState('');

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

export default StoreProvider;
