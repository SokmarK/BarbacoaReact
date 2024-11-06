import "./Navbar.scss";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container container">
                <img src="barbacoabarrilLOGO.png" alt="barbacoabarril" />

                <nav className="navbar__nav ">
                    <ul className="navbar__menu">
                        <li>Barriles</li>
                        <li>Accesorios</li>
                        <li className="navbar__mr">Recetas</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
