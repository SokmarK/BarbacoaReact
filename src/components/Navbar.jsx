export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-transparent p-5">
      <img
        src="https://unavatar.io/sokmark"
        alt="tu"
        className="w-40 rounded-full ms-16"
      />

      <nav className="flex">
        <ul className="flex">
          <li className="me-16">Barriles</li>
          <li className="me-16">Accesorios</li>
          <li className="me-16">Recetas</li>
        </ul>
      </nav>
    </nav>
  );
}
