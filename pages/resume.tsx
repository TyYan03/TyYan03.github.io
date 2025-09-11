import styles from "@/styles/Resume.module.css";

const ResumePage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>
        My Resume
        <a href="/resume/TylerYanResume.pdf" download className={styles.button}>
          Download PDF
        </a>
        <a
          href="/resume/TylerYanResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Resume in New Tab
        </a>
      </h1>

      <div className={styles.container}>
        <iframe
          className={styles.pdf}
          src="/resume/TylerYanResume.pdf"
          width="100%"
          height="800px"
        ></iframe>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Resume" },
  };
}

export default ResumePage;
