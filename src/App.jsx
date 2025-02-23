import { useState } from 'react';
import React from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (event) =>{
    const newValue = (event.target.value);
    if (newValue > 10){
      setNum('');
      alert('Please input 1 - 10');
    } else {
      setNum(newValue);
    }
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setShow(true);
    let randomNumber = Math.floor(Math.random()* 10)+1;
    if (Number(randomNumber)===Number(num)){
      setResult('Correct!')
    } else {
      setResult('Incorrect!')
    }
    setNum('');
  }

  const handleClose = () => {
    setShow(false);
  }
  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label>Guess Number</label>
        <input
          type="number"
          value={num}
          onChange={handleChange}
          placeholder="Input 1-10"
          required
        />
        <button type="submit">Submit</button>
      </form>
      { show &&
      <div class = 'modal'>
        <div className="modal-content">
          <div className="modal-header">
            <h1>Result</h1>
          </div>
          <div className="modal-text">
            {result}
          </div>
          <div className="modal-footer">
            <button onClick = {handleClose}>Close</button>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default App;