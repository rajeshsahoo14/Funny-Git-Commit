#!/usr/bin/env node
import newfunnyCommits from "./funnyCommits.js";

function getRandomCommit() {
  const index = Math.floor(Math.random() * newfunnyCommits.length);
  return newfunnyCommits[index];
}

console.log(getRandomCommit());
