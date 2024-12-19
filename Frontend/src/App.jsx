import styles from './App.module.css';
import Forms from './components/Forms'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Preview from './components/Preview'

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <picture className={styles.Logo}>
          <img src="/" alt="FORTESlogo" className={styles.image} />
        </picture>
        <article>
          <h1 className={styles.Title}>DATOS DE FACTURACION</h1>
        </article>
        <Forms />
        {/* <Preview /> */}
      </main>
      <Footer />
    </>
  )
};