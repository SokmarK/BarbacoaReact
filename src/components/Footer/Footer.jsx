import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__sect">
                <p className="footer__p">Barbacoa Barriles CO</p>
                <p className="footer__p1">Villavicencio, Meta</p>
            </section>

            <section className="footer__social">
                <a href="https://www.tiktok.com/@barbacoabarrilescol" target="_blank"><img src="./tiktok.svg" alt="" className="footer__tiktok"/></a>
                <a href="https://www.instagram.com/barbacoabarrilesco/" target="_blank"><img src="./instagram.svg" alt="" /></a>
            </section>
        </footer>
    );
}
