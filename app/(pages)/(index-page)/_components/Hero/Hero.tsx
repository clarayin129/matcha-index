import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.text_overlay}>
        <h3>welcome to</h3>
        <h1 className={styles.bigText}>matcha</h1>
        <h1 className={styles.bigText}>index</h1>
        <h4>find a matcha powder that suits your needs!</h4>
        <a href="../../powders" className={styles.button}>
          <h4>let's go →</h4>
        </a>
      </div>
      <div>
        <Image
          src="/index/matcha.jpg"
          fill
          alt="matcha"
          style={{ objectFit: 'cover', opacity: '0.3' }}
        />
      </div>
    </div>
  );
}
