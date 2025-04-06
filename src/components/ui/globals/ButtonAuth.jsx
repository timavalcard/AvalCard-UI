import styles from './ButtonAuth.module.css'

export default function ButtonAuth({text , classes}){

    return(
        <button className={`${styles.btn} ${classes}`}>{text}</button>
    )
}