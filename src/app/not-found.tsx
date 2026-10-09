import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { notFoundMeta } from "@/lib/routes";

export const metadata: Metadata = {
  title: { absolute: notFoundMeta.title },
  description: notFoundMeta.description,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title">
      <div className="container notfound">
        <p className="marker">
          <span className="num">404</span>
          <b>Not found</b>
        </p>
        <h1 id="nf-title" className="h1">
          This page doesn&apos;t exist
        </h1>
        <p className="lead">The link may be old, or the address mistyped. Everything else is one click away.</p>
        <div className="notfound__links">
          <Link href="/" className="btn btn--primary">
            Home <ArrowRight />
          </Link>
          <Link href="/websites/" className="btn btn--ghost">
            Websites
          </Link>
        </div>
      </div>
    </section>
  );
}
