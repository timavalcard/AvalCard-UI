import { forwardRef, useId } from "react";
import styles from "./Input.module.css";

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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5205 1.65504L7.52051 8.052L0.520508 1.65504L2.27051 0.052002L7.52051 4.85352L12.7705 0.052002L14.5205 1.65504Z" fill="currentColor"/>
      </svg>
      ),
      iconRightClassName,
      boxClasses,
      children,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    const commonClasses = `
      ${height} w-full px-[12px] transition border border-[#1A2531] border-opacity-15 rounded-[8px] text-black placeholder-muted focus:outline-greenLight
      min-w-36
      ${icon ? "!pl-[38px]" : ""}
      ${iconRight ? "!pr-[36px]" : ""}
      ${disabled ? "bg-gray-100" : ""}
      ${error ? "!border !border-red-500 focus:outline-red-500 is-invalid" : ""}
      ${className || ""}
      ${styles.input}
    `;

    return (
      <div className={`${height} relative grid items-center w-full !p-0 ${styles.box} ${boxClasses}`}>
        {icon && <div className="absolute left-3">{icon}</div>}

        {isTextarea ? (
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            placeholder=""
            className={`py-2.5 resize-none scrollbar-hide ${commonClasses}`}
            {...rest}
          />
        ) : isSelect ? (
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            className={`py-0 ${commonClasses}`}
            {...rest}
          >
            {children}
          </select>
        ) : (
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            placeholder=""
            className={`py-0 ${commonClasses}`}
            {...rest}
          />
        )}

        {iconRight && <div className={`absolute right-[12px] ${iconRightClassName}`}>{iconRight}</div>}

        <label
          htmlFor={id}
          className={`absolute top-[50%] text-xs !p-0 !m-0 translate-y-[-50%] text-muted ${styles.label} ${
            iconRight ? "right-[36px]" : "right-[12px]"
          } ${labelClassName || ""}`}
        >
          <div>{placeholder}</div>
        </label>
      </div>
    );
  }
);

export default Input;

