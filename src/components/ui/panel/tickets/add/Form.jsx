"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/components/ui/globals/Button";
import Input from "@/components/ui/globals/Input";
import UploadFile from "@/components/ui/globals/UploadFile/UploadFile";
import AskedQuestions from "@/components/layout/main/askedQuestions/AskedQuestions";
import AskedQuestionsBox from "../AskedQuestionsBox";
import {fetchAddTicket} from "../../../../../helpers/api/addTicket";
import { useRouter } from "next/navigation";
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

    const onSubmit = async (data) => {
        try {

            const tickets=await fetchAddTicket(data.subject,data.department, data.message,data.file); // ارسال به API
            console.log(data);
            router.push("/panel/tickets");
        } catch (error) {
            console.error("خطا در ارسال پاسخ:", error);
        }

    };

    return (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-9 grid grid-cols-2 gap-5">
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
                        <option value={'	امور اداری	'}>
                        امور اداری	
                        </option>
                        <option value={'	امور مالی	'}>
                        امور مالی	
                        </option>
                        <option value={'	امور فنی	'}>
                            امور فنی
                        </option>
                    </Input>

                    <Input
                        placeholder="پیام خود را بنویسید"
                        height="!h-[10rem]"
                        isTextarea
                        boxClasses="col-span-2"
                        className="rounded-xl"
                        labelClassName="!top-6"
                        {...register("message")}
                        error={errors.message}
                    />

                    <Button className={'!rounded-xl mt-3'} size="xl" type="submit">
                        ثبت و ارسال اطلاعات
                    </Button>
                </div>
                <div className="col-span-3 grid gap-7">
                    <AskedQuestionsBox />

                    <UploadFile
                        name={'file'}
                        errors={errors}
                        setValue={setValue}
                        trigger={trigger}
                    />
                </div>
            </div>
        </form>
    );
}
