export default function Empty() {
    return (
        <section className="grid h-full items-center justify-center text-center">
            <div>
                <img
                    src="/images/search icon.svg"
                    className="w-full mx-auto"
                    loading="lazy"
                />
                <div className="text-2xl font-bold mt-5">
                    نتیجه‌ای یافت نشد!
                </div>
                <p className="mt-3">
                    از عبارت‌های متداول‌تر استفاده کنید و یا املای عبارت وارد‌شده را بررسی کنید.
                </p>
            </div>
        </section>
    );
} 