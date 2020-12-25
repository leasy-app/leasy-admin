import styles from './stats.module.scss';
import cn from "classnames";
import { useStats } from '../../lib/logic/api';

export default function StatsPage({className}){
    let {isError, isLoading, stats} = useStats();
    let title;
    if(isError) title = "Unexpected Error Occured:(";
    else if(isLoading) title = "Loading...";
    else title = "Statistics";
    let incomplete = isError || isLoading;
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>
        <span className={styles.title}>
            {title}
        </span>
        {incomplete ? undefined : 
            <div className={styles.tileRow}>
                <StatTile icon={"/images/verified.png"} value={stats.users} name={"Users"}/>
                <StatTile icon={"/images/post.png"} value={stats.posts} name={"Posts"}/>
                <StatTile icon={"/images/graduation.png"} value={stats.courses} name={"Courses"}/>
                <StatTile icon={"/images/feather.png"} value={stats.reads} name={"Reads"}/>
            </div>
    }
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