import ProjectCard from "@/components/ProjectCard";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import { projects } from "@/data/projects";

import styles from "@/styles/ProjectsPage.module.css";
import { useState, useEffect, useRef } from "react";
import { Project } from "@/types";

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  const handleExpand = (project: Project | null) => {
    setExpandedProject(project);
  };

  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expandedProject && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [expandedProject]);

  return (
    <div className={styles.layout}>
      <div
        ref={detailsRef}
        style={{ paddingTop: "100px", marginTop: "-100px" }}
      >
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.pageSubtitle}>
          Here&apos;s a collection of my recent work showcasing my skills in
          software development, design, and problem-solving.
        </p>

        <div className={styles.container}>
          {expandedProject ? (
            <ProjectDetailsCard
              expandedProject={expandedProject}
              onExpand={() => handleExpand(null)}
            />
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onExpand={() => handleExpand(project)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;
