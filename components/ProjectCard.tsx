import React from "react";

import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onExpand: () => void;
}

const ProjectCard = ({ project, onExpand }: ProjectCardProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={styles.card}
      onClick={onExpand}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: project.image ? `url(${project.image})` : undefined,
      }}
    >
      <div
        className={styles.overlay}
        style={{
          backgroundColor: project.backgroundColor,
          opacity: hovered ? 0 : 0.8,
          zIndex: 0,
        }}
      />

      <div
        className={styles.cardContainer}
        style={{
          zIndex: 3,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className={styles.cardOverlay}
          style={{
            borderRadius: "8px",
            backgroundColor: project.backgroundColor,
            opacity: !hovered ? 0 : 0.7,
            zIndex: 0,
          }}
        />
        <h2 className={styles.title} style={{ zIndex: 2 }}>
          {project.title}
        </h2>
        <hr
          className={styles.bar}
          style={{
            backgroundColor: project.backgroundColor,
            zIndex: 2,
          }}
        />
        <h3 className={styles.subtitle} style={{ zIndex: 2 }}>
          {project.subtitle}
        </h3>
        <h6 className={styles.description} style={{ zIndex: 2 }}>
          {project.description}
        </h6>
      </div>
    </div>
  );
};

export default ProjectCard;
