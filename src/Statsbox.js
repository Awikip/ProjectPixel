import './Stats.css';

function Statsbox() {
  return (
    <div>
      <h4>Select your stats </h4>
      <div class="stats-container">
        <div>
        <p>
          <dl>
            <dt>Strength</dt>
            <dt>Stamina</dt>
            <dt>Intelligence</dt>
            <dt>Dexterity</dt>
            <dt>Tech</dt>
          </dl>
        </p>
        </div>
        <div class="stats-counter">
          <p>
            <button type="button">+</button>
            <button type="button">-</button>
          </p>
          <p>
            <button type="button">+</button>
            <button type="button">-</button>
          </p>
          <p>
            <button type="button">+</button>
            <button type="button">-</button>
          </p>
          <p>
            <button type="button">+</button>
            <button type="button">-</button>
          </p>
          <p>
            <button type="button">+</button>
            <button type="button">-</button>
          </p>
        </div>
        <div class="stats">
          <p>
            <dl>
              <dt>0 - 10</dt>
              <dt>0 - 10</dt>
              <dt>0 - 10</dt>
              <dt>0 - 10</dt>
              <dt>0 - 10</dt>
            </dl>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statsbox;
