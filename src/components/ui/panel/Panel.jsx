import Card from '@/components/ui/globals/card/Card'
import More from '@/components/ui/globals/More'
import styles from './Panel.module.css'
import Products from './home/Products'
import SuggestedServices from './home/SuggestedServices'
import Services from './home/Services'
import GiftCards from './home/GiftCards'
export default function Panel() {

    return (
        <div className={`my-8`}>
            <div className={`bg-blue-custom ${styles.box}`}></div>

            <div className={`grid grid-cols-12 mt-custom-4`}>

                <Products />

                <SuggestedServices />
            </div>

            <Services />


            <div className='mt-custom-4 relative'>
                <img src="/images/img3.svg" alt="" className={'w-full'}/>
                <div className={`grid justify-center items-center absolute ${styles.boxBtnDetails}`}>
                    <p className='text-[#FFFFFF] font-bold text-[1.5rem]'>هم اکنون <span className='text-blue-custom'>تجارت</span> کنید</p>
                    <button className={`${styles.btnDetails} mx-auto text-sm !w-[138px] text-very-bold bg-blue-custom text-[#FFFFFF] py-2 rounded-[10px] mt-3`}>مشاهده
                        جزئیات
                    </button>
                </div>
            </div>

            <GiftCards />

            <div className='grid xl:grid-cols-3 grid-cols-2 xl:gap-[20px] gap-[12px] mt-custom-4 justify-center items-center'>
                <div className={`${styles.boxAmazoneCard}`}>
                    <div className='grid justify-center items-center'>
                        <img src="/images/car.svg" alt=""/>
                    </div>
                    <div className={`text-center`}>
                        <p className={`Largest-text-little-bold text-[#464646]`}>خرید مستقیم از امازون انگلیس</p>
                        <p className={`text-[0.625rem] mt-1.5 text-[#959595]`}>با بهترین قیمت محصول مورد</p>
                        <p className='text-[0.625rem] text-[#959595]'>علاقه خود را سفارش دهید</p>
                    </div>
                </div>
                <div className={`${styles.boxAmazoneCard} ${styles.active}`}>
                    <div className='grid justify-center items-center'>
                        <img src="/images/telephone.svg" alt=""/>
                    </div>
                    <div className={`text-center`}>
                        <p className={`Largest-text-little-bold text-[#464646]`}>خرید مستقیم از امازون انگلیس</p>
                        <p className={`text-[0.625rem] mt-1.5 text-[#959595]`}>با بهترین قیمت محصول مورد</p>
                        <p className='text-[0.625rem] text-[#959595]'>علاقه خود را سفارش دهید</p>
                    </div>
                </div>
                <div className={`${styles.boxAmazoneCard}`}>
                    <div className='grid justify-center items-center'>
                        <img src="/images/truck.svg" alt=""/>
                    </div>
                    <div className={`text-center`}>
                        <p className={`Largest-text-little-bold text-[#464646]`}>خرید مستقیم از امازون انگلیس</p>
                        <p className={`text-[0.625rem] mt-1.5 text-[#959595]`}>با بهترین قیمت محصول مورد</p>
                        <p className='text-[0.625rem] text-[#959595]'>علاقه خود را سفارش دهید</p>
                    </div>
                </div>
            </div>

            <div className={`mt-custom-4 section`}>
            <div className={`flex huge-text-little-bold justify-between items-center`}>
                    <p className={` text-[#2E2E2E]`}>اخبار پیشنهادی</p>
                    <More />
                </div>
                <div className='grid xl:grid-cols-3 grid-cols-2 gap-[22px]'>
                    <div className={`${styles.news}`}>
                        <div className='grid justify-center items-center'>
                            <img src="/images/binance.png" className={"w-full max-h-[210px] object-cover rounded-[20px]"} alt=""/>
                        </div>
                        <div className='flex justify-start gap-[22px] mt-5'>
                            <div className='flex'>
                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 1.59521C7 1.04293 6.55228 0.595215 6 0.595215C5.44772 0.595215 5 1.04293 5 1.59521H7ZM5 5.59521C5 6.1475 5.44772 6.59521 6 6.59521C6.55228 6.59521 7 6.1475 7 5.59521H5ZM15 1.59521C15 1.04293 14.5523 0.595215 14 0.595215C13.4477 0.595215 13 1.04293 13 1.59521H15ZM13 5.59521C13 6.1475 13.4477 6.59521 14 6.59521C14.5523 6.59521 15 6.1475 15 5.59521H13ZM10 14.5952C9.44771 14.5952 9 15.0429 9 15.5952C9 16.1475 9.44771 16.5952 10 16.5952V14.5952ZM10.01 16.5952C10.5623 16.5952 11.01 16.1475 11.01 15.5952C11.01 15.0429 10.5623 14.5952 10.01 14.5952V16.5952ZM14 14.5952C13.4477 14.5952 13 15.0429 13 15.5952C13 16.1475 13.4477 16.5952 14 16.5952V14.5952ZM14.01 16.5952C14.5623 16.5952 15.01 16.1475 15.01 15.5952C15.01 15.0429 14.5623 14.5952 14.01 14.5952V16.5952ZM6 14.5952C5.44772 14.5952 5 15.0429 5 15.5952C5 16.1475 5.44772 16.5952 6 16.5952V14.5952ZM6.01 16.5952C6.56228 16.5952 7.01 16.1475 7.01 15.5952C7.01 15.0429 6.56228 14.5952 6.01 14.5952V16.5952ZM4 4.59521H16V2.59521H4V4.59521ZM18 6.59521V18.5952H20V6.59521H18ZM16 20.5952H4V22.5952H16V20.5952ZM2 18.5952V6.59522H0V18.5952H2ZM4 20.5952C2.89543 20.5952 2 19.6998 2 18.5952H0C0 20.8044 1.79086 22.5952 4 22.5952V20.5952ZM18 18.5952C18 19.6998 17.1046 20.5952 16 20.5952V22.5952C18.2091 22.5952 20 20.8044 20 18.5952H18ZM16 4.59521C17.1046 4.59521 18 5.49065 18 6.59521H20C20 4.38608 18.2091 2.59521 16 2.59521V4.59521ZM4 2.59521C1.79086 2.59521 0 4.38608 0 6.59522H2C2 5.49065 2.89543 4.59521 4 4.59521V2.59521ZM1 10.5952H19V8.59521H1V10.5952ZM5 1.59521V5.59521H7V1.59521H5ZM13 1.59521V5.59521H15V1.59521H13ZM10 16.5952H10.01V14.5952H10V16.5952ZM14 16.5952H14.01V14.5952H14V16.5952ZM6 16.5952H6.01V14.5952H6V16.5952Z"
                                        fill="#959595"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>13 اسفند 1403</p>
                            </div>
                            <div className='flex items-center'>
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.36951 9.41721C1.3005 9.2098 1.3005 8.98562 1.36951 8.77821C2.75651 4.60521 6.69351 1.59521 11.3335 1.59521C15.9715 1.59521 19.9065 4.60222 21.2965 8.77322C21.3665 8.98022 21.3665 9.20422 21.2965 9.41222C19.9105 13.5852 15.9735 16.5952 11.3335 16.5952C6.69551 16.5952 2.75951 13.5882 1.36951 9.41721Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M14.3334 9.09521C14.3334 9.89086 14.0173 10.6539 13.4547 11.2165C12.8921 11.7791 12.129 12.0952 11.3334 12.0952C10.5377 12.0952 9.77466 11.7791 9.21205 11.2165C8.64944 10.6539 8.33337 9.89086 8.33337 9.09521C8.33337 8.29957 8.64944 7.5365 9.21205 6.97389C9.77466 6.41128 10.5377 6.09521 11.3334 6.09521C12.129 6.09521 12.8921 6.41128 13.4547 6.97389C14.0173 7.5365 14.3334 8.29957 14.3334 9.09521Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>2657 بازدید</p>
                            </div>
                        </div>
                        <div className={`text-start mt-2`}>
                            <p className={`Largest-text-little-bold text-[#464646]`}>
                                تسلط بایننس بر استیبل کوین ها رمز موفقیت
                                در بازار...</p>
                        </div>
                    </div>
                    <div className={`${styles.news}`}>
                        <div className='grid justify-center items-center'>
                            <img src="/images/binance.png" className={"w-full max-h-[210px] object-cover rounded-[20px]"} alt=""/>
                        </div>
                        <div className='flex justify-start gap-[22px] mt-5'>
                            <div className='flex'>
                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 1.59521C7 1.04293 6.55228 0.595215 6 0.595215C5.44772 0.595215 5 1.04293 5 1.59521H7ZM5 5.59521C5 6.1475 5.44772 6.59521 6 6.59521C6.55228 6.59521 7 6.1475 7 5.59521H5ZM15 1.59521C15 1.04293 14.5523 0.595215 14 0.595215C13.4477 0.595215 13 1.04293 13 1.59521H15ZM13 5.59521C13 6.1475 13.4477 6.59521 14 6.59521C14.5523 6.59521 15 6.1475 15 5.59521H13ZM10 14.5952C9.44771 14.5952 9 15.0429 9 15.5952C9 16.1475 9.44771 16.5952 10 16.5952V14.5952ZM10.01 16.5952C10.5623 16.5952 11.01 16.1475 11.01 15.5952C11.01 15.0429 10.5623 14.5952 10.01 14.5952V16.5952ZM14 14.5952C13.4477 14.5952 13 15.0429 13 15.5952C13 16.1475 13.4477 16.5952 14 16.5952V14.5952ZM14.01 16.5952C14.5623 16.5952 15.01 16.1475 15.01 15.5952C15.01 15.0429 14.5623 14.5952 14.01 14.5952V16.5952ZM6 14.5952C5.44772 14.5952 5 15.0429 5 15.5952C5 16.1475 5.44772 16.5952 6 16.5952V14.5952ZM6.01 16.5952C6.56228 16.5952 7.01 16.1475 7.01 15.5952C7.01 15.0429 6.56228 14.5952 6.01 14.5952V16.5952ZM4 4.59521H16V2.59521H4V4.59521ZM18 6.59521V18.5952H20V6.59521H18ZM16 20.5952H4V22.5952H16V20.5952ZM2 18.5952V6.59522H0V18.5952H2ZM4 20.5952C2.89543 20.5952 2 19.6998 2 18.5952H0C0 20.8044 1.79086 22.5952 4 22.5952V20.5952ZM18 18.5952C18 19.6998 17.1046 20.5952 16 20.5952V22.5952C18.2091 22.5952 20 20.8044 20 18.5952H18ZM16 4.59521C17.1046 4.59521 18 5.49065 18 6.59521H20C20 4.38608 18.2091 2.59521 16 2.59521V4.59521ZM4 2.59521C1.79086 2.59521 0 4.38608 0 6.59522H2C2 5.49065 2.89543 4.59521 4 4.59521V2.59521ZM1 10.5952H19V8.59521H1V10.5952ZM5 1.59521V5.59521H7V1.59521H5ZM13 1.59521V5.59521H15V1.59521H13ZM10 16.5952H10.01V14.5952H10V16.5952ZM14 16.5952H14.01V14.5952H14V16.5952ZM6 16.5952H6.01V14.5952H6V16.5952Z"
                                        fill="#959595"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>13 اسفند 1403</p>
                            </div>
                            <div className='flex items-center'>
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.36951 9.41721C1.3005 9.2098 1.3005 8.98562 1.36951 8.77821C2.75651 4.60521 6.69351 1.59521 11.3335 1.59521C15.9715 1.59521 19.9065 4.60222 21.2965 8.77322C21.3665 8.98022 21.3665 9.20422 21.2965 9.41222C19.9105 13.5852 15.9735 16.5952 11.3335 16.5952C6.69551 16.5952 2.75951 13.5882 1.36951 9.41721Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M14.3334 9.09521C14.3334 9.89086 14.0173 10.6539 13.4547 11.2165C12.8921 11.7791 12.129 12.0952 11.3334 12.0952C10.5377 12.0952 9.77466 11.7791 9.21205 11.2165C8.64944 10.6539 8.33337 9.89086 8.33337 9.09521C8.33337 8.29957 8.64944 7.5365 9.21205 6.97389C9.77466 6.41128 10.5377 6.09521 11.3334 6.09521C12.129 6.09521 12.8921 6.41128 13.4547 6.97389C14.0173 7.5365 14.3334 8.29957 14.3334 9.09521Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>2657 بازدید</p>
                            </div>
                        </div>
                        <div className={`text-start mt-2`}>
                            <p className={`Largest-text-little-bold text-[#464646]`}>
                                تسلط بایننس بر استیبل کوین ها رمز موفقیت
                                در بازار...</p>
                        </div>
                    </div>
                    <div className={`${styles.news}`}>
                        <div className='grid justify-center items-center'>
                            <img src="/images/binance.png" className={"w-full max-h-[210px] object-cover rounded-[20px]"} alt="" />
                        </div>
                        <div className='flex justify-start gap-[22px] mt-5'>
                            <div className='flex'>
                                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 1.59521C7 1.04293 6.55228 0.595215 6 0.595215C5.44772 0.595215 5 1.04293 5 1.59521H7ZM5 5.59521C5 6.1475 5.44772 6.59521 6 6.59521C6.55228 6.59521 7 6.1475 7 5.59521H5ZM15 1.59521C15 1.04293 14.5523 0.595215 14 0.595215C13.4477 0.595215 13 1.04293 13 1.59521H15ZM13 5.59521C13 6.1475 13.4477 6.59521 14 6.59521C14.5523 6.59521 15 6.1475 15 5.59521H13ZM10 14.5952C9.44771 14.5952 9 15.0429 9 15.5952C9 16.1475 9.44771 16.5952 10 16.5952V14.5952ZM10.01 16.5952C10.5623 16.5952 11.01 16.1475 11.01 15.5952C11.01 15.0429 10.5623 14.5952 10.01 14.5952V16.5952ZM14 14.5952C13.4477 14.5952 13 15.0429 13 15.5952C13 16.1475 13.4477 16.5952 14 16.5952V14.5952ZM14.01 16.5952C14.5623 16.5952 15.01 16.1475 15.01 15.5952C15.01 15.0429 14.5623 14.5952 14.01 14.5952V16.5952ZM6 14.5952C5.44772 14.5952 5 15.0429 5 15.5952C5 16.1475 5.44772 16.5952 6 16.5952V14.5952ZM6.01 16.5952C6.56228 16.5952 7.01 16.1475 7.01 15.5952C7.01 15.0429 6.56228 14.5952 6.01 14.5952V16.5952ZM4 4.59521H16V2.59521H4V4.59521ZM18 6.59521V18.5952H20V6.59521H18ZM16 20.5952H4V22.5952H16V20.5952ZM2 18.5952V6.59522H0V18.5952H2ZM4 20.5952C2.89543 20.5952 2 19.6998 2 18.5952H0C0 20.8044 1.79086 22.5952 4 22.5952V20.5952ZM18 18.5952C18 19.6998 17.1046 20.5952 16 20.5952V22.5952C18.2091 22.5952 20 20.8044 20 18.5952H18ZM16 4.59521C17.1046 4.59521 18 5.49065 18 6.59521H20C20 4.38608 18.2091 2.59521 16 2.59521V4.59521ZM4 2.59521C1.79086 2.59521 0 4.38608 0 6.59522H2C2 5.49065 2.89543 4.59521 4 4.59521V2.59521ZM1 10.5952H19V8.59521H1V10.5952ZM5 1.59521V5.59521H7V1.59521H5ZM13 1.59521V5.59521H15V1.59521H13ZM10 16.5952H10.01V14.5952H10V16.5952ZM14 16.5952H14.01V14.5952H14V16.5952ZM6 16.5952H6.01V14.5952H6V16.5952Z"
                                        fill="#959595"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>13 اسفند 1403</p>
                            </div>
                            <div className='flex items-center'>
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.36951 9.41721C1.3005 9.2098 1.3005 8.98562 1.36951 8.77821C2.75651 4.60521 6.69351 1.59521 11.3335 1.59521C15.9715 1.59521 19.9065 4.60222 21.2965 8.77322C21.3665 8.98022 21.3665 9.20422 21.2965 9.41222C19.9105 13.5852 15.9735 16.5952 11.3335 16.5952C6.69551 16.5952 2.75951 13.5882 1.36951 9.41721Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M14.3334 9.09521C14.3334 9.89086 14.0173 10.6539 13.4547 11.2165C12.8921 11.7791 12.129 12.0952 11.3334 12.0952C10.5377 12.0952 9.77466 11.7791 9.21205 11.2165C8.64944 10.6539 8.33337 9.89086 8.33337 9.09521C8.33337 8.29957 8.64944 7.5365 9.21205 6.97389C9.77466 6.41128 10.5377 6.09521 11.3334 6.09521C12.129 6.09521 12.8921 6.41128 13.4547 6.97389C14.0173 7.5365 14.3334 8.29957 14.3334 9.09521Z"
                                        stroke="#959595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className='Largest-text-little-bold mr-2 text-[#959595]'>2657 بازدید</p>
                            </div>
                        </div>
                        <div className={`text-start mt-2`}>
                            <p className={`Largest-text-little-bold text-[#464646]`}>
                                تسلط بایننس بر استیبل کوین ها رمز موفقیت
                                در بازار...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}