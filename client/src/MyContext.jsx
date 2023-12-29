import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);

  const handleClick = (num) => {
    fetch("http://localhost:5000/update",{
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username:num})
  }
    )
    setValue(num);
    console.log(num)
  };

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/showNum");
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json(); // Parse response body as JSON
        setValue(data.username)
        console.log("data is", data);
        // Process the response if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Call the asynchronous function
  });
  

  
  

  return (
    <AppContext.Provider value={{ value, handleClick }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
