import styles from './SubHeader.module.css'

const items = [
    'وبلاگ',
    'درباره ما',
    'تماس با ما',
    'سوالات متداول',
]
export default function SubHeader() {
    return (
        <div className={`bg-blue-custom ${styles.box}`}>
            <div className='container'>
                <div className='flex items-center justify-between text-white text-sm font-bold h-2.5'>
                    {/* <div className="flex items-center gap-6">
                        {
                            items.map((item, index) => (
                                <div className="flex items-center gap-1.5">
                                    <div>
                                        <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.32" y="10" width="10" height="2" rx="1" transform="rotate(-90 0 10)" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        با سرمایه امروز فردا را خوب زندگی کنید!
                    </div> */}
                </div>
            </div>
        </div>
    );
}