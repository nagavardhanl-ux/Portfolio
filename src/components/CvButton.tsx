import { asset, cv } from "@/lib/config";
import { Download } from "./icons";

/** "Download CV". Renders a disabled button when no CV is configured. */
export default function CvButton({
  variant = "ghost",
  size,
}: {
  variant?: "primary" | "ghost" | "quiet";
  size?: "sm";
}) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ""}`;
  if (!cv.available) {
    return (
      <button type="button" className={cls} disabled title="CV coming soon">
        Download CV <Download />
      </button>
    );
  }
  return (
    <a className={cls} href={asset(cv.path)} download={cv.fileName}>
      Download CV <Download />
    </a>
  );
}
