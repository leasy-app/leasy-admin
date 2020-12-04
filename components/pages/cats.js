import styles from './cats.module.scss';
import cn from "classnames";

export default function CatsPage({className}){
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>
        <div className={styles.catCol}>
            <span className={styles.categoryTitle}>
                {"Categories"}
            </span>
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
            <CatTile image={"/images/test-back.jpg"} name={"Nature"}/> 
        </div>
        <div className={styles.addCat}>
        </div>
    </div>
}

function CatTile({image , name, id}) {
    return <div className={styles.tile}>
        <img src={image} className={styles.background}/>
        <div className={styles.blackCover}></div>
        <span className={styles.tileVal}>
            {name}
        </span>

    </div>
}