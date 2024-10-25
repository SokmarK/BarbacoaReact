import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="https://unavatar.io/sokmark" alt="tu" />
      
      <nav className="navbar__nav navbar__nav--closed-mobile">
        <ul>
          <li>Barriles</li>
          <li>Accesorios</li>
          <li>Recetas</li>
        </ul>
      </nav>
    </nav>
  );
}
