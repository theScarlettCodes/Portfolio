import React, { useState, useEffect } from "react";

const Digits = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const addition = "+";
  const subtraction = "-";
  const division = "/";
  const multiplication = "*";

  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [operation, setOperation] = useState(addition);

  return (
    <div className={styles.numbers}>
      <div className="screen">
        <span className="value1"></span>
        <span className="operation"></span>
        <span className="value2"></span>
        <span className="result"></span>
      </div>
      {numbers.map((number) => (
        <button> {number} </button>
      ))}
    </div>
  );
};

const styles = {};

export default Digits;
