// $ deno run --allow-write create_orunder_data.js

// n = number of players each rolling a dice
// d = number of sides on a polyhedral dice
// t = target number triggering success if any player rolls equal or under
// f = force-ratio

interface WhatDoICallAnAtom {
  n: number;
  d: number;
  t: number;
  f: number;
}

const nArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const polyhedrals: number[] = [6, 8, 12, 20, 100];

const encoder = new TextEncoder();

const orunder_data = nArr.map((n) => {
  let obj: { [key: string]: number[] } = {};
  obj[`n${n}`] = polyhedrals;
  return obj;
});

await Deno.writeFile(
  "orunder_data.json",
  encoder.encode(JSON.stringify(orunder_data)),
);
