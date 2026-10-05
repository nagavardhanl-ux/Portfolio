import { asset } from "@/lib/config";

/**
 * Site screenshot from public/shots (made by `npm run screenshots`).
 * AVIF first, WebP fallback, fixed 1440×900 box so nothing shifts while loading.
 */
export default function Shot({
  name,
  alt,
  priority = false,
  sizes = "(min-width: 1320px) 860px, (min-width: 900px) 66vw, 100vw",
}: {
  name: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const src = (w: number, ext: string) => asset(`shots/${name}-${w}.${ext}`);
  return (
    <picture>
      <source type="image/avif" srcSet={`${src(800, "avif")} 800w, ${src(1440, "avif")} 1440w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${src(800, "webp")} 800w, ${src(1440, "webp")} 1440w`} sizes={sizes} />
      <img
        src={src(1440, "webp")}
        alt={alt}
        width={1440}
        height={900}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
