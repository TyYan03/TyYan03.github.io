import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Tyler Yan</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I am a 4th year Computer Engineering Student at the University of
              Toronto, graduating in April 2026. I enjoy learning in a
              fast-paced environment, and I have been on the Dean&apos;s list
              every semester. I also enjoy problem-solving and coding, and I
              always strive to put 110% into all the work I do.
            </p>
            <p className={styles.paragraph}>
              I have worked with languages and technologies like Rust, Python,
              C, C++, C#, Java, HTML5, CSS, Swift, Assembly, Verilog, Flask,
              PyTorch, MongoDB, and Bootstrap through internships, coursework at
              UofT, hackathons, and personal projects. I am passionate about
              software development with an interest in artificial intelligence
              and machine learning.
            </p>
            <p className={styles.paragraph}>
              I am looking for an opportunity to work in a challenging position
              where I can fully use my Software Engineering and team
              collaboration skills to provide professional software development,
              and to ultimately grow as a developer.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of programming my personal interests include:
            </p>
            <p className={styles.paragraph}>
              • <span className={styles.highlight}>Playing Guitar</span>, I have
              been playing for 5 years (fully self-taught). I love playing songs
              by Eric Clapton, Santana, The Beatles, and Paul Simon (you can
              find some of my playing{" "}
              <a
                className={styles.link}
                href="https://www.instagram.com/ty.yan1?utm_source=ig_web_button_share_sheet&igsh=MTlxY28wNHRhZjZhaw=="
                target="_blank"
                rel="noopener"
              >
                here
              </a>
              ). I also write my own music in my free time.
            </p>
            <p className={styles.paragraph}>
              • <span className={styles.highlight}>Basketball</span>, I played
              competitive basketball at the Rep level for 6 years, and was the
              captain of my high school varsity team. I am also the captain for
              the Engineering Skule intramural basketball team at UofT (4 years
              and counting).
            </p>
            <p className={styles.paragraph}>
              • <span className={styles.highlight}>Chess</span>, I have been
              playing Chess since I was 7 years old. I played for my elementary
              school team, however since then I have mostly played casually with
              friends and family. I am always up to any challenge though (add me
              on chess.com{" "}
              <a
                href="https://www.chess.com/member/tyyan1"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                here
              </a>
              )!
            </p>
            <p className={styles.paragraph}>
              • <span className={styles.highlight}>Sketching</span>, I enjoy
              doing some light sketching whenever I see something that I find
              visually interesting (most of which occurs when I am travelling or
              in nature).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About Me" },
  };
}

export default AboutPage;
