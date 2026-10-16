/**
 * Renders a schema.org JSON-LD block into the page. Server-rendered, so the
 * structured data is in the static HTML that crawlers read.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The data is built from our own config, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
