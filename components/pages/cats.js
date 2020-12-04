import styles from './cats.module.scss';
import Input from "../input/input";
import Button from "../button/button";
import cn from "classnames";
import {useState} from "react";

export default function CatsPage({className}){
    const [state, setState] = useState({});
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
            <span className={styles.categoryTitle}>
                    {"Add Category"}
            </span>
            <div className={styles.addCatImage}>
                
            <img className={styles.addCatIcon} src={"/images/add-image.png"}/>
            </div>
            <Input hint={"Name"} value={state.name}/>
            <Button value={"Add"} />
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