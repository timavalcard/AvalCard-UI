export default function Head() {
    const schemaWebsite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "aval card",
        "url": "https://avalcard.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://avalcard.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }

    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "aval card",
        "url": "https://avalcard.com/",
        "logo": "https://avalcard.com/logo.png"
    }
    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "اول کارت",
                "item": "https://avalcard.com/"
            },

        ]
    }
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

        </>
    )
}
