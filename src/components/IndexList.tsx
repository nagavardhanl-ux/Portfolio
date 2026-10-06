const pad = (n: number) => String(n).padStart(2, "0");

/** A considered index: thin rule between items, small mono number to the left, body text. */
export default function IndexList({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="index-list" role="list" aria-label={label}>
      {items.map((item, i) => (
        <li key={item} className="reveal" style={{ ["--delay" as string]: `${i * 40}ms` }}>
          <span className="num">{pad(i + 1)}</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
