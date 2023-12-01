import { useState } from "react";
import Type1 from "./components/Type1";
import MainFile from "./components/MainFile";
import DynamicForm from "./DynamicForm";

function App() {
  const [first, setfirst] = useState([]);
  const type1Handler = (event, data) => {
    event.preventDefault();
    console.log("working correct");
    const newData = first + data;
    setfirst([...first, data]);
    console.log(first);
  };
  return (
    <div className="App">
      {/* <MainFile /> */}
      {/* {first.map((data) => { */}
      {/* <Type1 addHandler={type1Handler}  />; */}
      <DynamicForm />
      {/* })} */}
    </div>
  );
}

export default App;
