import PropTypes from "prop-types";
import "./PageProducts.scss";

const ObjectProducts = [
    {
        img: "/barril10lbnew.jpg",
        title: "10LB PREMIUM",
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
            "20 Ganchos gruesos", "2 Accesorios de chorizo",
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
        <div>
            <h1 className="title-barriles container">BARRILES</h1>
            <section className="section-page-products container">
                {ObjectProducts.map((some) => (
                    <PageCard key={some.title} {...some} />
                ))}
            </section>
        </div>
    );
}
