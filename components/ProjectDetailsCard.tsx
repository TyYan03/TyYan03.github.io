import React from "react";
import { Project } from "@/types";
import styles from "@/styles/ProjectDetailsCard.module.css";
import { SiGithub } from "react-icons/si";
import { CiLink } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";

interface ProjectDetailsCardProps {
  expandedProject: Project;
  onExpand: (project: Project | null) => void;
}

const ProjectDetailsCard = ({
  expandedProject,
  onExpand,
}: ProjectDetailsCardProps) => {
  return (
    <div className={styles.card}>
      {expandedProject.image && (
        <div
          className={styles.banner}
          style={{
            backgroundImage: expandedProject.detailImage
              ? `url(${expandedProject.detailImage})`
              : undefined,
          }}
        >
          <div
            className={styles.overlay}
            style={{ background: expandedProject.backgroundColor }}
          />
          <button className={styles.closeButton} onClick={() => onExpand(null)}>
            ✕
          </button>

          <div className={styles.bannerText}>
            <h2 className={styles.title}>{expandedProject.title}</h2>
            <hr
              className={styles.bar}
              style={{
                backgroundColor: expandedProject.backgroundColor,
                zIndex: 2,
              }}
            />
            <h2 className={styles.subtitle}>{expandedProject.subtitle}</h2>
            <h6 className={styles.description}>
              {expandedProject.description}
            </h6>
          </div>
        </div>
      )}

      <div className={styles.contentSection}>
        <div>
          {expandedProject.link && (
            <h4 className={styles.linkBox}>
              <a
                href={expandedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.customLink}
              >
                <SiGithub /> View Source Code
              </a>
            </h4>
          )}
          {expandedProject.projectLink && (
            <h4 className={styles.linkBox}>
              <a
                href={expandedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.customLink}
              >
                <CiLink /> View Hackathon Page
              </a>
            </h4>
          )}
          {expandedProject.paper && (
            <h4 className={styles.linkBox}>
              <a
                href={expandedProject.paper}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.customLink}
              >
                <IoNewspaperOutline /> View Research Paper
              </a>
            </h4>
          )}
          <div
            className={styles.technologiesContainer}
            style={{
              flexWrap: "wrap",
            }}
          >
            {expandedProject.technologies.map((badge) => (
              <img
                key={badge.name}
                src={badge.url}
                alt={`${badge.name} badge`}
                style={{ borderRadius: "8px" }}
                title={badge.name}
                height={40}
              />
            ))}
          </div>
          <h5 className={styles.projectDescription}>
            {expandedProject.projectDescription}
          </h5>
          <h1 className={styles.descriptionTitle}>Motivation:</h1>
          <h5 className={styles.projectDescription}>
            {expandedProject.motivation}
          </h5>
          <h1 className={styles.descriptionTitle}>How it Works:</h1>
          <h5 className={styles.projectDescription}>
            {expandedProject.howItWorks}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
