
import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Project/Project';
import { Skills } from './components/Skills/Skills';

function App() {


  return (
    <>
      <div className={styles.App}> 
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
