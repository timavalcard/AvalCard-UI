import Button from "../../globals/Button";

export default function Empty() {
    return (
        <div className="grid justify-center text-center h-full mt-20">
            <div className="flex justify-center">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.47 43.7634H35.2045C38.225 43.7634 40.8133 41.3333 41.3537 37.99L44.5872 17.9822L41.4622 17.9822L7.08724 17.9822L10.3208 37.99C10.8612 41.3333 13.4495 43.7634 16.47 43.7634Z" fill="white" />
                    <path d="M7.08724 17.9822L10.3208 37.99C10.8612 41.3333 13.4495 43.7634 16.47 43.7634H35.2045C38.225 43.7634 40.8133 41.3333 41.3537 37.99L44.5872 17.9822M7.08724 17.9822L41.4622 17.9822M7.08724 17.9822H5.00391M44.5872 17.9822L41.4622 17.9822M44.5872 17.9822H46.6706M41.4622 17.9822L31.0456 6.26343M20.6289 6.26343L10.2122 17.9822M21.6706 27.0968V33.3468M30.0039 27.0968V33.3468" stroke="#464646" stroke-width="3" stroke-linecap="round" />
                </svg>

            </div>

            <div className="text-blue-custom text-3xl mt-2.5 font-bold">
                سبد خرید شما خالی است.
            </div>

            <div className="flex justify-center gap-8 mt-7">
                <Button href="/panel/" size="xl" flex className={'!rounded-[20px]'}>
                    
                    <div>
                        خرید جدید
                    </div>
                </Button>
            </div>
        </div>
    );
}