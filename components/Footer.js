import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Stephen MESNILDREY" className={styles.logo} /> by Stephen MESNILDREY
      </footer>
    </>
  )
}
