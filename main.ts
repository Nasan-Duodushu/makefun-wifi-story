// Tell a Whole Story in 32 Characters — entry program.
// Writes one Wi-Fi network name (<=32 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const NAME = "SheTookTheDogAndWiFi";

const bytes = new TextEncoder().encode(NAME);
// Count code points, not UTF-16 units, so the gate matches the scorer.
if ([...NAME].length < 1 || [...NAME].length > 32) {
  throw new Error(`name is ${[...NAME].length} chars, outside the 1-32 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bytes);
console.log(`wrote ${NAME.length} chars to /output/entry.txt`);
