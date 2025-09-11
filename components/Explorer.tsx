import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

import styles from "@/styles/Explorer.module.css";
import { useRouter } from "next/router";

const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: "/logos/react_icon.svg",
  },
  {
    name: "about_me.html",
    path: "/about",
    icon: "/logos/html_icon.svg",
  },
  {
    name: "experience.rs",
    path: "/experience",
    icon: "/logos/rust_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "/logos/js_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "/logos/css_icon.svg",
  },
  // {
  //   name: "github.md",
  //   path: "/github",
  //   icon: "/logos/markdown_icon.svg",
  // },
  {
    name: "resume.pdf",
    path: "/resume",
    icon: "/logos/pdf_icon.svg",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => {
            const isActive = router.pathname === item.path;

            return (
              <Link href={item.path} key={item.name}>
                <div
                  className={`${styles.file} ${isActive ? styles.activeFile : ""}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{" "}
                  <p>{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
