import './App.css';
import Navebar from './Components/Links/Navebar';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Components/redux/Store';
import { createContext, useState } from 'react';
export const SomeContext = createContext()
function App() {
  const [length, setlength] = useState()
  // console.log(length);
  return (
    <div className="App">
      <SomeContext.Provider value={{ setlength, length }}>
        <Provider store={Store}>
          <BrowserRouter>
            <Navebar />
          </BrowserRouter>
        </Provider>
      </SomeContext.Provider>
    </div>
  );
}

export default App;
