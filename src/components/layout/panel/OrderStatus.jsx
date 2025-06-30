const steps = [
    {
        key: 1, label: 'در حال بررسی', icon: (<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5003 18.1983L16.25 16.948M15.8333 9.86467C15.8333 13.5466 12.8486 16.5313 9.16667 16.5313C5.48477 16.5313 2.5 13.5466 2.5 9.86467C2.5 6.18277 5.48477 3.198 9.16667 3.198C12.8486 3.198 15.8333 6.18277 15.8333 9.86467Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    },
    {
        key: 2, label: 'در حال انجام', icon: (<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99984 2.36462V5.69796M9.99984 15.698V19.0313M4.10791 4.80628L6.46624 7.16462M13.5332 14.2313L15.8915 16.5896M1.6665 10.698H4.99984M14.9998 10.698H18.3332M4.10791 16.5896L6.46624 14.2313M13.5332 7.16462L15.8915 4.80629" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        )
    },
    {
        key: 3, label: 'انجام شده', icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 9.86466L10 12.3647L18.3333 4.03133M17.5 10.698V16.5313C17.5 16.9734 17.3244 17.3973 17.0118 17.7098C16.6993 18.0224 16.2754 18.198 15.8333 18.198H4.16667C3.72464 18.198 3.30072 18.0224 2.98816 17.7098C2.67559 17.3973 2.5 16.9734 2.5 16.5313V4.86466C2.5 4.42264 2.67559 3.99871 2.98816 3.68615C3.30072 3.37359 3.72464 3.198 4.16667 3.198H13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    },
];

export default function OrderStatus({ currentStep = 3,status }) {

    const fillPercent = currentStep === 0 ? 50 : (currentStep / steps.length) * 100;

    return (
        <div className="max-w-3xl mx-auto p-6">

            <h2 className="text-center mb-10 font-bold text-base">
                وضعیت سفارش شما:{' '}

                {currentStep === 0 ?
                    <span className="text-red-500">
                        لغو شده
                    </span>
                    :
                    <span className="text-blue-custom">
                        {status === 'pending' && "در انتظار پرداخت"}
                        {status !== "pending" && steps.find(s => s.key === currentStep)?.label}
                    </span>
                }
            </h2>

            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
                <div
                    className={`absolute top-0 right-0 h-full bg-gradient-to-l ${currentStep === 0 ? 'from-red-500' : 'from-blue-custom '} to-[#829fff00]  text-blue-custom`}
                    style={{ width: `${fillPercent}%` }}
                />
            </div>

            <div className="flex justify-around items-center text-center">
                {steps.map(step => {
                    const Icon = step.icon;
                    const isActive = step.key === currentStep;
                    return (
                        <div key={step.key} className={`flex gap-1 text-xs font-semibold items-center ${(step.key === 2 && currentStep === 0) && 'text-red-500'} ${isActive ? 'text-blue-custom' : 'text-[#464646]'}`}>
                            <div>
                                {(step.key === 2 && currentStep === 0) ?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="#ED2427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> :
                                    Icon 
                                }
                            </div>

                            <div className={``}>
                                {(step.key === 1 && status === 'pending')
                                    ? 'در انتظار پرداخت'
                                    : (step.key === 2 && currentStep === 0)
                                        ? 'لغو شده'
                                        : step.label
                                }

                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
