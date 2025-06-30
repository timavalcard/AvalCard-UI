"use client"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../globals/Button";
import Input from "../../globals/Input";
import UploadFile from "../../globals/UploadFile/UploadFile";
import {fetchAddTicketAnswer} from "../../../../helpers/api/addTicketAnswer";
import {useState} from "react"
import Modal from "../../globals/modal/Modal";
import {fetchCloseTicket} from "../../../../helpers/api/closeTicket";

export default function SendAnswer({ticket,ticketId}) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);

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
    const [isLoading,setIsLoading]= useState(false);
    const onSubmit = async (data) => {
        try {
            const file = data.file?.[0] || null; // فایل اگر موجود بود
            setIsLoading(true)
            const tickets=await fetchAddTicketAnswer(ticketId, data.message, data.file); // ارسال به API
            setIsLoading(false)
            window.location.reload();
        } catch (error) {
            console.error("خطا در ارسال پاسخ:", error);
        }

    };

    const closeTicket=async ()=>{
        await fetchCloseTicket(ticketId);
        setShowConfirmModal(false);
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Modal show={showConfirmModal} title={'بستن تیکت'} setShow={setShowConfirmModal}>
                <p className="text-gray-600 text-sm py-7">آیا مطمئن هستید که می‌خواهید این تیکت را ببندید؟</p>
                <div className="flex justify-center gap-6 pt-4">
                    <Button
                        onClick={closeTicket}
                        outline
                        color="red"
                    >
                        بله ببند
                    </Button>
                    <Button
                        color="red"
                        onClick={() => setShowConfirmModal(false)}
                    >
                        لغو
                    </Button>
                </div>
            </Modal>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-6">
                <div className="md:col-span-9 md:order-1 order-2">
                    <div className="relative">
                        {ticket.status =="بسته شده" &&<span style={{color:"#ef4444",display:"block"}} className={"mb-3 d-block"}  >
                           این تیکت توسط شما بسته شده است. برای ادامه لطفا پیامی ارسال کنید
                        </span>}
                        {ticket.status !="بسته شده" &&<Button color={"red"} className={"mb-2"} onClick={()=>setShowConfirmModal(true)} type="button">
                            بستن تیکت
                        </Button>}
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
                            <Button loading={isLoading} type="submit">
                                ارسال پاسخ
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 md:order-2 order-1">
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