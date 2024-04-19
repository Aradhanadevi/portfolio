import styles from './App.module.css'
import { About } from './components/About/About';
import { Experiance } from './components/Experiance/Experiance';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
  <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About/>
      <Experiance/>
      <Projects/>
    </div>
    );
}

export default App
