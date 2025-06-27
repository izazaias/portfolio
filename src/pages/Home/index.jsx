import "./index.css";
import IconLogo from "../../assets/logo.svg";
import ImgHero from "../../assets/banner_hero.svg";

function Home() {
  return (
    <div className="home">
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

      <section className="hero">
        <div className="text-hero">
          <div className="text-container">
            <p>Olá pessoas,</p>
            <h2>
              EU SOU UM
              <br />
              PROGRAMADOR
            </h2>
            <p>Seja bem-vindo ao meu portifólio website</p>
          </div>
          <button>Saiba mais sobre mim</button>
        </div>
        <div className="img-hero">
          <img src={ImgHero} />
        </div>
      </section>
    </div>
  );
}

export default Home;
