/**
 * Post-build fix for Next 16 static export.
 *
 * The client router requests prefetch segments with dotted names, e.g.
 *   /work/aiqod/__next.work.$d$slug.__PAGE__.txt
 * but `next build` writes them as nested folders:
 *   /work/aiqod/__next.work/$d$slug/__PAGE__.txt
 * On a static host that's a 404 per prefetch (harmless, but noisy and slower).
 * This copies every nested segment file to its dotted name.
 */
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
let count = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name.startsWith("__next.")) flatten(full, dir);
      else if (name !== "_next") walk(full);
    }
  }
}

// Every .txt under a "__next.x" folder becomes "<routeDir>/__next.x.<a>.<b>.txt".
function flatten(segDir, routeDir) {
  const stack = [segDir];
  while (stack.length) {
    const d = stack.pop();
    for (const name of readdirSync(d)) {
      const full = join(d, name);
      if (statSync(full).isDirectory()) stack.push(full);
      else if (name.endsWith(".txt")) {
        const dotted = relative(routeDir, full).split(sep).join(".");
        copyFileSync(full, join(routeDir, dotted));
        count++;
      }
    }
  }
}

walk(dist);
console.log(`flatten-prefetch: wrote ${count} segment aliases`);
