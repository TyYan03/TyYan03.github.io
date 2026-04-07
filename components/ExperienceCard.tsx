import Image from "next/image";
import React, { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";

import { Experience } from "@/types";

import styles from "@/styles/ExperienceCard.module.css";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleCloseClick = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`${styles.experienceCard} ${expanded ? styles.expanded : ""}`}
      style={{ backgroundColor: experience.backgroundColor }}
    >
      {expanded && (
        <button className={styles.closeButton} onClick={handleCloseClick}>
          ×
        </button>
      )}
      <div className={styles.cardHeader}>
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={experience.image}
            alt={`${experience.employer} logo`}
            height={90}
            width={90}
            className={styles.logo}
          />
        </a>
        <div className={styles.headerMain} onClick={handleCardClick}>
          <div className={styles.companyInfo}>
            <div className={styles.companyName}>{experience.employer}</div>
            <div className={styles.jobTitle}>{experience.jobTitle}</div>
          </div>
          {experience.projectpage && (
            <div className={styles.projectLink}>
              <h2 className={styles.projectLinkLabel}>Project GitHub</h2>
              <a
                href={experience.projectpage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithubAlt
                  className={styles.githubIcon}
                  fill="rgb(0, 0, 0)"
                />
              </a>
            </div>
          )}
          <div className={styles.workTerm}>{experience.workTerm}</div>
        </div>
      </div>
      {expanded && (
        <hr
          className={styles.bar}
          style={{
            backgroundColor: experience.backgroundColor,
          }}
        />
      )}
      <div
        className={`${styles.cardContent} ${expanded ? styles.show : styles.hide}`}
      >
        <ul>
          {experience.accomplishments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
