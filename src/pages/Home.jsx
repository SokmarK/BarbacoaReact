import "./Home.scss";
import Sample from "../components/Sample/Sample";
export default function Home() {
    return (
        <>
            <section className="section">
                <div className="section__container container">
                    <h1>
                        <p className="section__pneu">TU BUSQUEDA ACABÓ</p>{" "}
                        <br />
                        <p className="section__pmax">
                            ASADORES DE BARRIL ASD SAD SA DSAD
                        </p>
                    </h1>
                    <p className="pmin">
                        Transforma tus parrilladas con un <br></br>ahumado
                        perfecto. Nuestros ahumadores están diseñados para
                        ofrecerte la máxima calidad y sabor en cada asado.
                    </p>
                    <button>CONTACTANOS</button>
                </div>
                <div className="section__img-container">
                    {/* <img
                        src="barbacoamain.jpg"
                        alt=""
                        className="section__img"
                    /> */}
                </div>
            </section>

            <Sample />
        </>
    );
}
