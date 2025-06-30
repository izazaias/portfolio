import "./index.css";
import IconLogo from "../../assets/logo.svg";
import ImgHero from "../../assets/banner_hero.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import Curriculum from "../../assets/cv.pdf";

function Home() {
  const handleDownloadCV = () => {
    
    const link = document.createElement("a");
    link.href = Curriculum;
    link.download = "Curriculo_Isaias.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button onClick={handleDownloadCV}>
            <FaDownload size={16} style={{ marginRight: "8px" }} />
            Baixar CV
          </button>
          {/* Icones do github, linkedin e instagram */}
          <div className="social-icons">
            <a
              href="https://github.com/izazaias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/isaias-santos1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/imisaias1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <div className="img-hero">
          <img src={ImgHero} />
        </div>
      </section>
    </div>
  );
}

export default Home;
