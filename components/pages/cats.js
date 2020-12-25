import styles from './cats.module.scss';
import Input from "../input/input";
import Button from "../button/button";
import cn from "classnames";
import {useRef, useState} from "react";
import { addCategory, imageAddr, uploadFile, useCategories } from '../../lib/logic/api';

export default function CatsPage({className}){
    const [state, setState] = useState({
        tgFile: "",
        name: null,
        prev: null,
    });
    const fileInput = useRef(null);
    const {cats, isLoading, isError} = useCategories();
    let content;
    if(isLoading || isError){
        content = (
            <div className={styles.catCol}>
                <span className={styles.categoryTitle}>
                    {isLoading ? "Loading..." : "Unexpected Error Occured:("}
                </span>
            </div>
        );
    }else{
        content = (
            <div className={styles.catCol}>
            <span className={styles.categoryTitle}>
                {"Categories"}
            </span>
            {cats.map(c => (
                <CatTile image={c.Photo} name={c.Name}/> 
            ))}
        </div>
        );
    }
    return <div className={cn({
        [styles.page]: true,
        [className]: !!className,
    })}>
        {content}
        {!isLoading && !isError ? (
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
            <Input hint={"Name"} value={state.name} trigger={name => setState({...state, name})}/>
            <Button value={"Add"} trigger={ async ()=>{
                if(state.tgFile && state.name){
                    let {ok, fname} = await uploadFile(state.tgFile);
                    if(ok){
                        let ok = await addCategory(state.name, fname);
                        if(ok){
                            setState({...state, tgFile: undefined, prev: undefined, name: ""});
                        }else{   
                            alert('unexpected error on add');
                        }
                    }else{
                        alert('unexpected error on upload');
                    }
                }
            }} />
        </div>
        ): null}
    </div>
}

function CatTile({image , name, id}) {
    return <div className={styles.tile}>

        <img src={imageAddr(image)} className={styles.background}/>
        <div className={styles.blackCover}></div>
        <span className={styles.tileVal}>
            {name}
        </span>

    </div>
}