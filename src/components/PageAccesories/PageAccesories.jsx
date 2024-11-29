import PropTypes from "prop-types";
import "./PageAccesories.scss";

const ObjectAccesories = [
    {
        img: "/barbacoaexample.png",
        title: "80LB PREMIUM",
        price: "$ 1.100.000",
    },
    {
        title: "60LB PREMIUM",
        price: "$ 950.000",
    },
    {
        img: "/barbacoaexample.png",
        title: "50LB PREMIUM",
        price: "$ 750.000",
    },
    {
        img: "/barbacoaexample.png",
        title: "80LB PREMIUM",
        price: "$ 1.100.000",
    },
    {
        title: "60LB PREMIUM",
        price: "$ 950.000",
    },
    {
        img: "/barbacoaexample.png",
        title: "50LB PREMIUM",
        price: "$ 750.000",
    },
    {
        img: "/barbacoaexample.png",
        title: "80LB PREMIUM",
        price: "$ 1.100.000",
    },
    {
        title: "60LB PREMIUM",
        price: "$ 950.000",
    },
    {
        img: "/barbacoaexample.png",
        title: "50LB PREMIUM",
        price: "$ 750.000",
    },
];

const PageAccesoriesCard = ({ img, title, price }) => {
    return (
        <div className="page-accesories-container">
            {img ? (
                <div className="page-accesories-container__div-img">
                    <img src={img} alt="" />
                </div>
            ) : null}

            <div
                className={`page-accesories-container__div-title ${
                    !img ? "extra-p-margin" : ""
                } `}
            >
                <p className="page-accesories-container__p-shrimp">{title}</p>
                <hr />

                <p className="page-accesories-container__p-price">{price}</p>
            </div>
        </div>
    );
};

PageAccesoriesCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

/* Contenedor padre*/
export default function PageAccesories() {
    return (
        <div className="container">
            <h1 className="title-accesorios">Accesorios</h1>
            <section className="section-page-accesories">
                {ObjectAccesories.map((acc, index) => (
                    <PageAccesoriesCard key={index} {...acc} />
                ))}
            </section>
        </div>
    );
}
