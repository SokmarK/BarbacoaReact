import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./GridProducts.scss";

const products = [
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
        popular: true,
    },
    {
        img: "/barbacoaexample.png",
        title: "50LB PREMIUM",
        price: "$ 750.000",
        list: ["10 Ganchos gruesos", "1 Carbonera", "1 Termometro"],
    },
];

const ProductCard = ({ img, title, price, list, popular }) => {
    return (
        <div className="section-first__div">
            {popular ? (
                <div className="section-first__red-div">
                    <img src="/stars.svg" alt="" />
                    <p className="section-first__popular-p">MÁS POPULAR</p>
                </div>
            ) : null}

            <img src={img} alt="" />
            <hr />
            <p className="section-first__p-shrimp">{title}</p>
            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <p className="section-first__p-price">{price}</p>
        </div>
    );
};

ProductCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    popular: PropTypes.bool,
};

export default function GridProducts() {
    return (
        <section className="section-first container-mobile-swiper">
            <div className="section-first__container">
                {products.map((product) => (
                    <ProductCard key={product.title} {...product} />
                ))}
            </div>

            {/* ----------- CARRUSEL -----------  */}

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                initialSlide={1}
                loop={true}
                centeredSlides={true}
                className="mySwiper "
            >
                {products.map((product) => (
                    <SwiperSlide key={product.title}>
                        <ProductCard {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="section-first__div-button">
                <Link to="/products">
                    <button className="section-first__button">
                        TODOS LOS PRODUCTOS
                    </button>
                </Link>
            </div>
        </section>
    );
}
