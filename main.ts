// bring-humans-tiktok-03 — entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: an original vertical ad for make.fun,
// posted publicly on TikTok. This program does nothing about the video; it
// only hands the house the video's address by copying VIDEO.json from the
// repository root into the output directory, where the gate reads it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

// Validate the video address before handing it to the house: it must be a
// full public TikTok video URL (https://www.tiktok.com/@<handle>/video/<id>).
// A placeholder, a short link, or an empty URL would fail the gate later,
// so refuse it here with a clear error instead of copying a useless file.
let url: unknown;
try {
  const parsed = JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown };
  url = parsed.url;
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`could not read VIDEO.json from ${botDir}: ${reason}`);
  process.exit(1);
}

const fullTikTokVideo = /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9._-]+\/video\/[0-9]+\/?$/;
if (typeof url !== 'string' || url.length === 0) {
  console.error('VIDEO.json has no video URL: "url" must not be empty');
  process.exit(1);
}
if (url.includes('<handle>') || url.includes('<id>')) {
  console.error(`VIDEO.json still holds the placeholder URL: ${url}`);
  process.exit(1);
}
if (url.includes('vt.tiktok.com')) {
  console.error(`VIDEO.json holds a TikTok short link, not a full video URL: ${url}`);
  process.exit(1);
}
if (!fullTikTokVideo.test(url)) {
  console.error(`VIDEO.json URL is not a full TikTok video URL (https://www.tiktok.com/@<handle>/video/<id>): ${url}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`could not copy VIDEO.json from ${botDir}: ${reason}`);
  process.exit(1);
}
