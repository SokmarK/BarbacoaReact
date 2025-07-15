import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container container">
                <Link to={"/"}>
                    <img src="barbacoabarrilLOGO.png" alt="barbacoabarril"/>
                </Link>

                <nav className="navbar__nav ">
                    <ul className="navbar__menu">
                        <Link to={"/products"}>
                            <li>Barriles</li>
                        </Link>

                        <Link to={"/accesories"}>
                            <li>Accesorios</li>
                        </Link>

                        <Link to={"/we"}>
                            <li className="navbar__mr">Nosotros</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
