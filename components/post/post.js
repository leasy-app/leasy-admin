import styles from "./post.module.scss";
import cn from "classnames";

export default function Post({post, className, divider}){
    return <div className={cn({
        [styles.post]: true,
        [className]: !!className,
    })}>
        <div className={styles.namesHolder}>
            <span className={styles.title}>{post.title}</span>
            <span className={styles.description}>{post.desc}</span>
            <div className={styles.authorHolder}>
                <img className={styles.authorPhoto} src={post.authorPhoto}/>
                <span className={styles.authorName}>{post.author}</span>
                <span className={styles.bullet}>•</span>
                <span className={styles.date}>{post.date}</span>
            </div>
        </div>
        <img className={styles.image} src={post.image}/>
    </div>
}