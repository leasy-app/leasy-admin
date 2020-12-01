import Head from 'next/head'
import { useEffect, useState } from 'react'
import Button from '../components/button/button';
import Input from '../components/input/input'
import Auth from '../lib/logic/auth';
import styles from './index.module.scss'
import { useRouter } from 'next/router'

export default function Login() {
  let router = useRouter();
  const [state, setState] = useState({});
  useEffect(()=>{
    if(Auth.isAuthorized()){
      router.push('/admin');
      return;
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Leasy Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.loginPane}>
        <div className={styles.logoSet}> 
            <img className={styles.logo} src="/images/icon.png"/>
            <span className={styles.logoType}>
              {"Leasy Administration"}
            </span>
        </div>
        <Input hint={"Username"} value={state.uname} trigger={v => setState({...state, uname:v})}/> 
        <Input hint={"Password"} value={state.pwd} hide={true} trigger={v => setState({...state, pwd:v})}/> 
        <Button icon={<img src="/images/enter.png"/>} value={"Login"} trigger={()=>{
          let x = Auth.login(state.uname, state.pwd);
          if(x){
            router.push('/admin');
          }
        }}/>
      </div>
    </div>
  )
}
