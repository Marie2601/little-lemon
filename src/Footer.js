import FooterLogo from './FooterLogo.png'
import './App.css';

function Footer  () {
    return (
        <footer className="Footer">
        <img src={FooterLogo} className="Footer-Logo" alt="logo" />
        <ul className="Doormat Navigation">
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/menu">Menu</a>
            </li>
            <li>
            <a href="/reservations">Reservations</a>
            </li>
            <li>
            <a href="/order">Order online</a>
            </li>
            <li>
            <a href="/login">Login</a>
            </li>
        </ul>
        <ul className="Contact">
            <li>
            <a href="/contact">Contact</a>
            </li>
        </ul>
        <ul className="Social Media">
            <li>
            <a href="/facebook">Facebook</a>
            </li>
            <li>
            <a href="/instagram">Instagram</a>
            </li>
            <li>
            <a href="/twitter">Twitter</a>
            </li>
        </ul>
        </footer>
    );
}

export default Footer