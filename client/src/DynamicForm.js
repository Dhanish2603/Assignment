import React, { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState([{ category: "", description: "" }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  const handleAddField = () => {
    setFormData([...formData, { category: "", description: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
        Type 1 Form 
      <form onSubmit={handleSubmit}>
        {formData.map((field, index) => (
          <div key={index}>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={field.category}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={field.description}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
