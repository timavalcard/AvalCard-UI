import AddCommentForm from "./AddCommentForm";

export default function AddComment({article_id}) {
    return (
        <>
            <div className="text-[#202020]">
                <div className=" text-xl font-bold">
                    دیدگاهتان را بنویسید.
                </div>

                <div className="mt-2 text-base font-medium">
                    میخواهی به بحث بپیوندی؟!  مطمعا باش نشانی ایمیلت منتشر نخواهد شد.
                </div>
            </div>

            <AddCommentForm article_id={article_id} />

            <div className="my-8">
                <svg className='w-full' height="2" viewBox="0 0 952 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.75" y1="1.25" x2="951.25" y2="1.24992" stroke="#EAEAEA" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="5 5" />
                </svg>
            </div>
        </>
    );
}