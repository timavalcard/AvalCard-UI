"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/globals/Button";
import Input from "@/components/ui/globals/Input";
import UploadFile from "@/components/ui/globals/UploadFile/UploadFile";
import AskedQuestions from "@/components/layout/main/askedQuestions/AskedQuestions";
import AskedQuestionsBox from "../AskedQuestionsBox";
import { fetchAddTicket } from "../../../../../helpers/api/addTicket";
import { useRouter } from "next/navigation";
import { useState } from "react"

const schema = yup.object().shape({
    subject: yup.string().required("این فیلد الزامی است"),
    message: yup.string().required("این فیلد الزامی است"),
    department: yup.string().required("این فیلد الزامی است"),
});

export default function Form() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            const tickets = await fetchAddTicket(data.subject, data.department, data.message, data.file); // ارسال به API
            router.push("/panel/tickets");
        } catch (error) {
            console.error("خطا در ارسال پاسخ:", error);
        }finally{
            setIsLoading(false)
        }

    };

    return (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-8 gap-5 items-start">
                <div className="md:col-span-9 grid sm:grid-cols-2 grid-cols-1 gap-5">
                    <Input
                        className="rounded-xl"
                        placeholder="موضوع تیکت "
                        {...register("subject")}
                        error={errors.subject}
                    />

                    <Input
                        className="rounded-xl"
                        placeholder="انتخاب بخش مورد نظر"
                        {...register("department")}
                        error={errors.department}
                        isSelect
                    >
                        <option value="">انتخاب</option>
                        <option value={'فروش'}>
                            فروش
                        </option>
                        <option value={'پشتیبانی'}>
                            پشتیبانی
                        </option>
                        <option value={'خرید گیفت کارت'}>
                            خرید گیفت کارت
                        </option>
                        <option value={'نقد کردن درآمد'}>نقد کردن درآمد</option>
                        <option value={'خرید کالا'}>خرید کالا</option>
                        <option value={'پرداخت در وب سایت‌های خارجی'}>پرداخت در وب سایت‌های خارجی</option>
                    </Input>
                    <div className="sm:col-span-2">
                        <Input
                            placeholder="پیام خود را بنویسید"
                            height="!h-[10rem]"
                            isTextarea
                            boxClasses="sm:col-span-2"
                            className="rounded-xl"
                            labelClassName="!top-6"
                            {...register("message")}
                            error={errors.message}
                        />
                    </div>


                    <div className="sm:col-span-2">
                        <Button loading={isLoading} className={'!rounded-xl mt-3 md:block hidden mx-auto'} size="2xl" type="submit" gradient={'blue'}>
                            ثبت و ارسال اطلاعات
                        </Button>
                    </div>
                </div>
                <div className="md:col-span-3 grid md:gap-7 gap-5">
                    <AskedQuestionsBox className={'hidden md:block'} />

                    <UploadFile
                        name={'file'}
                        errors={errors}
                        setValue={setValue}
                        trigger={trigger}
                    />

                    <Button loading={isLoading} className={'!rounded-xl mt-3 md:hidden'} size="full" type="submit" gradient={'blue'}>
                        ثبت و ارسال اطلاعات
                    </Button>
                </div>

                <div className={'md:hidden '}>
                    <AskedQuestionsBox />
                </div>
            </div>
        </form>
    );
}
