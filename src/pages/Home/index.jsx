import "./index.css";
import ImgHero from "../../assets/banner_hero.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import Curriculum from "../../assets/cv.pdf";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const words = [
  "PROGRAMADOR",
  "DESENVOLVEDOR",
  "CRIADOR",
  "SOLUCIONADOR",
  "INOVADOR",
  "ENTUSIASTA",
];

function TextRotator() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="dynamic-text">
      <span className="word">{words[currentWordIndex]}</span>
    </span>
  );
}

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
      <Header />
      <section className="hero">
        <div className="text-hero">
          <div className="text-container">
            <p>Olá pessoas,</p>
            <h2>
              EU SOU UM
              <br />
              <TextRotator />
            </h2>
            <p>Seja bem-vindo ao meu portfólio website</p>
          </div>

          <button onClick={handleDownloadCV}>
            <FaDownload size={16} style={{ marginRight: "8px" }} />
            Baixar CV
          </button>

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
          <img src={ImgHero} alt="Banner Hero" />
        </div>
      </section>
    </div>
  );
}

export default Home;
