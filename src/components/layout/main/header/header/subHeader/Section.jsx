import styles from './MenuModal.module.css'

export default function Section({title, children, className, titleClassName}){
    return(
        <div className={className}>
            {
                title &&
            <h6 className={`${styles.textGray} uppercase text-xs mb-3`}>{title}</h6>
            }

            <div className={'pl-2'}>
                {children}
            </div>
        </div>
    )
}