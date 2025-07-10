import PropTypes from "prop-types";
import "./PageAccesories.scss";

const ObjectAccesories = [
    { img: "/accesorio1.png" },
    { img: "/accesorio2.png" },
    { img: "/accesorio3.png" },
    { img: "/accesorio4.png" },
    { img: "/accesorio5.png" },
    { img: "/accesorio6.png" },
    { img: "/accesorio7.png" },
    { img: "/accesorio8.png" },
    { img: "/accesorio9.png" },
    { img: "/accesorio10.png" },
    { img: "/accesorio11.png" },
    { img: "/accesorio12.png" },
    { img: "/accesorio13.png" },
    { img: "/accesorio14.png" },
    { img: "/accesorio15.png" },
    { img: "/accesorio16.png" },
    { img: "/accesorio17.png" },
    { img: "/accesorio18.png" },
];

const PageAccesoriesCard = ({ img }) => {
    return (
        <div className="page-accesories-container">
            {img ? (
                <div className="">
                    <img src={img} alt="" />
                </div>
            ) : null}
        </div>
    );
};

PageAccesoriesCard.propTypes = {
    img: PropTypes.string.isRequired,
};

/* Contenedor padre*/

export default function PageAccesories() {
    return (
        <div className="container">
            <h1 className="title-accesorios">Accesorios</h1>
            <section className="section-page-accesories ">
                {ObjectAccesories.map((acc, index) => (
                    <PageAccesoriesCard key={index} {...acc} />
                ))}
            </section>
        </div>
    );
}
