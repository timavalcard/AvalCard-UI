import Link from 'next/link';
import styles from './Card.module.css'

export default function Card({title, text, img}) {
    return(
        <div className={`grid justify-center items-center ${styles.boxGiftCard}`}>
                        <Link href={'/'} className='grid justify-center items-center'>
                            <img src={img} alt=""/>
                        </Link>
                        <div className={`text-center mt-3`}>
                            <Link href={'/'} className={`!text-base text-little-bold`}>
                                {title}
                            </Link>
                            <p className={`text-[#959595] font-normal text-[0.5rem]`}>
                            {text}
                            </p>
                        </div>
                    </div>
    );
}