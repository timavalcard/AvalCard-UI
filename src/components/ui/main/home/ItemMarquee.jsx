import styles from './MarqueeTop.module.css'

export default function ItemMarquee(props){
    return(
        <div className={`font-medium ${styles.boxItem}`}>
            <div>
            <img loading="lazy" src={props.icon} />
            </div>

            <div className={`mt-4 ${styles.info}`}>
                <div className={`text-xl ${styles.title}`}>
                    {props.title}
                </div>
                <div className={`text-base mt-1.5 text-muted-2.5 ${styles.title}`}>
                    {props.job}
                </div>
                <div className={`text-sm text-muted-5 mt-3 ${styles.des}`}>
                    {props.des}
                </div>
            </div>

        </div>
    );
}