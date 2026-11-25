// The 4AM Commit — one line, one bug, one very long night.
// Writes the commit message to $MAKEFUN_OUTPUT_DIR/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "fix: wrote the bug at 2am, blamed the compiler at 3am, admitted it was me at 4am. tests pass, dignity pending";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
