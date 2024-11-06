import "./first.scss";

export default function First() {
    return (
        <section className="section-first">
            <div className="section-first__container">
                <div className="section-first__div">
                    <img src="/barbacoaexample.png" alt="" />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>

                <div className="section-first__div">
                    <div className="section-first__red-div">
                        <p>MÁS POPULAR</p>
                    </div>

                    <img src="/barbacoaexample.png" alt="" />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>

                <div className="section-first__div">
                    <img src="/barbacoaexample.png" alt="" />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>
            </div>

            <div className="section-first__div-button">
                <button className="section-first__button">
                    TODOS LOS PRODUCTOS
                </button>
            </div>
        </section>
    );
}
