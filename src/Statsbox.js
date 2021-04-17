import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Stats.css';

export default function StatList(props) {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [strengthAmount, setStrengthAmount] = useState(0);
  const [staminaAmount, setStaminaAmount] = useState(0);
  const stats = [
    {
      id: 1,
      name: 'Strength',
      amount: strengthAmount
    },
    {
      id: 2,
      name: 'Stamina',
      amount: staminaAmount
    },
    {
      id: 3,
      name: 'Intelligence',
      amount: currentAmount
    },
    {
      id: 4,
      name: 'Dexterity',
      amount: currentAmount
    },
    {
      id: 5,
      name: 'Tech',
      amount: currentAmount
    },
    {
      id: 6,
      name: 'Charisma',
      amount: currentAmount
    },
    {
      id: 7,
      name: 'Barter',
      amount: currentAmount
    },
  ];

  function addStrength() {
    setStrengthAmount(strengthAmount+1)
  }

  function subtractStrength() {
    setStrengthAmount(strengthAmount-1)
  }

  function addStamina() {
    setStrengthAmount(strengthAmount+1)
  }

  function subtractStamina() {
    setStrengthAmount(strengthAmount-1)
  }

  function add() {
    setCurrentAmount(currentAmount+1)
  }

  function subtract() {
    setCurrentAmount(currentAmount-1)
  }

  return (
    <div>
      <h4>Select your stats</h4>
      <div className="stats-container">
        <p>
          {stats.map(stat => (
            <p key={stat.id}>
              <div className="stats-name">
                {stat.name}
              </div>
              <div>
                {stat.amount}
              </div>
              <div>
                <button className="stats-button" onClick={addStrength}>+</button>
                <button className="stats-button" onClick={subtractStrength}>-</button>
              </div>
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}
