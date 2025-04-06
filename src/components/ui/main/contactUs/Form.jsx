import Section from "@/components/layout/main/Section";
import Input from "../../globals/Input";
import Button from "../../globals/Button";

export default function Form() {
    return (
        <form>
            <Section className={'space-y-6'}>
                <div className="flex gap-6 items-center">
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.32" width="32" height="32" rx="16" fill="#0000A1" />
                            <path d="M3 19C3 10.1634 10.1634 3 19 3H25C33.8366 3 41 10.1634 41 19V41H19C10.1634 41 3 33.8366 3 25V19Z" fill="#0000A1" />
                            <path d="M27 21H19M27 25H23M24 14H22C17.0294 14 13 18.0294 13 23C13 27.9706 17.0294 32 22 32H29C31.2091 32 33 30.2091 33 28V23C33 18.0294 28.9706 14 24 14Z" stroke="white" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className="text-2xl text-gray-700 font-black">
                        به ما پیام دهید
                    </div>
                </div>

                <Input
                    placeholder={'نام و نام خانوادگی خود را وارد کنید.'}
                />
                <Input
                    placeholder={'شماره همراه خودر را وارد کنید.'}
                />
                <Input
                    placeholder={'ایمیل خود را وارد کنید.'}
                />
                <Input
                    placeholder={'موضوع پیام خود را وارد کنید.'}
                />

                <Input
                    isTextarea={true}
                    placeholder={'متن پیام خود را اینجا بنویسید.'}
                    rows={4}
                    height="!h-auto"
                    labelClassName="!top-6"
                />

                <Button color="blue">
                    ارسال
                </Button>

            </Section>
        </form>
    );
}