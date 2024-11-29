import PropTypes from "prop-types";
import "./PageProducts.scss";



const ObjectProducts = [
    {
        img: "/barbacoaexample.png",
        title: "80LB PREMIUM",
        price: "$ 1.100.000",
        list: ["16 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "60LB PREMIUM",
        price: "$ 950.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "50LB PREMIUM",
        price: "$ 750.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "10LB PREMIUM",
        price: "$ 1.100.000",
        list: ["16 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "20LB PREMIUM",
        price: "$ 950.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "30LB PREMIUM",
        price: "$ 750.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "40LB PREMIUM",
        price: "$ 1.100.000",
        list: ["16 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "90LB PREMIUM",
        price: "$ 950.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
    {
        img: "/barbacoaexample.png",
        title: "1LB PREMIUM",
        price: "$ 750.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
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
