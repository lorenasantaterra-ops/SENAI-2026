import Image from "next/image";
import Tubarao from './img/banner.jpg';

export default function Home() {
  return (
    <>
      <header>
        <h1>Terceiro Shark</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
          <a href="/fotos">Fotos</a>
        </nav>
      </header>

      <main>
        <div className="hero">
          <div className="hero-content">
            <span>BEM-VINDO</span>

            <h2>
              Conheça o
              <br />
              Terceiro Shark
            </h2>

            <p>
              Explore o mundo fascinante dos tubarões
              e descubra curiosidades incríveis.
            </p>

            <a href="/fotos" className="botao">
              Ver fotos →
            </a>
          </div>
        </div>

        <section className="sobre">
          <div>
            <span>SOBRE NÓS</span>
            <h2>Quem somos</h2>

            <p>
              Somos apaixonados pelo oceano e pela vida
              marinha. Nosso objetivo é levar conhecimento
              e conscientização sobre os tubarões.
            </p>
          </div>

          <Image src={Tubarao} alt="Tubarão" />
        </section>
      </main>

      <footer>
        <p>© 2026 Terceiro Shark</p>
      </footer>
    </>
  );
}