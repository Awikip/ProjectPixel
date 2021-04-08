import lahksa from './images/lahksa.gif';

function Compbox() {
  return (
    <div>
      <h4>Select your companion</h4>
      <img src={lahksa} width="18%" />
      <p>
        <button>
          &lt;
        </button>
        <button>
          &gt;
        </button>
      </p>
    </div>
  );
}

export default Compbox;
