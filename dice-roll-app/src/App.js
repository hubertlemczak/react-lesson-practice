import './App.css';
import { useState } from 'react';

function App() {
  const [nums, setNums] = useState([]);
  const [numOne, numTwo, numThree] = nums;

  const reRoll = () => {
    const newNums = [];
    for (let i = 0; i < 3; i++) {
      newNums.push(randomDiceNum());
    }
    setNums(newNums);
  };

  const randomDiceNum = () => {
    return Math.floor(Math.random() * (5 + 1) + 1);
  };

  return (
    <div className="App">
      <h1>Dice Roll</h1>
      <button onClick={reRoll}>Reroll</button>
      <div className="nums">
        {numOne === 6 ? (
          <p>{numOne} 🔥</p>
        ) : numOne === 1 ? (
          <p>{numOne} 😭</p>
        ) : (
          <p>{numOne}</p>
        )}
        {numTwo === 6 ? (
          <p>{numTwo} 🔥</p>
        ) : numTwo === 1 ? (
          <p>{numTwo} 😭</p>
        ) : (
          <p>{numTwo}</p>
        )}
        {numThree === 6 ? (
          <p>{numThree} 🔥</p>
        ) : numThree === 1 ? (
          <p>{numThree} 😭</p>
        ) : (
          <p>{numThree}</p>
        )}
      </div>
    </div>
  );
}

export default App;
