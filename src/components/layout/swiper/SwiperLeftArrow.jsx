import styles from './Styles.module.css'

export default function SwiperLeftArrow({ swiperInstance, className }) {
    return (
        <div className={`${styles.leftArrow} ${className}`} onClick={() => swiperInstance && swiperInstance.slideNext()}>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84451 15.3437L1.68918 9.6477C0.96225 8.97501 0.967768 7.88028 1.70145 7.21495L7.91388 1.5813"
                    stroke="#959595" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}