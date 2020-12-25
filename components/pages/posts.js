import styles from "./posts.module.scss";
import cn from "classnames";
import Post from "../post/post";
import { usePosts } from "../../lib/logic/api";

export default function PostsPage({className}){
    // const posts = [
    //     {title:"Understanding the New AdaBelief Optimizer",
    //      desc:"We discuss the AdaBelief optimizer, explore how it works.",
    //      authorPhoto:"images/user-photo.png",
    //       author:"Emma Hart", date:"Oct 15", image:"images/test-back.jpg"},
    // ];
    // [...Array(10).keys()].forEach(_ => posts.push(posts[0]));
    let {isError, isLoading, posts} = usePosts();
    let title;
    if(isError) title = "Unexpected Error Occured:(";
    else if(isLoading) title = "Loading...";
    else title = "Latest Posts";
    let incomplete = isError || isLoading;
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>

        <span className={styles.title}>
            {title}
        </span>
        <div className={styles.postsHolder}>
        {
            incomplete ? undefined :
            posts.map(post => {
                let np = {
                    id: post.Id,
                    title: post.Name,
                    desc: post.Summary,
                    authorPhoto: "",
                    author: post.Writer_id,
                    date: post.Create_time,
                    image: post.Header_photo
                };
                return <Post post={np}/>
            })
        }
        </div>
    </div>
}