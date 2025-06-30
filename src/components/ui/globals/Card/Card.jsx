import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ title, text, img, url = "#", alt, showTime, time }) {
    return (
        <div className={`grid justify-center items-center border border-transparent transition-all duration-300 hover:border-blue-custom ${styles.boxGiftCard}`}>
            <Link href={url} className='grid justify-center items-center'>
                <img loading="lazy" src={img} alt={alt} className='rounded-xl' />
            </Link>
            <div className={`text-center mt-3`}>
                <Link href={url} className={`md:!text-base !text-sm text-little-bold min-h-12 block`}>
                    {title}
                </Link>

                {showTime && (
                    <p className="text-[#767375] text-[0.65rem] mt-1">
                        مدت زمان تحویل : {time}
                    </p>
                )}

                <p
                    dangerouslySetInnerHTML={{ __html: text }}
                    className={`text-[#959595] font-normal text-[0.5rem] mt-1`}
                />
            </div>
        </div>
    );
}
