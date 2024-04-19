import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Aradhana</h1>
        <p className={styles.description}>
            I am a web developer, also I like making 3D modles in 
            blender, and sometimes I also make games.
        </p>
        <a href="mailto:aradhanajadeja81@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/try.jpeg")} alt="My Image" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
}
