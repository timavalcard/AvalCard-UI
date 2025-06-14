"use client"
import { locations } from "@/constants/locations";
import Input from "./Input";

console.log(locations);


export default function ProvinceInput({value,register, errors, setValue}){
    console.log(value)
    return(
        <div>
            <Input
              placeholder="استان"
              isSelect
              {...register("province")}
              error={errors.province?.message}
              onChange={(e) => setValue('province' ,e.target.value)}
            >
              <option value="" disabled hidden selected={!value}>
              استان را انتخاب کنید
            </option>
            {Object.keys(locations).map(( province) => (
              <option key={province} value={province} selected={value === province}>
                {province}
              </option>
            ))}
            </Input>
            {errors.province && (
              <p className="text-red-500 text-xs mt-1">{errors.province.message}</p>
            )}
          </div>
    );
}