import PropTypes from "prop-types";
import "./PageWe.scss";

const ObjectWe = [
    { img: "/v1.jpg" },
    { img: "/v2.jpg" },
    { img: "/v3.jpg" },
    { img: "/v4.jpg" },
    { img: "/v5.jpg" },
    { img: "/v6.jpg" },
    { img: "/v7.jpg" },
    { img: "/v8.jpg" },
    { img: "/v9.jpg" },
    { img: "/v10.jpg" },
    { img: "/v11.jpg" },
    { img: "/v12.jpg" },
    { img: "/v13.jpg" },
    { img: "/v14.jpg" },
    { img: "/v15.jpg" },
    { img: "/v16.jpg" },
    { img: "/v17.jpg" },
    { img: "/v18.jpg" },
    { img: "/v19.jpg" },
    { img: "/H1.jpg" },
    { img: "/H2.jpg" },
    { img: "/H3.jpg" },
    { img: "/H4.jpg" },
    { img: "/H5.jpg" },
    { img: "/H6.jpg" },
    { img: "/H7.jpg" },
    { img: "/H8.jpg" },
    { img: "/H9.jpg" },
    { img: "/H10.jpg" },
];

const PageWeCard = ({ img }) => {
    return (
        <div className="page-we-container">
            {img ? (
                <div className="">
                    <img src={img} alt="" />
                </div>
            ) : null}
        </div>
    );
};

PageWeCard.propTypes = {
    img: PropTypes.string.isRequired,
};

/* Contenedor padre*/

export default function PageWe() {
    return (
        <div className="container">
            <h1 className="title-nosotros">Nosotros</h1>
            <section className="section-page-we ">
                {ObjectWe.map((acc, index) => (
                    <PageWeCard key={index} {...acc} />
                ))}
            </section>
        </div>
    );
}
