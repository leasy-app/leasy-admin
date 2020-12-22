import styles from "./posts.module.scss";
import cn from "classnames";
import Post from "../post/post";

export default function PostsPage({className}){
    const posts = [
        {title:"Understanding the New AdaBelief Optimizer",
         desc:"We discuss the AdaBelief optimizer, explore how it works.",
         authorPhoto:"images/user-photo.png",
          author:"Emma Hart", date:"Oct 15", image:"images/test-back.jpg"},
    ];
    [...Array(10).keys()].forEach(_ => posts.push(posts[0]));
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {"Latest Posts"}
        </span>
        <div className={styles.postsHolder}>
        {
            posts.map(post => <Post post={post}/>)
        }
        </div>
    </div>
}