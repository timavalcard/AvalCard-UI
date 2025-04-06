import styles from './Styles.module.css'

export default function SwiperDots({ swiperInstance, slides, activeIndex }) {
    if (!swiperInstance || !swiperInstance.params) return null;

    const slidesPerView = swiperInstance.params.slidesPerView || 1;
    
    const totalDots = Math.max(slides.length - slidesPerView + 1, 1);
    
    const activeDot = Math.min(activeIndex, totalDots - 1);

    return (
        <>
            {Array.from({ length: totalDots }).map((_, index) => (
                <svg
                    key={index}
                    onClick={() => {
                        swiperInstance.slideTo(index);
                    }}
                    className="cursor-pointer"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.65046 4.50707C8.65046 5.66185 8.2609 6.60098 7.48177 7.32446C6.70264 8.04794 5.72177 8.40968 4.53916 8.40968C3.34264 8.40968 2.35481 8.04794 1.57568 7.32446C0.796549 6.60098 0.406984 5.66185 0.406984 4.50707C0.406984 3.3662 0.796549 2.43402 1.57568 1.71054C2.3409 1.00098 3.32872 0.646197 4.53916 0.646197C5.73568 0.646197 6.72351 1.00098 7.50264 1.71054C8.26785 2.43402 8.65046 3.3662 8.65046 4.50707Z"
                        fill={index === activeDot ? "#3664FF" : "#DDDDDD"}
                    />
                </svg>
            ))}
        </>
    );
}
