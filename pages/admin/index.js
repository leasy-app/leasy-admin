import Head from 'next/head'
import { useEffect, useState } from 'react'
import Auth from '../../lib/logic/auth';
import styles from './index.module.scss'
import { useRouter } from 'next/router'

export default function Admin() {
  let router = useRouter();
  const [state, setState] = useState({});
  useEffect(()=>{
    if(!Auth.isAuthorized()){
      router.push('/');
      return;
    }
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Leasy Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.loginPane}>
        {"Welcome"}
      </div>
    </div>
  )
}
