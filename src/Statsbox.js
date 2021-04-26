import React, {useState} from 'react';
import './Stats.css';

export default function StatList(props) {
  const [strengthAmount, setStrengthAmount] = useState(0);
  const [staminaAmount, setStaminaAmount] = useState(0);
  const [intelligenceAmount, setIntelligenceAmount] = useState(0);
  const [dexterityAmount, setDexterityAmount] = useState(0);
  const [techAmount, setTechAmount] = useState(0);
  const [charismaAmount, setCharismaAmount] = useState(0);
  const [barterAmount, setBarterAmount] = useState(0);
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
      amount: intelligenceAmount
    },
    {
      id: 4,
      name: 'Dexterity',
      amount: dexterityAmount
    },
    {
      id: 5,
      name: 'Tech',
      amount: techAmount
    },
    {
      id: 6,
      name: 'Charisma',
      amount: charismaAmount
    },
    {
      id: 7,
      name: 'Barter',
      amount: barterAmount
    },
  ];

  function addStrength() {
    if (strengthAmount !==10) {
      setStrengthAmount(strengthAmount+1);
    }
  }

  function subtractStrength() {
    if (strengthAmount !==0) {
      setStrengthAmount(strengthAmount-1);
    }
  }

  function addStamina() {
    if (staminaAmount !==10) {
      setStaminaAmount(staminaAmount+1);
    }
  }

  function subtractStamina() {
    if (staminaAmount !==0) {
      setStaminaAmount(staminaAmount-1);
    }
  }

  function addIntelligence() {
    if (intelligenceAmount !==10) {
      setIntelligenceAmount(intelligenceAmount+1);
    }
  }

  function subtractIntelligence() {
    if (intelligenceAmount !==0) {
      setIntelligenceAmount(intelligenceAmount-1);
    }
  }

  function addDexterity() {
    if (dexterityAmount !==10) {
      setDexterityAmount(dexterityAmount+1);
    }
  }

  function subtractDexterity() {
    if (dexterityAmount !==0) {
      setDexterityAmount(dexterityAmount-1);
    }
  }

  function addTech() {
    if (techAmount !==10) {
      setTechAmount(techAmount+1);
    }
  }

  function subtractTech() {
    if (techAmount !==0) {
      setTechAmount(techAmount-1);
    }
  }

  function addCharisma() {
    if (charismaAmount !==10) {
      setCharismaAmount(charismaAmount+1);
    }
  }

  function subtractCharisma() {
    if (charismaAmount !==0) {
      setCharismaAmount(charismaAmount-1);
    }
  }

  function addBarter() {
    if (barterAmount !==10) {
      setBarterAmount(barterAmount+1);
    }
  }

  function subtractBarter() {
    if (barterAmount !==0) {
      setBarterAmount(barterAmount-1);
    }
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
              <div className="stats-amount">
                {stat.amount}
              </div>
            </p>
          ))}
        </p>
        <div>
          <div>
            <button className="stats-button" onClick={addStrength}>+</button>
            <button className="stats-button" onClick={subtractStrength}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addStamina}>+</button>
            <button className="stats-button" onClick={subtractStamina}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addIntelligence}>+</button>
            <button className="stats-button" onClick={subtractIntelligence}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addDexterity}>+</button>
            <button className="stats-button" onClick={subtractDexterity}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addTech}>+</button>
            <button className="stats-button" onClick={subtractTech}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addCharisma}>+</button>
            <button className="stats-button" onClick={subtractCharisma}>-</button>
          </div>
          <div>
            <button className="stats-button" onClick={addBarter}>+</button>
            <button className="stats-button" onClick={subtractBarter}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
