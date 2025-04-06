export const menuMain = [
    {
        value: 'لیست خدمات',
        svg: (
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7363 10C18.7363 8.62 19.8563 7.5 21.2363 7.5V6.5C21.2363 2.5 20.2363 1.5 16.2363 1.5H6.23633C2.23633 1.5 1.23633 2.5 1.23633 6.5V7C2.61633 7 3.73633 8.12 3.73633 9.5C3.73633 10.88 2.61633 12 1.23633 12V12.5C1.23633 16.5 2.23633 17.5 6.23633 17.5H16.2363C20.2363 17.5 21.2363 16.5 21.2363 12.5C19.8563 12.5 18.7363 11.38 18.7363 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        href: '/list-services'
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
        href: '/blog'
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
                value: 'خرید از آمازون',
                href: '/'
            },
            {
                value: 'پرداخت های بین المللی',
                href: '/'
            },
            {
                value: 'افتتاح حساب خارجی',
                href: '/'
            },
            {
                value: 'نقد کردن درامد دلاری',
                href: '/'
            },
            {
                value: 'خرید گیفت کارت',
                href: '/'
            },
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
        href: '/blog'
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
];

export const footerItems = [
    { title: 'صفحه اصلی', link: '/home' },
    { title: 'خدمات مشتریان', link: '/customer-service' },
    { title: 'راهنمای خرید', link: '/buying-guide' },
    { title: 'درباره‌ی ما', link: '/about-us' },
    { title: 'سوالات متداول', link: '/faq' },
    { title: 'نحوه ثبت سفارش', link: '/order-process' },
    { title: 'بلاگ', link: '/blog' },
    { title: 'پیگیری سفارش', link: '/order-tracking' },
    { title: 'رویه ثبت سفارش', link: '/order-procedure' },
    { title: 'حساب کاربری', link: '/account' },
    { title: 'ارتباط با ما', link: '/contact-us' },
    { title: 'شیوه‌های پرداخت', link: '/payment-methods' },
];

export const footerEnd = [
    { title: 'کوکی ها', link: '/cookies' },
    { title: 'حریم خصوصی', link: '/privacy-policy' },
    { title: 'شرایط استفاده', link: '/terms-of-use' },
];
