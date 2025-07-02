import IconLogo from "../assets/logo.svg";
import "./Header.css"

const Header = () => {
  return (
    <>
      <header>
        <div id="container-logo">
          <a href="#">
            <img src={IconLogo} alt="Logo" />
            <h2>DevIzza</h2>
          </a>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Portifólio</a>
          <a href="#">Serviços</a>
          <a href="#">Resumo</a>
          <a href="#">Contato</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
