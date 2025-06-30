
import { articlesData } from "@/constants/data";
import ArticleCardSm from "../../globals/ArticleCardSm";
import {fetchRecentArticles} from "../../../../helpers/api/recent-articles";

export default async function TopArticles() {
    const articles= await fetchRecentArticles(3);
    return (
        <>
            {articles?.data.slice(1, 3).map((item) => (
            <ArticleCardSm key={item.id} data={item} />
        ))}
        
        </>
    )
}
