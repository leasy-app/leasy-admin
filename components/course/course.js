import styles from "./course.module.scss";
import cn from "classnames";
import { imageAddr } from "../../lib/logic/api";

export default function Course({course, className, divider}){
    return <div className={cn({
        [styles.course]: true,
        [className]: !!className,
    })}>
        <div className={styles.namesHolder}>
            <span className={styles.title}>{course.Name}</span>
            <span className={styles.description}>{course.Explanation}</span>
            {/* <div className={styles.authorHolder}>
                <img className={styles.authorPhoto} src={course.authorPhoto}/>
                <span className={styles.authorName}>{course.author}</span>
                <span className={styles.bullet}>•</span>
                <span className={styles.date}>{course.date}</span>
            </div> */}
        </div>
        <img className={styles.image} src={imageAddr(course.Picture)}/>
    </div>
}