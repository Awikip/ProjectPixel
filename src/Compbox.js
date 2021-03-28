import lahksa from './images/lahksa.gif';

function Compbox() {
  return (
    <div>
      <h4>Select your companion</h4>
      <img src={lahksa} width="18%" />
      <p>
        <button type="button">Next</button>
        <button type="button">Back</button>
      </p>
    </div>
  );
}

export default Compbox;
