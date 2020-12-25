import styles from "./user.module.scss";
import cn from "classnames";
import { imageAddr } from "../../lib/logic/api";

export default function User({user, className}){
    return <div className={cn({
        [styles.user]: true,
        [className]: !!className,
    })}>
        <img className={styles.userPhoto} alt="" src={imageAddr(user.photo)}/>
        <span className={styles.name}>{user.name}</span>
        <div className={styles.statPane}>
        <div className={styles.indicator}>
            <span className={styles.readInd}>{user.read}</span>
            <span className={styles.indicatorName}>Reads</span>
        </div>       
        <div className={styles.indicator}>
            <span className={styles.writeInd}>{user.like}</span>
            <span className={styles.indicatorName}>Likes</span>
        </div>  
        </div>     
    </div>
}