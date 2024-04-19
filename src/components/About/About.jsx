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
                <img src={getImageUrl("about/cursor.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>Front End Developer</h3>
                    <p>Front End Developer adept at crafting visually stunning and responsive websites. 
                        Proficient in React.js, JavaScript, and HTML, with a keen eye for design and usability.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/server.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>Back End Developer</h3>
                    <p>Seasoned Backend Developer proficient in creating robust and scalable web applications. 
                        Expertise in technologies such as Node.js,Express, and MongoDB, ensuring seamless
                        functionality and optimal performance.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/modeling.png")} alt="Arrow"/>
                <div className={styles.aboutItemsText}>
                    <h3>3D Modeling</h3>
                    <p>Experienced 3D Modeler proficient in Blender, with a keen eye for detail and
                         creativity. Specializing in creating captivating visual assets and
                          immersive environments for a variety of projects.
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
