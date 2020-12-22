import styles from "./user.module.scss";
import cn from "classnames";

export default function User({user, className}){
    return <div className={cn({
        [styles.user]: true,
        [className]: !!className,
    })}>
        <img className={styles.userPhoto} src={user.photo}/>
        <span className={styles.name}>{user.name}</span>
        <div className={styles.indicator}>
            <span className={styles.readInd}>{user.reads}</span>
            <span className={styles.indicatorName}>Reads</span>
        </div>       
        <div className={styles.indicator}>
            <span className={styles.writeInd}>{user.writes}</span>
            <span className={styles.indicatorName}>Writes</span>
        </div>       
    </div>
}