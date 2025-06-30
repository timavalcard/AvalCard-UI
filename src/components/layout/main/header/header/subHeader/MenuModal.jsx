import { useRef, useEffect, useState } from 'react';
import styles from './MenuModal.module.css';

const MenuModal = ({ show, children, titleCenter, titlePos, onClick }) => {

    const modalRef = useRef(null);
    const [adjust, setAdjust] = useState(false);
    const [svgLeft, setSvgLeft] = useState('50%');

    useEffect(() => {
        if (modalRef.current) {
            const modalRect = modalRef.current.getBoundingClientRect();
            const overflowsRight = modalRect.right > (window.innerWidth - 20);
            const overflowsLeft = modalRect.left < 20;



            if (overflowsRight) {
                setAdjust('right');
            }

            if (overflowsLeft) {
                setAdjust('left');
            }

        }
    }, []);

    useEffect(() => {
        if (titleCenter) {
            const modalRect = modalRef.current.getBoundingClientRect();
            const svgPos = titleCenter - (modalRect.left );
            setSvgLeft(`${svgPos}px`);
        }
    }, [titleCenter, show])

    return (
        <div
            ref={modalRef}
            className={`
            
                ${styles.modal} 
                ${show ? styles.show : styles.hide} 
                ${adjust === 'left' ? styles.adjustLeft : ''}
                ${adjust === 'right' ? styles.adjustRight : ''}
            `}
            style={{
                left: adjust === 'left' ? (-titlePos.left + 8) : (adjust === 'right' && 'auto'),
                right: adjust === 'right' && (-(window.innerWidth - titlePos.right)) ,
                transform: adjust && `translateX(0)`
            }}
            onClick={onClick}
        >
            <svg
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${styles.svgIcon}`}
                style={{ left: svgLeft }}
            >
                <path
                    className={'shadow'}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 13.7254H26.2354C26.058 13.2894 25.8132 12.8809 25.5011 12.5207L15.7371 1.25218C14.2904 -0.417393 11.945 -0.417395 10.4983 1.25218L0.734338 12.5207C0.422218 12.8809 0.177439 13.2894 0 13.7254Z"
                    fill="white"
                />
            </svg>
            <div className={`shadow-lg ${styles.content}`}>{children}</div>
        </div>
    );
};

export default MenuModal;
