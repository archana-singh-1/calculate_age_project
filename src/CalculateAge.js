import React, { useState } from "react";
import "./calculateAge.css";

const CalculateAge = () => {
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
  
    const calculateYears = (birthDate, today) => {
      let years = today.getFullYear() - birthDate.getFullYear();
      
      if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        years--;
      }
      return years;
    };

    const ageCalculate = () => {
        const birthDate = new Date(dob);
        const today = new Date();
    
        const years = calculateYears(birthDate, today);
    
        if (years >= 0) {
          setAge(`${years} years`);
        } 
        else {
          setAge("Invalid date");
        }
      };

    const renderAge = () => {
        if (age) {
          return <p>Your Age: {age}</p>;
        }
        return null; 
    };
    

    
  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="input-date"
      />
      <button onClick={ageCalculate} className="calculate-button">
        Calculate Age
      </button>

      <div className="age-result">
        {renderAge()} 
      </div>
    </div>
  );
};

export default CalculateAge;
