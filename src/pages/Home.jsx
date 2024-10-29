import "./Home.scss";

export default function Home() {
  return (
    <section className="section">
  <div className="section__div">
    <p className="section__pneu">TU BUSQUEDA ACABÓ</p>
    <p className="section__pmax">ASADORES DE </p>
    <p className="section__pmax1">BARRIL</p>
    <p className="pmin">Transforma tus parrilladas con un <br></br>ahumado perfecto. Nuestros ahumadores están diseñados para ofrecerte la máxima calidad y sabor en cada asado.</p>
    <button>CONTACTANOS</button>
  </div>
  <div className="section__img-container">
    <img src="barbacoamain.jpg" alt="" className="section__img" />
  </div>
</section>

  );
}
