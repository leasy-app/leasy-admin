import styles from "./users.module.scss";
import cn from "classnames";
import User from "../user/user";

export default function UsersPage({className}){
    const users = [
        {name:"Emma Hart", photo: "images/user-photo.png", reads: 121, writes: 17},
    ];
    [...Array(10).keys()].forEach(_ => users.push(users[0]));
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {"Users"}
        </span>
        <div className={styles.usersHolder}>
        {
            users.map(user => <User user={user}/>)
        }
        </div>
    </div>
}