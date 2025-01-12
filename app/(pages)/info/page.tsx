import styles from './page.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.body}>
      <div className={styles.spacer}>
        <h2 className={'headText'}>matcha drinks</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <h2 className={'headText'}>Latte</h2>
          <div className={styles.text}>
            A great introduction to matcha! Made from whisking matcha powder
            with hot water or milk, and then pouring it into a glass of milk.
            Works with any plant milk (best with oat milk), and you can even add
            fruit puree, cold foam, or any other flavoring.
          </div>
        </div>
        <Image
          src="/index/matchalatte.jpg"
          alt="matcha"
          width="600"
          height="700"
        />
        <Image src="/index/usucha.jpg" alt="matcha" width="600" height="700" />
        <div className={styles.infoBox}>
          <h2 className={'headText'}>Usucha</h2>
          <div>
            Usucha is a traditional Japanese method of preparing matcha green
            tea that translates to "thin tea". It's the most common way to
            prepare matcha and is often used for everyday drinking. It is made
            by whisking just water with matcha powder, so one can taste the
            flavor more clearly.
          </div>
        </div>
        <div className={styles.infoBox}>
          <h2 className={'headText'}>Koicha</h2>
          <div>
            Koicha, literally translated as 'thick tea', refers to a style of
            matcha preparation that is much more concentrated than usucha, and
            is traditionally prepared as a communal drink during a tea ceremony
            to be shared among the guests. It is made similarly to usucha, but
            with a higher matcha powder to water ratio.
          </div>
        </div>
        <Image src="/index/koicha.jpg" alt="matcha" width="600" height="600" />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}
