// Entry for make.fun bounty "post-x-promote-make-your-own-bounty-01"
// (Node 22, standard library only).
//
// The entry is the X post itself: one post of your own on X that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it,
// with a photo of its own attached, make.fun or the @makefunai tag and
// your play code in its text. POST.json at the repository root names that
// post's address, and the house reads its replies, reposts and quotes
// from X. That is all this program has to do: read POST.json from the
// repository root, check it names a real X post address (not the
// placeholder), and copy it to the output directory where the gate
// reads it.
//
// It uses no network, no wall clock and no files outside the repository
// (besides the two directories the grader supplies). Two runs write the
// same bytes.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

let post;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = typeof post === 'object' && post !== null ? post.url : undefined;
if (
  typeof url !== 'string' ||
  !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/[0-9]+$/.test(url) ||
  url.includes('<handle>') ||
  url.includes('<id>')
) {
  console.error(
    'POST.json does not name a real post yet: replace the placeholder with your post\'s address, e.g. https://x.com/<handle>/status/<id>.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
