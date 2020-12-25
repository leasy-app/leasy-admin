import styles from "./courses.module.scss";
import cn from "classnames";
import Course from "../course/course";
import { useCourses } from "../../lib/logic/api";

export default function CoursesPage({className}){
    // const courses = [
    //     {title:"Neural Network Optimizers",
    //      desc:"Analyzing and Learning Neural Network Optimizers like Adam, AdaBelief, ...",
    //      authorPhoto:"images/user-photo.png",
    //       author:"Emma Hart", date:"Oct 15", image:"images/test-back.jpg"},
    // ];
    // [...Array(10).keys()].forEach(_ => courses.push(courses[0]));
    let {isError, isLoading, courses} = useCourses();
    let title;
    if(isError) title = "Unexpected Error Occured:(";
    else if(isLoading) title = "Loading...";
    else title = "Latest Courses";
    let incomplete = isError || isLoading;
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {title}
        </span>
        <div className={styles.coursesHolder}>
        {
            incomplete ? undefined :
            courses.map(course => <Course course={course}/>)
        }
        </div>
    </div>
}