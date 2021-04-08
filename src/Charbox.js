import './Charbox.css';

function Charbox() {
  return (
    <div>
      <h4>Select your character</h4>
      <div className="slide">
        <img src="https://via.placeholder.com/200x300" alt="placeholder" />
      </div>
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

export default Charbox;
