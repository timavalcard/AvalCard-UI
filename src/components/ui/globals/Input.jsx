import { forwardRef, useId } from "react";
import styles from "./Input.module.css";
import InputError from "./InputError";
import { toEnglishDigits } from "@/utils/toEnglishDigits";

const Input = forwardRef(
  (
    {
      className,
      iconRight,
      error,
      placeholder,
      disabled = false,
      labelClassName,
      height = "h-[3.025rem]",
      isTextarea = false,
      isSelect = false,
      icon = (isSelect && <svg width="15" height="9" className="text-muted" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5205 1.65504L7.52051 8.052L0.520508 1.65504L2.27051 0.052002L7.52051 4.85352L12.7705 0.052002L14.5205 1.65504Z" fill="currentColor" />
      </svg>
      ),
      iconRightClassName,
      boxClasses,
      children,
      required = false,
      onChange,
      textAreaClasses = false,
      showError,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    height = textAreaClasses ? 'h-auto' : height;

    const commonClasses = `
      ${height} w-full px-[12px] transition border border-[#1A2531] border-opacity-15 rounded-xl text-black placeholder-muted focus:outline-greenLight
    
      ${icon ? "!pl-[38px]" : ""}
      ${iconRight ? "!pr-[36px]" : ""}
      ${disabled ? "bg-gray-100" : ""}
      ${error ? "!border !border-red-500 focus:outline-red-500 is-invalid" : ""}
      ${className || ""}
      ${styles.input}
    `;

    const handleSanitizedChange = (e) => {
      const rawValue = e.target.value;
      const sanitized = toEnglishDigits(rawValue);

      if (sanitized !== rawValue) {
        setTimeout(() => {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          ).set;
          nativeInputValueSetter.call(e.target, sanitized);

          const event = new Event("input", { bubbles: true });
          e.target.dispatchEvent(event);
        }, 0);
      }
      
      onChange && onChange(e);
    };

    return (
      <div className="w-full">

      <div className={`${height} relative grid items-center w-full !p-0 ${styles.box} ${boxClasses}`}>
        {icon && <div className="absolute left-3">{icon}</div>}

        {isTextarea ? (
          <textarea
            {...(ref ? { ref } : {})}
            id={id}
            disabled={disabled}
            placeholder=""
            className={`py-2.5 resize-none scrollbar-hide ${commonClasses}`}
            {...rest}
            onChange={(e) => { onChange(e) }}
          />
        ) : isSelect ? (
          <select
            id={id}
            {...(ref ? { ref } : {})}
            disabled={disabled}
            className={`py-0 ${commonClasses}`}
            {...rest}
            {...(onChange ? { onChange } : {})}
          >
            {children}
          </select>
        ) : (
          <input
            {...(ref ? { ref } : {})}
            id={id}
            disabled={disabled}
            required={required}
            onChange={handleSanitizedChange}
            placeholder=""
            className={`py-0 ${commonClasses}`}
            {...rest}
          />
        )}

        {iconRight && <div className={`absolute right-[12px] ${iconRightClassName}`}>{iconRight}</div>}
{
  placeholder &&
        <label
          htmlFor={id}
          className={`absolute top-[50%] ${textAreaClasses && '!top-5'} text-xs !p-0 !m-0 translate-y-[-50%] text-muted ${styles.label} ${iconRight ? "right-[36px]" : "right-[12px]"
            } ${labelClassName || ""}`}
        >
          <div>{placeholder}</div>
        </label>
}
      </div>
      {
        showError &&
      <InputError error={error} />
      }
      </div>
    );
  }
);

export default Input;

