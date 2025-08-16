import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

function App () {
  return (
    <div className="Container">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
