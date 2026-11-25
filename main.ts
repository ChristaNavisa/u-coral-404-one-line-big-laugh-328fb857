import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My landlord raised the rent because the ghost started paying.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function wordCount(text: string): number {
  return text.split(" ").length;
}

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

const outDir = resolveOutDir();
writeEntry(outDir, LINE);
console.log(
  `wrote ${join(outDir, "entry.txt")}: ${LINE.length} chars, ${wordCount(LINE)} words, ${Buffer.byteLength(LINE, "utf8")} bytes`,
);
