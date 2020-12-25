import styles from "./post.module.scss";
import cn from "classnames";
import { imageAddr } from "../../lib/logic/api";

const truncate = (input, len) => input.length > len ? `${input.substring(0, len)}...` : input;

export default function Post({post, className, divider}){
    return <div className={cn({
        [styles.post]: true,
        [className]: !!className,
    })}>
        <div className={styles.namesHolder}>
            <span className={styles.title}>{post.title}</span>
            <span className={styles.description}>{truncate(post.desc, 60)}</span>
            <div className={styles.authorHolder}>
                <img className={styles.authorPhoto} src={imageAddr(post.authorPhoto)}/>
                <span className={styles.authorName}>{post.author}</span>
                <span className={styles.bullet}>•</span>
                <span className={styles.date}>{post.date}</span>
            </div>
        </div>
        <img className={styles.image} src={imageAddr(post.image)}/>
    </div>
}