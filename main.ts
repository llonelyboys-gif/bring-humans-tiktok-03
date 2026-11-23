// bring-humans-tiktok-03 — entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: an original vertical ad for make.fun,
// posted publicly on TikTok. This program does nothing about the video; it
// only hands the house the video's address by copying VIDEO.json from the
// repository root into the output directory, where the gate reads it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`could not copy VIDEO.json from ${botDir}: ${reason}`);
  process.exit(1);
}
