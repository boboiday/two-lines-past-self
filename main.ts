import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self — a warning to the writer's past self.
// Line 1 warns about one specific moment (the contract signing);
// line 2 traces what changed because of it (four years lost to a clause).
const LINE_1 =
  "When Mr. Hartono slides the contract across the table and says 'sign now, read it later', stand up and walk out.";
const LINE_2 =
  "You signed instead, and the next four years of your life belonged to a clause on page three you never read.";

const entry = `${LINE_1}\n${LINE_2}`;

if (entry.length < 1 || entry.length > 280) {
  throw new Error("entry must be 1-280 characters");
}
if (entry.split("\n").length !== 2 || entry.includes("\r")) {
  throw new Error("entry must be exactly two lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
