"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from './UserFeedback.module.css';
import Button from "@/components/ui/globals/Button";

export default function UserFeedback() {
  const validationSchema = yup.object().shape({
    Pain: yup.string().required('این فیلد اجباری است.'),
    reason: yup.string().required("لطفا یکی از موارد را انتخاب کنید یا دلیل خود را وارد کنید"),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { PainLevel: 7, reason: "" },
  });

  const [value, setPainValue] = useState(7);
  const [selectedPreset, setSelectedPreset] = useState("");
  const [customReason, setCustomReason] = useState("");
  const Pain = watch("Pain", 7);

  const handleChange = (e) => {
    setPainValue(Number(e.target.value));
  };
  
  const handlePresetClick = (item) => {
    setSelectedPreset(item);
    setCustomReason("");
    setValue("reason", item);
  };
  
  const handleCustomInputChange = (e) => {
    const text = e.target.value;
    setCustomReason(text);
    if (text.trim() !== "") {
      setSelectedPreset("");
    }
    setValue("reason", text);
  };

  useEffect(() => {
    setValue("PainLevel", value);
  }, [value, setValue]);

  useEffect(() => {
    setPainValue(7);
  }, [Pain]);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="xl:w-2/3 mx-auto">
      <div className="text-xs text-center">
        با ثبت امتیاز و بازخوردتان در رشد و بهبود باشگاه مشتریان اول کارت به مجموعه ما کمک کنید.
      </div>
      <div className={styles.ratingSlider} dir="ltr">
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="10"
            defaultValue={7}
            value={value}
            onChange={handleChange}
            step="1"
            className={styles.slider}
          />
          <div
            className={styles.steps}
            style={{ "--active-width": `${(value / 10) * 100}%` }}
          >
            {[...Array(11)].map((_, index) => (
              <div
                key={index}
                className={`${styles.step} 
                ${index !== 0 && index !== 10 ? "!hidden" : ""} 
                ${index <= value ? styles.active : ""}`}
              >
                <div className={styles["steps-number"]}>{index}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-xs text-muted-3">
        با بهبود کدام یک از موارد زیر می‌توانیم رضایت شما از خدمات اول کارت را بیشتر کنیم؟
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-custom-3">
        {['رفتار محترمانه کارشناس', 'رسیدگی سریع تر به مشکلات', 'سرعت و کیفیت در ارائه خدمات', 'ازائه مشاوره و راهنمایی'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handlePresetClick(item)}
            className={`py-5 text-sm text-center rounded-2lg cursor-pointer transition-all ${selectedPreset === item ? "bg-green-light text-white" : "bg-muted-light text-muted-4"}`}
          >
            {item}
          </div>
        ))}
        <div className="col-span-2">
          <input 
            type="text" 
            value={customReason}
            onChange={handleCustomInputChange}
            className="py-5 px-8 bg-muted-light text-muted-4 text-sm text-right rounded-2lg w-full border-0 outline-0" 
            placeholder="دلایل دیگر" 
          />
        </div>
      </div>
      
      {errors.reason && <p className="!text-custom-red text-xs mt-2">{errors.reason.message}</p>}
      
      <Button size="2xl" type="submit" className={'mx-auto mt-6'}>
        ثبت نظر
      </Button>
    </form>
  );
}
