import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./page.module.css";

export default function TerceiroB() {
  return (
    <>
      <Header titulo="SESI TIMES" />

      <main>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tag}>SESI TIMES</span>

            <h1>
              TERCEIRO B
            </h1>

            <p>
              União, dedicação e espírito de equipe.
              Conheça o nosso time.
            </p>

            <a href="#time" className={styles.button}>
              Conheça nosso time
            </a>
          </div>
        </section>


        {/* SOBRE O TIME */}
        <section className={styles.about}>
          <div>
            <span className={styles.subtitle}>
              SOBRE O TIME
            </span>

            <h2>
              Mais que um time,
              <br />
              uma equipe.
            </h2>

            <p>
              O Terceiro B é formado por alunos que compartilham
              o mesmo objetivo: representar nossa turma com
              dedicação, respeito e espírito de equipe.
            </p>

            <p>
              Aqui cada integrante tem sua importância e todos
              trabalham juntos para alcançar grandes resultados.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <strong>3B</strong>
            <span>Nosso time</span>
          </div>
        </section>


        {/* TIME */}
        <section id="time" className={styles.team}>
          <span className={styles.subtitle}>
            NOSSA EQUIPE
          </span>

          <h2>
            Conheça nosso time
          </h2>

          <p className={styles.teamDescription}>
            Cada jogador faz parte dessa história.
          </p>

          <div className={styles.players}>

            <div className={styles.player}>
              <div className={styles.avatar}>01</div>
              <h3>Jogador 01</h3>
              <p>Capitão</p>
            </div>

            <div className={styles.player}>
              <div className={styles.avatar}>02</div>
              <h3>Jogador 02</h3>
              <p>Jogador</p>
            </div>

            <div className={styles.player}>
              <div className={styles.avatar}>03</div>
              <h3>Jogador 03</h3>
              <p>Jogador</p>
            </div>

            <div className={styles.player}>
              <div className={styles.avatar}>04</div>
              <h3>Jogador 04</h3>
              <p>Jogador</p>
            </div>

          </div>
        </section>


        {/* PRÓXIMO JOGO */}
        <section className={styles.game}>
          <span className={styles.subtitle}>
            PRÓXIMO DESAFIO
          </span>

          <h2>
            Próximo jogo
          </h2>

          <div className={styles.gameCard}>

            <div>
              <span>SESI TIMES</span>
              <h3>TERCEIRO B</h3>
            </div>

            <strong>VS</strong>

            <div>
              <span>ADVERSÁRIO</span>
              <h3>SEGUNDO A</h3>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}