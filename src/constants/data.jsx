export const menuMain = [
    // {
    //     value: ' خدمات',

    //     href: '#'
    // },
    {
        value: 'بلاگ',

        href: '/mag'
    },
    {
        value: 'تماس با ما',

        href: '/contact-us'
    },
    {
        value: 'درباره ما',

        href: '/about-us'
    }
];

export const menuMainMobile = [
    {
        value: 'لیست خدمات',
        svg: (
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7363 10C18.7363 8.62 19.8563 7.5 21.2363 7.5V6.5C21.2363 2.5 20.2363 1.5 16.2363 1.5H6.23633C2.23633 1.5 1.23633 2.5 1.23633 6.5V7C2.61633 7 3.73633 8.12 3.73633 9.5C3.73633 10.88 2.61633 12 1.23633 12V12.5C1.23633 16.5 2.23633 17.5 6.23633 17.5H16.2363C20.2363 17.5 21.2363 16.5 21.2363 12.5C19.8563 12.5 18.7363 11.38 18.7363 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        children: [
            {
                value: 'خرید گیفت کارت',
                href: '/gift-card'
            },
            {
                value: 'نقد کردن درامد دلاری',
                href: '/currency-income'
            },
            {
                value: "پرداخت در وب‌سایت‌های خارجی",
                href: "/foreign-payment"
            },
            {
                value: "خرید کالا از وب سایت‌های خارجی",
                href: "/buy-deliver-iran"
            }
        ]
    },
    {
        value: 'بلاگ',
        svg: (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2363 10.5V15.5C22.2363 20.5 20.2363 22.5 15.2363 22.5H9.23633C4.23633 22.5 2.23633 20.5 2.23633 15.5V9.5C2.23633 4.5 4.23633 2.5 9.23633 2.5H14.2363" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.2363 10.5H18.2363C15.2363 10.5 14.2363 9.5 14.2363 6.5V2.5L22.2363 10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.23633 13.5H13.2363" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.23633 17.5H11.2363" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        href: '/mag'
    },
    {
        value: 'درباره ما',
        svg: (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2363 22.5C17.7363 22.5 22.2363 18 22.2363 12.5C22.2363 7 17.7363 2.5 12.2363 2.5C6.73633 2.5 2.23633 7 2.23633 12.5C2.23633 18 6.73633 22.5 12.2363 22.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.2363 8.5V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.231 16.5H12.2399" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        href: '/about-us'
    }
    ,
    {
        value: 'تماس با ما',
        svg: (
            <svg width="24" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.2787 34.1053C40.2787 34.7653 40.132 35.4437 39.8203 36.1037C39.5087 36.7637 39.1053 37.387 38.5737 37.9737C37.6753 38.9637 36.6853 39.6787 35.567 40.137C34.467 40.5953 33.2753 40.8337 31.992 40.8337C30.122 40.8337 28.1237 40.3937 26.0153 39.4953C23.907 38.597 21.7987 37.387 19.7087 35.8653C17.6003 34.3253 15.602 32.6203 13.6953 30.732C11.807 28.8253 10.102 26.827 8.58033 24.737C7.07699 22.647 5.86699 20.557 4.98699 18.4853C4.10699 16.3953 3.66699 14.397 3.66699 12.4903C3.66699 11.2437 3.88699 10.052 4.32699 8.95199C4.76699 7.83366 5.46366 6.80699 6.43533 5.89033C7.60866 4.73533 8.89199 4.16699 10.2487 4.16699C10.762 4.16699 11.2753 4.27699 11.7337 4.49699C12.2103 4.71699 12.632 5.04699 12.962 5.52366L17.2153 11.5187C17.5453 11.977 17.7837 12.3987 17.9487 12.802C18.1137 13.187 18.2053 13.572 18.2053 13.9203C18.2053 14.3603 18.077 14.8003 17.8203 15.222C17.582 15.6437 17.2337 16.0837 16.7937 16.5237L15.4003 17.972C15.1987 18.1737 15.107 18.412 15.107 18.7053C15.107 18.852 15.1253 18.9803 15.162 19.127C15.217 19.2737 15.272 19.3837 15.3087 19.4937C15.6387 20.0987 16.207 20.887 17.0137 21.8403C17.8387 22.7937 18.7187 23.7653 19.672 24.737C20.662 25.7087 21.6153 26.607 22.587 27.432C23.5403 28.2387 24.3287 28.7887 24.952 29.1187C25.0437 29.1553 25.1537 29.2103 25.282 29.2653C25.4287 29.3203 25.5753 29.3387 25.7403 29.3387C26.052 29.3387 26.2903 29.2287 26.492 29.027L27.8853 27.652C28.3437 27.1937 28.7837 26.8453 29.2053 26.6253C29.627 26.3687 30.0487 26.2403 30.507 26.2403C30.8553 26.2403 31.222 26.3137 31.6253 26.4787C32.0287 26.6437 32.4503 26.882 32.9087 27.1937L38.977 31.502C39.4537 31.832 39.7837 32.217 39.9853 32.6753C40.1687 33.1337 40.2787 33.592 40.2787 34.1053Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" />
                <path d="M33.9167 16.9997C33.9167 15.8997 33.055 14.213 31.7717 12.838C30.5983 11.573 29.04 10.583 27.5 10.583" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M40.3333 17.0003C40.3333 9.90533 34.595 4.16699 27.5 4.16699" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        ),
        href: '/contact-us'
    }
];

export const footerItems = [
    { title: 'صفحه اصلی', link: '/' },
    { title: 'بلاگ', link: '/mag' },
    { title: 'درباره‌ی ما', link: '/about-us' },
    { title: 'تماس با ما', link: '/contact-us' },


];

export const footerItems2 = [

    { title: 'خدمات', link: '/panel' },
    { title: 'خرید گیفت کارت', link: '/gift-card' },
    { title: 'نقد کردن درآمد ارزی', link: '/currency-income' },
    { title: 'خرید کالا از وب سایت‌های خارجی', link: '/buy-deliver-iran' },
    { title: 'پرداخت در وب‌سایت‌های خارجی', link: '/foreign-payment' },

];

export const footerEnd = [
    { title: 'حریم خصوصی', link: '/privacy' },
    { title: 'قوانین و مقررات', link: '/terms-conditions' },
    { title: 'سوالات متداول', link: '/faq' },
];


export const articlesData = [
    {
        id: 1,
        title: 'راهنمای کامل خرید کیف پول ارز دیجیتال',
        description: 'چگونه یک کیف پول مناسب انتخاب کنیم؟',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test',
        social: {
            facebook: 'https://facebook.com/yourpage',
            twitter: 'https://twitter.com/yourprofile',
            linkedin: 'https://linkedin.com/in/yourprofile',
            telegram: 'https://instagram.com/yourprofile',
            whatsapp: 'https://youtube.com/yourchannel'
        }
    },
    {
        id: 2,
        title: 'آموزش ساخت کیف پول سخت‌افزاری',
        description: 'با بهترین روش‌های محافظت از ارزهای دیجیتال آشنا شوید.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 3,
        title: 'چطور امنیت دارایی‌های دیجیتال را بالا ببریم؟',
        description: 'استفاده از تکنولوژی‌های نوین برای حفظ امنیت.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 4,
        title: 'بررسی انواع کیف پول‌های ارز دیجیتال',
        description: 'مقایسه بین کیف پول‌های سخت‌افزاری و نرم‌افزاری.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 5,
        title: 'بهترین کیف پول برای بیت‌کوین در سال 2025',
        description: 'معرفی و بررسی بهترین گزینه‌ها.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 6,
        title: 'چگونه با موبایل کیف پول بسازیم؟',
        description: 'مراحل قدم به قدم ساخت کیف پول در تلفن همراه.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 7,
        title: 'امنیت کیف پول نرم‌افزاری چقدر است؟',
        description: 'بررسی مزایا و معایب آن‌ها.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 8,
        title: 'راهنمای خرید کیف پول برای مبتدیان',
        description: 'از کجا شروع کنیم؟',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 9,
        title: '۵ کیف پول محبوب در بازار ایران',
        description: 'مقایسه و بررسی تجربه کاربران.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
    {
        id: 10,
        title: 'آشنایی با کیف پول‌های چندامضایی',
        description: 'امنیت بیشتر برای کاربران حرفه‌ای.',
        image: '/images/thumb.webp',
        date: '۱۴۰۱/۱۱/۲۷',
        href: '/mag/test'
    },
];

export const comments = [
    {
        msg: 'برای خرید از آمازون نیاز به کمک داشتم، خیلی دقیق راهنمایی‌ام کردند و سفارشم هم سالم رسید. عالی بود.',
        name: 'محمدرضا ت.'
    },
    {
        msg: 'اشتراک اسپاتیفای رو از اول‌کارت گرفتم، خیلی سریع فعال شد و مشکلی نداشتم. ممنون از تیم خوبتون.',
        name: 'ترانه ق.'
    },
    {
        msg: 'پرداخت ارزی برای ثبت‌نام یه دوره آموزشی داشتم، با راهنمایی پشتیبانی کارم راحت انجام شد. تجربه خوبی بود.',
        name: 'سجاد ب.'
    },
    {
        msg: 'قیمت‌ها مناسبه، مخصوصاً برای گیفت کارت‌ها. اگر تنوع اشتراک‌ها بیشتر بشه عالی می‌شه.',
        name: 'لیلا د.'
    },
    {
        msg: 'سفارشم از علی‌اکسپرس از طریق برادرم در خارج انجام شد. ارسال داخل ایران هم راحت انجام شد. ممنون بابت هماهنگی‌ خوبتون.',
        name: 'امین ک.'
    },
    {
        msg: 'از چندتا سایت خارجی خرید داشتم که با کمک اول‌کارت انجام شد. پاسخگویی سریع و پیگیری خوبی داشتند.',
        name: 'مهتاب ف.'
    },
    {
        msg: 'برای خرید اشتراک ChatGPT اقدام کردم، خیلی سریع فعال شد و پشتیبانی هم دقیق راهنمایی کرد. از انتخابم راضیم.',
        name: 'نادر س.'
    },
    {
        msg: 'بار اولم بود که با یه واسطه از سایت خارجی خرید می‌کردم، ولی تجربه امن و راحتی بود. ممنون از تیم اول‌کارت.',
        name: 'الهام ن.'
    }
];  