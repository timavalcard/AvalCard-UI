import Link from "next/link";

export default function AskedQuestionsBox({className}) {
    return (
        <Link href={'/faq'}>
        <div className={`px-3 py-4 border rounded-2xl border-[#1A2531] border-opacity-15 ${className}`}>
            <div className="flex gap-1.5 text-blue-custom font-bold justify-center text-center">
                <div>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5225 22.8076H5.52246C4.41789 22.8076 3.52246 21.9122 3.52246 20.8076V4.80762C3.52246 3.70305 4.41789 2.80762 5.52246 2.80762H17.5225C18.627 2.80762 19.5225 3.70305 19.5225 4.80762V10.8076M19.7227 20.0078L21.5227 21.8078M14.5225 17.8076C14.5225 18.6033 14.8385 19.3663 15.4011 19.9289C15.9637 20.4915 16.7268 20.8076 17.5225 20.8076C18.3181 20.8076 19.0812 20.4915 19.6438 19.9289C20.2064 19.3663 20.5225 18.6033 20.5225 17.8076C20.5225 17.012 20.2064 16.2489 19.6438 15.6863C19.0812 15.1237 18.3181 14.8076 17.5225 14.8076C16.7268 14.8076 15.9637 15.1237 15.4011 15.6863C14.8385 16.2489 14.5225 17.012 14.5225 17.8076Z" stroke="#3664FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    سوالات متداول
                </div>
            </div>

            <div className="text-[#B9B9B9] text-xxs text-center mt-2 leading-4">
                چنانچه سوالی دارید می‌توانید با جستجو در قسمت سوالات متداول پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد نظر خود دست نیافتید می‌توانید از طریق ارسال تیکت با ما در ارتباط باشید.
            </div>
        </div>
        </Link>
    );
}