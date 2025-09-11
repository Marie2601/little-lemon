import FooterLogo from './Images/FooterLogo.png'
import './App.css';

function Footer  () {
    return (
        <footer className="Footer">
        <img src={FooterLogo} className="Footer-Logo" alt="logo" aria-label="On Click"/>


        <div className="Doormat-Navigation">
            <h3>Doormat Navigation</h3>
            <ul>
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
        </div>

        <div className="Contact">
            <h3>Contact</h3>
            <ul>
            <li>
            <a href="/contact">Contact</a>
            </li>
            </ul>
        </div>

        <div className="Social-Media">
            <h3>Social Media Links</h3>
            <ul>
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
        </div>
        </footer>
    );
}

export default Footer