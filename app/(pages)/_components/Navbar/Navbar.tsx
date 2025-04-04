'use client';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import styles from './Navbar.module.scss';
import useToggle from '@hooks/useToggle';

interface NavLink {
  name: string;
  slug: string;
}

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const {
    state: active,
    toggleState: toggleActive,
    setOff: setInactive,
  } = useToggle(false);
  return (
    <div className={styles.relative_wrapper}>
      <div className={styles.container}>
        <Link href="/" className={'logoText'}>
          matcha index
        </Link>
        <div className={styles.nav_container}>
          <div className={`${styles.links} ${active ? styles.active : null}`}>
            {navLinks.map((link) => {
              return (
                <Link key={link.slug} href={link.slug} onClick={setInactive}>
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button className={styles.menu} onClick={toggleActive}>
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}
