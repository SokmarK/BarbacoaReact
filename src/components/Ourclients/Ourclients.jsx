import "./Ourclients.scss";
export default function Ourclients() {
    return (
        <section className="section-clients container">
            <div className="section-clients__header">
                <img src="./linestars.svg" alt="" />
                <p>ALGUNOS DE</p>
                <h1>NUESTROS CLIENTES</h1>
            </div>

            <div className="section-clients__div-cards container">
                <div className="section-clients__card">
                    <img src="./marks.svg" alt="" />
                    <p>
                        Compré el ahumador de 80LB y no podría estar más
                        satisfecho. La calidad del material es impresionante, y
                        el control de temperatura es perfecto para largas horas
                        de cocción. El sabor que obtengo en cada asado es
                        increíble, ¡mis amigos no dejan de pedirme que organice
                        más parrilladas!
                    </p>
                    <p className="section-clients__p-username">@alejito123</p>
                </div>
                <div className="section-clients__card">
                    <img src="./marks.svg" alt="" />
                    <p>
                        Compré el ahumador de 80LB y no podría estar más
                        satisfecho. La calidad del material es impresionante, y
                        el control de temperatura es perfecto para largas horas
                        de cocción. El sabor que obtengo en cada asado es
                        increíble, ¡mis amigos no dejan de pedirme que organice
                        más parrilladas!
                    </p>
                    <p className="section-clients__p-username">@alejito321</p>
                </div>
            </div>
        </section>
    );
}


