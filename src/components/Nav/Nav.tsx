import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <nav id="hamburgerNav">
          <div className={styles.logo}>John Doe</div>
          <div className={styles.hamburgerMenu}>
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav id="desktopNav">
          <div className={styles.logo}>John Doe</div>
          <div>
            <ul className={styles.navLinks}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
