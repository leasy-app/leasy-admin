import styles from "./course.module.scss";
import cn from "classnames";

export default function Course({course, className, divider}){
    return <div className={cn({
        [styles.course]: true,
        [className]: !!className,
    })}>
        <div className={styles.namesHolder}>
            <span className={styles.title}>{course.title}</span>
            <span className={styles.description}>{course.desc}</span>
            <div className={styles.authorHolder}>
                <img className={styles.authorPhoto} src={course.authorPhoto}/>
                <span className={styles.authorName}>{course.author}</span>
                <span className={styles.bullet}>•</span>
                <span className={styles.date}>{course.date}</span>
            </div>
        </div>
        <img className={styles.image} src={course.image}/>
    </div>
}