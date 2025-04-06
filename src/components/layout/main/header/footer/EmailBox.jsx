import Button from "@/components/ui/globals/Button";
import Input from "@/components/ui/globals/Input";

export default function EmailBox() {
    return (
        <div className="flex gap-3">
            <Input
                placeholder="ایمیل خود را وارد کنید"
                iconRight={(
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0002 9.99984C12.3013 9.99984 14.1668 8.13436 14.1668 5.83317C14.1668 3.53198 12.3013 1.6665 10.0002 1.6665C7.69898 1.6665 5.8335 3.53198 5.8335 5.83317C5.8335 8.13436 7.69898 9.99984 10.0002 9.99984Z" stroke="black" stroke-opacity="0.72" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333" stroke="black" stroke-opacity="0.72" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )}
                height="!h-[3.125rem]"
                className="!rounded-[100px]"
                labelClassName="!text-opacity-75 !text-black"
            />

            <Button color="blue" size="auto" className={'!rounded-[100px] !px-8'}>
                ثبت
            </Button>

        </div>
    );
}