
import Head from 'next/head';

export default function SchemaOrg() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Aval card",
        "url": "https://avalcard.com/",
        "logo": "https://avalcard.com/logo.png"
    }
    const schemaWebsite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Aval card",
        "url": "https://avalcard.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://avalcard.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
    return (
            <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
            </>
    )
}