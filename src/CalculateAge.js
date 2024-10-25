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

    const calculateMonths = (birthDate, today) => {
        let months = today.getMonth() - birthDate.getMonth();
        if (today.getDate() < birthDate.getDate()) {
          months--;
        }
        if (months < 0) {
          months += 12;
        }
        return months;
    };

    const calculateDays = (birthDate, today) => {
        let days = today.getDate() - birthDate.getDate();
        if (days < 0) {
          const lastMonth = new Date(today.getFullYear(), today.getMonth()).getDate();
          days += lastMonth;
        }
        return days;
    };

    const ageCalculate = () => {
        const birthDate = new Date(dob);
        const today = new Date();
    
        const years = calculateYears(birthDate, today);
        const months = calculateMonths(birthDate, today);
        const days=calculateDays(birthDate,today)
    
        if (years >= 0) {
          setAge(`${years} years ${months} months and ${days} days old`);
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
