import styles from './button.module.scss';

export default function Button({icon, value, trigger}){
    return <div className={styles.button} onClick={trigger}>
        {icon ? <div className={styles.icon}>
            {icon}
        </div> : undefined}
        <div className={styles.text}>
            {value}
        </div>
    </div>
}