import { useRef, useState, useEffect } from 'react';
import MenuModal from './MenuModal';

export default function TemplateItem({ title, children, li = true }) {
    const [show, setShow] = useState(false);
    const titleRef = useRef(null);
    const [titleCenter, setTitleCenter] = useState(null);
    const [titlePos, setTitlePos] = useState(null);
    const wrapperRef = useRef(null);

    const getWrapperBounds = () => {
        if (wrapperRef.current) {
            return wrapperRef.current.getBoundingClientRect();
        }
        return null;
    };

    useEffect(() => {
        if (titleRef.current) {
            const rect = titleRef.current.getBoundingClientRect();
            setTitlePos({
                left: rect.left,
                right: rect.right,
                width: rect.width,
                bottom: rect.bottom,
            });
            setTitleCenter(rect.left + (rect.width / 2 - 14));
        }
    }, [titleRef]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (wrapperRef.current && wrapperRef.current.matches(':hover')) {
                return;
            }
            const bounds = getWrapperBounds();
            if (!bounds) return;

            const insideHorizontally = e.clientX >= bounds.left && e.clientX <= bounds.right;
            const insideVertically = e.clientY >= bounds.top && e.clientY <= bounds.bottom;
            
            if (!insideHorizontally || !insideVertically) {
                const verticalDistance = e.clientY - titlePos.bottom;
                if (verticalDistance > 70|| verticalDistance < 0) {
                    setShow(false);
                }
            }
        };

        if (show) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [show]);


    const handleMouseLeave = (e) => {    };

    const handleMouseEnter = () => {
        setShow(true);
    };

    const content = (
        <>
            <span ref={titleRef} className={'cursor-pointer '}>
                {title}
            </span>

            <MenuModal show={show} titleCenter={titleCenter} titlePos={titlePos} onClick={() => setShow(false)}>
                {children}
            </MenuModal>
        </>
    );

    const wrapperProps = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: 'relative',
        ref: wrapperRef
    };

    return <div {...wrapperProps}>{content}</div>;
}
