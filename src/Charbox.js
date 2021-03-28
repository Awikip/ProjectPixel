import lahksa from './images/lahksa.gif';

function Charbox() {
  return (
    <div>
      <h4>Select your character</h4>
      <img src={lahksa} width="30%" />
      <p>
        <button type="button">Next</button>
        <button type="button">Back</button>
      </p>
    </div>
  );
}

export default Charbox;
