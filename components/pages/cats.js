import styles from './cats.module.scss';
import Input from "../input/input";
import Button from "../button/button";
import cn from "classnames";
import {useRef, useState} from "react";

export default function CatsPage({className}){
    const [state, setState] = useState({
        tgFile: "",
        prev: null,
    });
    const fileInput = useRef(null);

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
            <div className={styles.addCatImage} onClick={()=>{
                fileInput.current.click();
            }}>
                
            {state.tgFile ? 
            <img className={styles.catImage} src={state.prev}/>
            :
            <img className={styles.addCatIcon} src={"/images/add-image.png"}/>}
            <input type="file" className={styles.tradInput} ref={fileInput} onChange={e => {
                let f = e.target.files[0];
                let reader = new FileReader();
                reader.onload = function (e) {
                    setState({...state, tgFile:f, prev: e.target.result});
                }
                reader.readAsDataURL(f);
            }}/>
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