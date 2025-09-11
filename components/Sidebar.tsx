import Link from "next/link";
import { useRouter } from "next/router";
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscFiles,
} from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

import styles from "@/styles/Sidebar.module.css";

const sidebarTopItems = [
  { Icon: VscFiles, path: "/" },
  { Icon: VscGithubAlt, path: "https://github.com/TyYan03" },
  { Icon: SiLinkedin, path: "https://www.linkedin.com/in/tyler--yan/" },
  { Icon: VscMail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: "/about" },
  { Icon: VscSettings, path: "/settings" },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link
            href={path}
            key={path}
            target={
              Icon === SiLinkedin || Icon === VscGithubAlt
                ? "_blank"
                : undefined
            }
            rel={
              Icon === SiLinkedin || Icon === VscGithubAlt
                ? "noopener"
                : undefined
            }
          >
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                size={16}
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
