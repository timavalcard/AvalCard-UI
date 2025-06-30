const BoxIcon = ({ bg = 'bg-black' }) => {
    return (
        <div className={`p-1 rounded-full shadow-cusom flex justify-center items-center ${bg}`}>
            {icon}
        </div>
    );
};

const Comment = ({ comment }) => {
    return (
        <div className="flex gap-3 items-start">
            <div>
                <img loading="lazy" src={comment.avatar} alt={comment.name} className="w-[30px] h-[30px] rounded-full object-cover" />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-start w-full">
                    <div>
                        <div className="sm:text-base text-sm text-[#202020] font-bold">
                            {comment.name}
                        </div>
                        <div className="mt-1 text-xxs text-[#A9A9A9]">
                            {comment.created_at}
                        </div>
                    </div>
                    {/*<div className="text-xs text-[#A9A9A9] font-medium cursor-pointer">
                        پاسخ به دیدگاه
                    </div>*/}
                </div>
                <p dangerouslySetInnerHTML={{__html:comment.text}} className="py-3 mb-2 font-medium text-[#202020]">

                </p>

                {comment.children?.length > 0 && (
                    <div className="space-y-2">
                        {comment.children.map((child) => (
                            <Comment key={child.id} comment={child}  />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const CommentBox = ({ children, end }) => {
    return (
        <div>
            {children}
            {
                !end &&
                <div className="my-6">
                    <svg className='w-full' height="2" viewBox="0 0 952 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.75" y1="1.25" x2="951.25" y2="1.24992" stroke="#EAEAEA" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 5" />
                    </svg>
                </div>
            }
        </div>
    );
};

export default function UserComments({ comments }) {
    return (
        <div className="mt-6 space-y-2">
            {comments.map((comment, index) => (
                <CommentBox key={comment.id} end={index === comments.length - 1}>
                    <Comment
                        comment={comment}
                    />
                </CommentBox>
            ))}
        </div>
    );
}
