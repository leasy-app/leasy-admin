import styles from "./courses.module.scss";
import cn from "classnames";
import Course from "../course/course";

export default function CoursesPage({className}){
    const courses = [
        {title:"Neural Network Optimizers",
         desc:"Analyzing and Learning Neural Network Optimizers like Adam, AdaBelief, ...",
         authorPhoto:"images/user-photo.png",
          author:"Emma Hart", date:"Oct 15", image:"images/test-back.jpg"},
    ];
    [...Array(10).keys()].forEach(_ => courses.push(courses[0]));
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {"Latest Courses"}
        </span>
        <div className={styles.coursesHolder}>
        {
            courses.map(course => <Course course={course}/>)
        }
        </div>
    </div>
}