"use client"
import { locations } from "@/constants/locations";
import Input from "./Input";
import data from "@/constants/iran-locations.json";

export default function CityInput({value,register, errors, province}){

    return(
        <div>
            <Input
              placeholder="شهر"
              isSelect
              {...register("city")}
              error={errors.city?.message}
            >
              <option value="" disabled hidden selected={!value}>
                شهر را انتخاب کنید
              </option>
              {locations[province]?.map((city) => (
              <option key={city} value={city}  selected={value === city}>
                {city}
              </option>
            ))}
            </Input>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
            )}
          </div>
    );
}