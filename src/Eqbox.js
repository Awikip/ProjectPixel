import lahksa from './images/lahksa.gif';

function Eqbox() {
  return (
    <div>
      <h4>Select your equipment</h4>
      <img src={lahksa} width="18%" />
      <p>
        <button type="button">Next</button>
        <button type="button">Back</button>
      </p>
    </div>
  );
}

export default Eqbox;
