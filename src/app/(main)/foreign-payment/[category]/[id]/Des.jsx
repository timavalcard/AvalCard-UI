import ScrollBox from "@/components/layout/main/ScrollBox";

export default function Des({content}) {
    return (
        <ScrollBox >
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        </ScrollBox>

    );
}