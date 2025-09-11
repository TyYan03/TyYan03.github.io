import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

import styles from "@/styles/ExperiencesPage.module.css";

const ExperiencePage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Work Experience</h1>
      <p className={styles.pageSubtitle}>
        Listed below are the various roles and positions I have held in my
        professional career.
      </p>

      <div className={styles.container}>
        <div
          className={styles.experiencesContainer}
          style={{ flexDirection: "column" }}
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
