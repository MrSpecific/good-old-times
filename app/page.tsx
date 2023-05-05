import { Suspense } from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import fireGif from '@public/fireanim.gif';
// import VistorCounter from '@components/';
import VisitorCounter from '@components/VisitorCounter';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <Image src={fireGif} alt="Animated fire" />
        </div>
        <h1>Good Old Times</h1>
        Bleeding-edge Web 1.0
        <Suspense>
          {/* @ts-expect-error Async Server Component */}
          <VisitorCounter />
        </Suspense>
      </div>
    </main>
  );
}
