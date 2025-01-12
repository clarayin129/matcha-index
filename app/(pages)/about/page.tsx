import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.body}>
      <div className={styles.spacer}>
        <h2 className={'headText'}>about matcha index</h2>
      </div>
      <div className={styles.container}>
        <p>
          It's hard to know what matcha powder to buy! Use Matcha Index to help.{' '}
        </p>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}
