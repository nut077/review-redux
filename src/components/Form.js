import React, { useState } from 'react';

const Form = ({ onSubmit, value: valueFromProp = '' }) => {
  const [value, setValue] = useState(valueFromProp);
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
