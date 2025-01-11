import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.text_overlay}>
        <h4>welcome to</h4>
        <h1 className={styles.bigText}>matcha</h1>
        <h1 className={styles.bigText}>index</h1>
      </div>
      <div className={styles.img_container}>
        <Image
          src="/index/matcha.jpg"
          fill
          alt="matcha"
          style={{ objectFit: 'cover', opacity: '0.3' }} // Image opacity applied here
        />
        <div className={styles.text_overlay}>
          <h1 className={styles.text}>let's find a matcha!</h1>
          <a href="../../powders" className={styles.button}>
            find powders
          </a>
        </div>
      </div>
    </div>
  );
}
