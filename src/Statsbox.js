import React from 'react';
import ReactDOM from 'react-dom';
import './Stats.css';

export default function StatList(props) {
  const stats = [
    {
      id: 1,
      name: 'Strength',
    },
    {
      id: 2,
      name: 'Stamina',
    },
    {
      id: 3,
      name: 'Intelligence',
    },
    {
      id: 4,
      name: 'Dexterity',
    },
    {
      id: 5,
      name: 'Tech',
    },
    {
      id: 6,
      name: 'Charisma',
    },
    {
      id: 7,
      name: 'Barter',
    },
  ];

  return (
    <div>
      <h4>Select your stats</h4>
      <div className="stats-container">
        <ul>
          {stats.map(stat => (
            <li key={stat.id}>
              <div className="stats-name">
                {stat.name}
                <button className="stats-button">+</button>
                <button className="stats-button">-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
