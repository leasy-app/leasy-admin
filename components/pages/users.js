import styles from "./users.module.scss";
import cn from "classnames";
import User from "../user/user";
import { useUsers } from "../../lib/logic/api";

export default function UsersPage({className}){
    // const users = [
    //     {name:"Emma Hart", photo: "images/user-photo.png", reads: 121, writes: 17},
    // ];
    // [...Array(10).keys()].forEach(_ => users.push(users[0]));
    let {isError, isLoading, users} = useUsers();
    let title;
    if(isError) title = "Unexpected Error Occured:(";
    else if(isLoading) title = "Loading...";
    else title = "Users";
    let incomplete = isError || isLoading;
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {title}
        </span>
        <div className={styles.usersHolder}>
        { incomplete ? null:
            users.map(user => <User user={user}/>)
        }
        </div>
    </div>
}