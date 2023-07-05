import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [ht, setHt] = useState(null);
  const [wt, setWt] = useState(null);
  const [val, showVal] = useState('');
  const [textval, setTextval] = useState('');

  const getHeight = (e) => {

    const userHeight = parseInt(e.target.value);

    setHt(userHeight);
    
  };

  const getWeight = (e) => {
    const userWeight = parseInt(e.target.value);
    setWt(userWeight);
  };
  const Calculate = () => {

if(ht!==null || wt!==null)
{

  const height = ht / 100;

  let pow = Math.pow(height, 2);

  const bmi = wt / pow;
  const calculatedBmi=bmi.toFixed(2)
  showVal(calculatedBmi);

  if(calculatedBmi<16)
  {
    setTextval("Severe Thinness")
  }
  else if(calculatedBmi >18 && calculatedBmi<=25)
  {
    setTextval("Normal")
  }

  else 
  {
    setTextval("Overweight")

  }
}
else{
  alert("Please Enter Your Height and Weight")
}







  };
  return (
    <div className="main_div">
      <div className="left_section"></div>
      <div className="center_section">
        <div className="containerr container shadow-lg p-3 mb-4  rounded">
          <h2>BMI Calculator</h2>

          <div className="input_field_container">
            <div className="mb-4">
              <label
                className="form-label"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Height (cm)
              </label>
              <input
                placeholder="Height (cm)"
                onChange={getHeight}
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-4">
              <label
                className="form-label"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Weight (kg)
              </label>
              <input
                placeholder="Weight (kg)"
                onChange={getWeight}
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              onClick={Calculate}
              className="btn btn-info mt-3 mb-5 px-1"
              style={{
                width: '14.5vw',
                color: 'white',
                // fontWeight: 'bold',
                marginLeft: '20%',
                fontSize: 'medium',
              }}
            >
              Calculate
            </button>
          </div>
        </div>
        <div
          className="shadow-lg p-3 mb-2  rounded text-center "
          style={{ color: 'white', fontWeight: 'bold', fontSize: 'large' }}
        >
          {val} {textval}{' '}
        </div>
      </div>
      <div className="right_section"></div>
    </div>
  );
}
