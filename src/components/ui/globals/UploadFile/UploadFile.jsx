import { useState, useRef } from "react";

import styles from './UploadFile.module.css'

export default function UploadFile({ setValue, name, errors = [], text = "برای اپلود تصویر کلیک کنید.", trigger }) {
    const [fileError, setFileError] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [isPdf, setIsPdf] = useState(false);
    const inputRef = useRef(null)

    const SUPPORTED_FORMATS = ["image/png", "image/jpeg"];
    const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];

            if (!SUPPORTED_FORMATS.includes(file.type)) {
                setFileError("فرمت های مجاز: PNG, JPG");
                e.target.value = "";
                handleRemoveFile();
                return;
            }

            if (file.size > FILE_SIZE_LIMIT) {
                setFileError("حداکثر حجم فایل 5 مگابایت");
                e.target.value = "";
                handleRemoveFile();
                return;
            }

            setFileError(null);

            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (fileExtension === "pdf") {
                setIsPdf(true);
                setFilePreview(null);
            } else {
                setIsPdf(false);
                const reader = new FileReader();
                reader.onload = (e) => {
                    setFilePreview(e.target.result);
                };
                reader.readAsDataURL(file);
            }

            setValue(name, files);
            trigger(name)
        }
    };

    const handleRemoveFile = () => {
        setFilePreview(null);
        setIsPdf(false);
        setValue(name, null);
        inputRef.current.value = null
        trigger(name)
    };

    return (
        <div className={`w-full border border-[#1A2531] border-opacity-15 ${styles['upload-box']} ${filePreview || isPdf ? styles['uploaded'] : ""} ${fileError || errors[name] ? `${styles["error"]} !border-custom-red` : ""}`}>
            <input
                className="cursor-pointer"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                ref={inputRef}
            />


            {isPdf ? (
                <img
                    src="/images/pdf.png"
                    style={{ maxWidth: 110 }}
                    height={82}
                    className="max-w-[90px] rounded"
                    alt="PDF file"
                />
            ) : (
                filePreview && (
                    <img
                        src={filePreview}
                        style={{ maxWidth: 110 }}
                        height={82}
                        className="max-w-[90px] rounded mt-2"
                        alt="Uploaded file"
                    />
                )
            )}
            {(filePreview || isPdf) && (
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className={`bi bi-trash3 mr-1 ${styles['file-trash']}`}
                        viewBox="0 0 16 16"
                        onClick={handleRemoveFile}
                    >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </div>
            )}

            <div className={styles['icon']}>
                <div>
                    <svg width="100" height="96" viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.59082" y="15.4246" width="80" height="80" rx="20" transform="rotate(-10.858 0.59082 15.4246)" fill="#3664FF" />
                        <foreignObject x="15.9097" y="11.4246" width="88" height="88"><div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(2px)', clipPath: 'url(#bgblur_0_278_867_clip_path)', height: '100%', width: '100%' }}></div></foreignObject><rect data-figma-bg-blur-radius="4" x="19.9097" y="15.4246" width="80" height="80" rx="20" fill="#ABFFDC" fill-opacity="0.2" />
                        <path d="M71.1602 54.7997V46.6747C71.1602 45.294 70.0409 44.1747 68.6602 44.1747H51.1602C49.7794 44.1747 48.6602 45.294 48.6602 46.6747V64.1747C48.6602 65.5554 49.7794 66.6747 51.1602 66.6747M59.9102 66.6747H51.1602M51.1602 66.6747L63.1424 54.6924C64.1187 53.7161 65.7016 53.7161 66.6779 54.6925L66.7852 54.7997M63.6602 62.9247H71.1602M67.4102 59.1747V66.6747M57.4102 51.0497C57.4102 52.0852 56.5707 52.9247 55.5352 52.9247C54.4996 52.9247 53.6602 52.0852 53.6602 51.0497C53.6602 50.0141 54.4996 49.1747 55.5352 49.1747C56.5707 49.1747 57.4102 50.0141 57.4102 51.0497Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <clipPath id="bgblur_0_278_867_clip_path" transform="translate(-15.9097 -11.4246)"><rect x="19.9097" y="15.4246" width="80" height="80" rx="20" />
                            </clipPath></defs>
                    </svg>
                </div>

                <div>
                    <div className={`text-xs text-[#379CDB] mt-3 ${styles["text"]}`}>{fileError ? fileError : text}</div>
                </div>

            </div>

            <div className={`absolute bottom-3.5 flex justify-between px-3 w-full text-xxs text-[#CBCBCB] ${styles['roles']}`}>
                <div className="flex gap-1 items-center">
                    <div>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_278_874)">
                                <path d="M6.36328 4.04004V6.04004M6.36328 8.04004H6.36828M11.3633 6.04004C11.3633 8.80146 9.12471 11.04 6.36328 11.04C3.60186 11.04 1.36328 8.80146 1.36328 6.04004C1.36328 3.27862 3.60186 1.04004 6.36328 1.04004C9.12471 1.04004 11.3633 3.27862 11.3633 6.04004Z" stroke="#CBCBCB" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_278_874">
                                    <rect width="12" height="12" fill="white" transform="translate(0.363281 0.0400391)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        محدودیت ارسال تصویر:5 مگابایت
                    </div>
                </div>

                <div className="flex gap-1 items-center">
                    <div>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_278_874)">
                                <path d="M6.36328 4.04004V6.04004M6.36328 8.04004H6.36828M11.3633 6.04004C11.3633 8.80146 9.12471 11.04 6.36328 11.04C3.60186 11.04 1.36328 8.80146 1.36328 6.04004C1.36328 3.27862 3.60186 1.04004 6.36328 1.04004C9.12471 1.04004 11.3633 3.27862 11.3633 6.04004Z" stroke="#CBCBCB" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_278_874">
                                    <rect width="12" height="12" fill="white" transform="translate(0.363281 0.0400391)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-xxs">
                        فرمت های مجاز: <span className="text-[.575rem]"> PNG, Jpg </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
