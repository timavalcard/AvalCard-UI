import TitleWithBorder from "@/components/layout/main/TitleWithBorder";
import AddComment from "./AddComment";
import UserComments from "./UserComments";

export default function Comments({article_id,comments}) {
    return (
        <div>
            <TitleWithBorder>
                نظرات کاربران
            </TitleWithBorder>

            <AddComment article_id={article_id}/>

            <UserComments comments={comments} />
        </div>
    );
}