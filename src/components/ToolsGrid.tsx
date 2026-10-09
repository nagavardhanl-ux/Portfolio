import { simpleIcons, type SimpleIconKey } from "@/data/simpleIcons";

/**
 * "The tools I work with": six fixed groups, each tool listed once.
 * Tools that exist in Simple Icons get their monochrome mark (text colour,
 * blue on hover); every other tool gets a neutral letter glyph. Each chip
 * shows exactly one mark plus the tool's name. No image files are loaded.
 */
interface Tool {
  name: string;
  icon?: SimpleIconKey;
}

interface ToolGroup {
  heading: string;
  caption: string;
  tools: Tool[];
}

const groups: ToolGroup[] = [
  {
    heading: "Build websites",
    caption: "Building and shipping websites.",
    tools: [{ name: "Lovable" }, { name: "Antigravity" }, { name: "Claude Code", icon: "claudeCode" }, { name: "Codex" }],
  },
  {
    heading: "Lead generation",
    caption: "Target lists, prospect data and enrichment.",
    tools: [{ name: "Apollo" }, { name: "Hunter" }, { name: "Seamless.AI" }],
  },
  {
    heading: "Email and outreach",
    caption: "Mail merge, sequences and list cleaning.",
    tools: [{ name: "YAMM" }, { name: "ZeroBounce" }, { name: "NeverBounce" }, { name: "MillionVerifier" }],
  },
  {
    heading: "Research",
    caption: "Market, competitor and product research.",
    tools: [{ name: "ChatGPT" }, { name: "Claude", icon: "claude" }, { name: "Perplexity", icon: "perplexity" }],
  },
  {
    heading: "Content and video",
    caption: "Creatives, product videos and AI avatar videos.",
    tools: [{ name: "Canva" }, { name: "HeyGen" }, { name: "Google Flow" }],
  },
  {
    heading: "SEO and analytics",
    caption: "Search visibility, keywords and performance.",
    tools: [
      { name: "Google Search Console", icon: "googleSearchConsole" },
      { name: "Google Analytics 4", icon: "googleAnalytics" },
      { name: "Google Keyword Planner" },
    ],
  },
];

function Mark({ tool }: { tool: Tool }) {
  if (tool.icon) {
    return (
      <span className="tool-chip__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d={simpleIcons[tool.icon]} />
        </svg>
      </span>
    );
  }
  return (
    <span className="tool-chip__glyph" aria-hidden="true">
      {tool.name.charAt(0)}
    </span>
  );
}

export default function ToolsGrid() {
  return (
    <div className="tools-grid">
      {groups.map((group, i) => (
        <section
          key={group.heading}
          className="tools-group reveal"
          style={{ ["--delay" as string]: `${(i % 3) * 40}ms` }}
          aria-labelledby={`tools-${i}`}
        >
          <h3 id={`tools-${i}`} className="tools-group__heading">
            {group.heading}
          </h3>
          <p className="tools-group__caption">{group.caption}</p>
          <ul className="tools-chips" role="list">
            {group.tools.map((tool) => (
              <li key={tool.name} className="tool-chip">
                <Mark tool={tool} />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
