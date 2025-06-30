// components/JsonLdArticle.tsx
export default function SchemaProduct({ product }) {
    const schema = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: product.title,
        image: product.media?.url || 'https://avalcard.com/default-product-image.jpg',
        description: product.content?.replace(/<\/?[^>]+(>|$)/g, ''), // حذف تگ‌های HTML
        sku: product.id.toString(),
        url: product.url,
        offers: product.in_stock_variations?.map(variation => ({
            '@type': 'Offer',
            priceCurrency: 'IRR',
            price: variation.price && parseInt(variation.price.replace(/[^\d]/g, '')),
            availability: 'https://schema.org/InStock',
            url: product.url,
        })) || [],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
