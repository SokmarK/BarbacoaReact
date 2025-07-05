import PropTypes from "prop-types";
import "./PageProducts.scss";

const ObjectProductsPremium = [
    {
        img: "/barrilpremium17lb.png",
        title: "17LB PREMIUM",
        price: "$ 700.000",
        list: ["13 Ganchos delgados", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barrilpremium30lb.png",
        title: "30LB PREMIUM",
        price: "$ 900.000",
        list: ["16 Ganchos delgados", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barrilpremium50lb.png",
        title: "50LB PREMIUM",
        price: "$ 1.100.000",
        list: ["16 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },

    {
        img: "/barrilpremium80lb.png",
        title: "80LB PREMIUM",
        price: "$ 1.400.000",
        list: ["20 Ganchos gruesos", "2 Garfio", "1 Carbonera", "1 Termometro"]
    },
];

const ObjectProductsEco = [
    {
        img: "/barril10lbnew.jpg",
        title: "10LB",
        price: "$ 380.000",
        list: [""],
    },
    {
        img: "/barril17lbeco.jpg",
        title: "17LB ECO",
        price: "$ 500.000",
        list: ["Lanza", "Garfio", "13 Ganchos", "2 Accesorios de chorizo"],
    },
    {
        img: "/barril30lbeco.jpg",
        title: "30LB ECO",
        price: "$ 750.000",
        list: ["Lanza", "Garfio", "16 Ganchos", "2 Accesorios de chorizo"],
    },
    {
        img: "/barril50lbeco.jpg",
        title: "50LB ECO",
        price: "$ 900.000",
        list: ["Lanza", "Garfio", "16 Ganchos", "2 Accesorios de chorizo"],
    },
    {
        img: "/barril80lbeco.jpg",
        title: "80LB ECO",
        price: "$ 1.200.000",
        list: [
            "Lanza",
            "2 Garfios",
            "20 Ganchos gruesos",
            "2 Accesorios de chorizo",
        ],
    },
];

const PageCard = ({ img, title, price, list }) => {
    return (
        <div className="page-products-container">
            <div className="page-products-container__div-img">
                <img src={img} alt="" />
            </div>

            <div className="page-products-container__div-title">
                <p className="page-products-container__p-shrimp">{title}</p>
                <hr />
                <ul>
                    {list.map((thing) => (
                        <li key={thing}>{thing}</li>
                    ))}
                </ul>
                <p className="page-products-container__p-price">{price}</p>
            </div>
        </div>
    );
};

PageCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};

{
    /* Contenedor padre*/
}

export default function PageProducts() {
    return (
        <section>
            <div>
                <h1 className="title-barriles container">BARRILES PREMIUM</h1>
                <section className="section-page-products container">
                    {ObjectProductsPremium.map((some) => (
                        <PageCard key={some.title} {...some} />
                    ))}
                </section>
            </div>

            <div>
                <h1 className="title-barriles container">BARRILES ECO</h1>
                <section className="section-page-products container">
                    {ObjectProductsEco.map((some) => (
                        <PageCard key={some.title} {...some} />
                    ))}
                </section>
            </div>
        </section>
    );
}
