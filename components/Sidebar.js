import React, { useState } from 'react';
import styles from '../styles/layout.module.css';

const Sidebar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <button className={styles.closeButton} onClick={closeMenu}> ❌</button>
        <h1>Social Groww</h1>
        <ul>
          <li><span className="material-symbols-outlined">home</span> <>Home</></li>
          <li><span className="material-symbols-outlined">search</span> <>Search</></li>
          <li><span className="material-symbols-outlined">notifications</span> <>Notifications</></li>
          <li><span className="material-symbols-outlined">movie</span> <>Reels</></li>
          <li><span className="material-symbols-outlined">add</span> <>Create</></li>
          <li><span className="material-symbols-outlined">forum</span> <>Messages</></li>
          <li><span className="material-symbols-outlined">explore</span> <>Explore</></li>
          <div className={styles.pr}>
          <li ><span class="material-symbols-outlined">account_circle</span><>My Profile</></li>
          </div>
        </ul>
      </div>
      <main className={styles.mainContent}>
        {props.props}
      </main>
    </div>
  );
};

export default Sidebar;
