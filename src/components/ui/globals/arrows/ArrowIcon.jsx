export default function ArrowIcon({ arrow = 'right', shadow, isBeginning, swiperInstance, isEnd, items, slideType=arrow }) {

    if (items) {
        if (swiperInstance && items.length > swiperInstance.params.slidesPerView) {
            return;
        }
    }

    const clickHandler = () => {
        if (swiperInstance) {
            if (slideType === 'left' || slideType === 'next' ) swiperInstance.slideNext();
            if (slideType === 'right' || slideType === 'prev' ) swiperInstance.slidePrev();
        }
    }

    return (
        <div>

            <div className={`w-12 h-12 rounded-full flex justify-center items-center cursor-pointer bg-white
            select-none
            ${shadow && 'shadow-[0px_29px_54px_0px_#90909075]'}
            ${isEnd || isBeginning ? 'opacity-50' : ''}
        `}
                onClick={clickHandler}
            >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${arrow === 'top' && '-rotate-90'} ${arrow === 'bottom' && 'rotate-90'} ${arrow === 'left' && 'rotate-180'}`}>
                    <path d="M1.65234 0.836914L6.34622 6.00018L1.65234 11.1634" stroke="black" stroke-width="1.87755" />
                </svg>
            </div>
        </div>
    );
}