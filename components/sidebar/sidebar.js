import styles from './sidebar.module.scss';
import cn from "classnames";

export default function Sidebar({items, selected, className, trigger}){
    return <div className={cn({
        [styles.sidebar]: true,
        [className]: !!className,
    })}>
    <div className={styles.fspace1}>

    </div>
         <div className={styles.logoSet}> 
            <img className={styles.logo} src="/images/icon.png"/>
            <span className={styles.logoType}>
              {"Leasy"}
            </span>
        </div>
        <div className={styles.fspace2}>

        </div>
        <div>
        {items.map((it, idx) => {
            return <div className={cn({
                [styles.sidebarButton]: true,
                [styles.active]: selected == idx,
            })} onClick={()=>{
                trigger && trigger(idx);
            }}>
                        <div className={styles.icon}>
                            <img src={it.icon}/>
                        </div>
                        <div className={styles.text}>
                            {it.value}
                        </div>
                    </div>
        })}
        </div>
        <div className={styles.fspace2}>
            
        </div>
    </div>
}