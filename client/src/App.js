import { useState } from "react";
import Type1 from "./components/Type1"; 

function App() {
  const [first, setfirst] = useState({ type1: [] });
  const type1Handler = (event, data) => {
    event.preventDefault();
     
  };
  return (
    <div className="App">
      <Type1 addHandler={type1Handler} /> 
    </div>
  );
}

export default App;
