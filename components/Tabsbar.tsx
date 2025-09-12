import Tab from "@/components/Tab";

import styles from "@/styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about_me.html" path="/about" />
      <Tab
        icon="/logos/rust_icon.svg"
        filename="experience.rs"
        path="/experience"
      />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/pdf_icon.svg" filename="resume.pdf" path="/resume" />
    </div>
  );
};

export default Tabsbar;
