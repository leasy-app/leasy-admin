import styles from './input.module.scss';

export default function Input({hint, value, hide, trigger}){
    return <div className={styles.inputHolder}>
        <input className={styles.input} placeholder={hint} type={hide ? "password" : undefined} value={value} onChange={(e)=>{
            trigger && trigger(e.target.value);
        }}>
        </input>
    </div>
}