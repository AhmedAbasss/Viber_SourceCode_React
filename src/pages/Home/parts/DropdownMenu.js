import React, { useState } from 'react';
import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const options = ['English', "USA", "Arabic"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className={classes.container_dropdown}>
      <select
        className={classes.select_dropdown}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map(option => (
          <option
            key={option}
            value={option}
            className={classes.option_dropdown}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;