import IcpBuilder from "@/components/IcpBuilder";
import { pageMetadata } from "@/lib/meta";

export const metadata = pageMetadata("/icp-builder/");

export default function IcpPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="marker">
            <b>ICP builder</b>
          </p>
          <h1 className="h1">Build an ICP in three clicks.</h1>
          <p className="lead">
            Pick an industry, a company size and a region. You get who to sell to, three pain points, three job titles to
            target and an opening line. Written for B2B software and services. It runs in your browser; nothing is sent
            anywhere.
          </p>
        </div>
      </header>
      <section className="section--tight" aria-label="ICP builder">
        <div className="container">
          <IcpBuilder />
        </div>
      </section>
    </>
  );
}
