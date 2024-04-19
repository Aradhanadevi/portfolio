import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content} >
            <img 
            src={getImageUrl("about/about.png")} 
            alt="Dead" 
            className={styles.aboutImage}
            />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>Front End Developer</h3>
                    <p>I'm front end dev with experince of making 
                    wonder responsive website.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>Back End Developer</h3>
                    <p>I know how to use backend using node js.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>UI/UX Designer</h3>
                    <p>I'm front end dev with experince of making 
                    wonder responsive website.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
