import styles from './button.module.scss';

export default function Button({icon, value, trigger}){
    return <div className={styles.button} onClick={()=>{
       trigger && trigger();
    }}>
        <div className={styles.icon}>
            {icon}
        </div>
        <div className={styles.text}>
            {value}
        </div>
    </div>
}