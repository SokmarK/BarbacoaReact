export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-transparent">
      <img
        src="https://unavatar.io/sokmark"
        alt="tu"
        className="w-16 rounded-full ms-4"
      />

      <section className="flex">
        <p className="me-4">Barriles</p>
        <p className="me-4">Accesorios</p>
        <p className="me-4">Recetas</p>
      </section>
    </nav>
  );
}
