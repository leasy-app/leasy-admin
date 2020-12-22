import Head from 'next/head'
import { useEffect, useState } from 'react'
import Auth from '../../lib/logic/auth';
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Sidebar from '../../components/sidebar/sidebar';
import StatsPage from '../../components/pages/stats';
import CatsPage from '../../components/pages/cats';
import PostsPage from '../../components/pages/posts';
import CoursesPage from '../../components/pages/courses';
import UsersPage from '../../components/pages/users';

export default function Admin() {
  let router = useRouter();
  const [state, setState] = useState({page: 0});
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
      <Sidebar items={[
        {icon: "/images/bar-chart.png", value: "Stats"},
        {icon: "/images/categories.png", value: "Categories"},
        {icon: "/images/document.png", value: "Posts"},
        {icon: "/images/course.png", value: "Courses"},
        {icon: "/images/user.png", value: "Users"},
        // {icon: "/images/exit.png", value: "Logout"},

      ]} className={styles.sidebar} selected={state.page} trigger={idx=>{
          setState({...state, page:idx});
      }}/>
      <div className={styles.divider}>

      </div>
      <div className={styles.content}>
          {
            (() => {
              if(state.page === 0){
                return <StatsPage/>
              }else if(state.page === 1){
                return <CatsPage/>
              }else if(state.page === 2){
                return <PostsPage/>
              }else if(state.page === 3){
                return <CoursesPage/>
              }else if(state.page === 4){
                return <UsersPage/>
              }
            })()
          }
      </div>
    </div>
  )
}
