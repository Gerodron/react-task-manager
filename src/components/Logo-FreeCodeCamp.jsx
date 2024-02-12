import '../styles/Logo-FreeCodeCamp.css';
import freecodecamplogo from '../assets/freecodecamp-logo.png';

function LogoFreeCodeCamp() {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img src={freecodecamplogo} className="freecodecamp-logo" />
    </div>
  );
}

export default LogoFreeCodeCamp;
