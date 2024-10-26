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

    const calculateMinutes = (birthDate, today) => {
        let minutes = today.getMinutes() - birthDate.getMinutes();
        if (minutes < 0) {
          minutes += 60;
        }
        return minutes;
    };

    const calculateSeconds = (birthDate, today) => {
        let seconds = today.getSeconds() - birthDate.getSeconds();
        if (seconds < 0) {
          seconds += 60;
        }
        return seconds;
    };

    const ageCalculate = () => {
        const birthDate = new Date(dob);
        console.log(birthDate)
        const today = new Date();
        console.log(today)
    
        const years = calculateYears(birthDate, today);
        const months = calculateMonths(birthDate, today);
        const days=calculateDays(birthDate,today);
        const minutes=calculateMinutes(birthDate,today)
        const seconds=calculateSeconds(birthDate,today)
    
        if (years >= 0) {
          setAge(`${years} years, ${months} months, ${days} days, ${minutes} minutes and ${seconds} seconds`);
        } 
        else {
          setAge("Invalid date");
        }
        setDob("");
    };

    const renderAge = () => {
        if (age) {
          return <p className="age-calcul">Your Age: {age}</p>;
        }
        return null; 
    };
    

    
  return (
    <div className="age-calculator">
      <h1 className="age-cal">Age Calculator</h1>
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
