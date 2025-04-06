import CommentBlog from '@/components/layout/main/CommentBlog';
import ItemMarquee from './ItemMarquee';
import styles from './MarqueeBlogs.module.css';

export default function MarqueeBlogs() {

    return (
        <div className={`bg-[#0033660D] rounded-3xl px-10 h-[433px] ${styles.box}`}>
            <div className={styles.verticalMarqueeContainer}>
                <div className={`space-y-6 ${styles.verticalMarquee}`}>
                    <CommentBlog />
                    <CommentBlog />
                    <CommentBlog />
                    <CommentBlog />
                    <CommentBlog />
                    <CommentBlog />
                </div>
            </div>
        </div>
    );
}
