import logo from './Logo.svg'
import './App.css';

function Nav  () {
    return (
        <nav className="Nav">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="Links">
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
        </nav>
    );
}

export default Nav