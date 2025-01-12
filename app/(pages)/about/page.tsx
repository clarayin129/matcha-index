import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.spacer}>
        <h2 className={'headText'}>about matcha index</h2>
      </div>
      <div className={styles.container}>
        <p>
          It's hard to know what matcha powder to buy! There's not one place
          where you can view and compare all the matcha powders on the market.
          So, I built Matcha Index to help :)
        </p>
      </div>
      <div className={styles.spacer}>
        <h2 className={'headText'}>coming soon...</h2>
      </div>
      <div className={styles.container}>
        <p>
          Will be adding user accounts and more complete matcha information
          soon. Stay tuned!
        </p>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}
