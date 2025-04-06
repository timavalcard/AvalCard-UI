import Marquee from "react-fast-marquee";
import ItemMarquee from './ItemMarquee'
import styles from './MarqueeTop.module.css'

export default function MarqueeTop() {

    const items = [
        {
            title: 'امیررضا پهلوان',
            des: 'در سال 1380 به گروه اول کارت پیوست و در سمت مدیر اجرایی خوش درخشید.',
            icon: '/images/user-1.svg',
            job: 'مدیر اجرایی'
        },
        {
            title: 'امیررضا پهلوان',
            des: 'در سال 1380 به گروه اول کارت پیوست و در سمت مدیر اجرایی خوش درخشید.',
            icon: '/images/user-2.svg',
            job: 'مدیر اجرایی'
        },
        {
            title: 'امیررضا پهلوان',
            des: 'در سال 1380 به گروه اول کارت پیوست و در سمت مدیر اجرایی خوش درخشید.',
            icon: '/images/user-1.svg',
            job: 'مدیر اجرایی'
        },
        {
            title: 'امیررضا پهلوان',
            des: 'در سال 1380 به گروه اول کارت پیوست و در سمت مدیر اجرایی خوش درخشید.',
            icon: '/images/user-2.svg',
            job: 'مدیر اجرایی'
        },
        {
            title: 'امیررضا پهلوان',
            des: 'در سال 1380 به گروه اول کارت پیوست و در سمت مدیر اجرایی خوش درخشید.',
            icon: '/images/user-1.svg',
            job: 'مدیر اجرایی'
        },
    ]

    return (
        <div className={`mt-custom-4 mb-5 ${styles.marqueeFade}`}>
            <Marquee
                autoFill

            >
                {
                    items.map(item =>
                        <ItemMarquee {...item} />
                    )
                }
            </Marquee>
        </div>
    );
}