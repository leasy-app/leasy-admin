import styles from './stats.module.scss';
import cn from "classnames";

export default function StatsPage({className}){
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>
        <div className={styles.tileRow}>
            <StatTile icon={"/images/verified.png"} value={14000} name={"Users"}/>
            <StatTile icon={"/images/post.png"} value={200} name={"Posts"}/>
            <StatTile icon={"/images/edit.png"} value={70} name={"Authors"}/>
            <StatTile icon={"/images/feather.png"} value={30000} name={"Reads"}/>
        </div>
    </div>
}

function StatTile({icon , name, value}) {
    return <div className={styles.tile}>
        <img src={icon} className={styles.tileIcon}/>
        <span className={styles.tileVal}>
            {value + " " + name}
        </span>
    </div>
}