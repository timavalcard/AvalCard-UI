// components/JsonLdArticle.tsx
export default function SchemaArticle({ article }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.media?.url,
        "author": {
            "@type": "Person",
            "name": article.author.name,
        },
        "publisher": {
            "@type": "Organization",
            "name": "Aval card",
            "logo": {
                "@type": "ImageObject",
                "url": "https://avalcard.com/logo.png"
            }
        },
        "datePublished": article.created_at,
        "dateModified": article.updated_at,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": article.url
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
