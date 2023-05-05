// 'use client';

// import { useEffect, useRef } from 'react';
import kv from '@vercel/kv';
import useSessionStorage from '@hooks/useSessionStorage';
import styles from './VisitorCounter.module.css';
import { ReactComponentElement } from 'react';

export default async function VisitorCounter() {
  // const visitorCount: any = useRef(0);
  // await kv.set('user_1_session', 'session_token_value');
  // let visitorCount: any;
  // const { get, set } = useSessionStorage();

  // if (!get('hasBeenCounted')) {
  // useEffect(() => {
  //   const getVisitorCount = async () => {
  //     const count = await kv.incr('vistorcount');
  //     visitorCount.current = count;
  //   };
  //   getVisitorCount();
  // }, []);
  // visitorCount = ;
  // } else {
  //   visitorCount = await kv.get('vistorcount');
  //   set('hasBeenCounted', 'true');
  // }
  // const visitorCount: any = await kv.get('vistorcount');
  // console.log(visitorCount);
  let index = 0;
  const visitorCount = await kv.incr('vistorcount');
  const countArray = visitorCount ? visitorCount.toString().split('') : [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>
        {countArray.map((number: string) => (
          <span key={`digit-${index++}`} className={styles.digit}>
            {number}
          </span>
        ))}
      </div>
      Visitors since 2023
    </div>
  );
}
