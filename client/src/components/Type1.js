import React, { useState } from "react";
import style from "./input.module.css";
function Type1(props) {
  const [data, setData] = useState({});

  const changeHandler = (event) => { 
    setData((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
    console.log(data)
  };
 

  return (
    <div className={style.type1}>
      Welcome to the form
      <form action="">
        <input
          type="text"
          name="desc"
          onChange={changeHandler}
          placeholder="Description"
        />
        <input type="text" onChange={changeHandler} name="cat" placeholder="Categories" />
        <input type="text" onChange={changeHandler} name="items" placeholder="Items" />
        <input type="text" onChange={changeHandler} name="belongs" placeholder="Belongs to" />
        <button onClick={(event)=>props.addHandler(event,data)}>Add</button>
      </form>
    </div>
  );
}

export default Type1;
