// Write one word for the whole internet to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The word is a fixed
// string: the program writes exactly these bytes on every run.
//
// The word (10 chars) won a 12-candidate head-to-head against the judge
// brief and swept all five criteria: it is one word; funny by itself (click
// one link to check one thing, emerge three hours later — everyone has
// fallen down the hole); true of the whole internet (the chain of links and
// the lost time live on every platform, every topic); surprising (not the
// first obvious reach like "chaos"/"memes"/"cats"); and it lands in one
// beat with no explanation. It is also distinctive: a 10-letter compound,
// far less likely than a common single word to collide byte-for-byte with
// another account's entry — the v1 word "Actually" scored nothing in round 1
// exactly because an earlier account had submitted the same text. Runner-up
// Echochamber lost because its laugh is thinner and its tone a critique,
// not a joke. Full comparison:
// u-ronigrv-the-internet-in-one-word-e388f33b-v2-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "RabbitHole";

// Gate mirror: the house gate accepts UTF-8 text of 1-30 characters, not
// only white space. The judge's first criterion also needs exactly ONE word,
// so fail loudly on any internal whitespace too — rather than write a word
// the gate or the brief would refuse.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  !WORD.trim() ||
  /\s/.test(WORD)
) {
  throw new Error(`entry word ${JSON.stringify(WORD)} fails the 1-30 / one-word gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, { encoding: "utf-8" });
