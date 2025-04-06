"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../globals/Button";
import Input from "../../globals/Input";
import UploadFile from "../../globals/UploadFile/UploadFile";
import {fetchAddTicketAnswer} from "../../../../helpers/api/addTicketAnswer";

export default function SendAnswer({ticketId}) {

    const schema = yup.object().shape({
        message: yup.string().required("این فیلد الزامی است"),
    });

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
            const file = data.file?.[0] || null; // فایل اگر موجود بود
            const tickets=await fetchAddTicketAnswer(ticketId, data.message, data.file); // ارسال به API
            console.log(tickets);
            window.location.reload();
        } catch (error) {
            console.error("خطا در ارسال پاسخ:", error);
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-8 mt-6">
                <div className="col-span-9">
                    <div className="relative">
                        <Input
                            placeholder="پیام خود را بنویسید"
                            height="!h-[12.5rem]"
                            isTextarea
                            className="rounded-xl !pb-[5rem] overflow-auto"
                            labelClassName="!top-6"
                            {...register("message")}
                            error={errors.message}
                        />

                        <div className="absolute bottom-0.5 bg-white py-2 rounded-xl right-0.5 pr-3 w-[calc(100%-4px)]">
                            <Button type="submit">
                                ارسال پاسخ
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <UploadFile
                        name="file"
                        errors={errors}
                        setValue={setValue}
                        trigger={trigger}
                    />
                </div>
            </div>
        </form>
    );
} 