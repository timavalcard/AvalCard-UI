import styles from './Styles.module.css'

export default function SwiperRightArrow({ swiperInstance, className }) {
    return (
        <div className={`${styles.rightArrow} ${className}`} onClick={() => swiperInstance && swiperInstance.slidePrev()}>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.28394 1.56427L7.46789 7.22917C8.19821 7.89818 8.19821 8.99293 7.46789 9.66195L1.28394 15.3268"
                    stroke="#959595" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}