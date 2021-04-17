import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Stats.css';

export default function StatList(props) {
  const [currentAmount, setCurrentAmount] = useState(0);
  const stats = [
    {
      id: 1,
      name: 'Strength',
      amount: currentAmount
    },
    {
      id: 2,
      name: 'Stamina',
      amount: currentAmount
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
        <ul>
          {stats.map(stat => (
            <li key={stat.id}>
              <div className="stats-name">
                {stat.name}
              </div>
              <div>
                {stat.amount}
              </div>
              <div>
                <button className="stats-button" onClick={add}>+</button>
                <button className="stats-button" onClick={subtract}>-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
