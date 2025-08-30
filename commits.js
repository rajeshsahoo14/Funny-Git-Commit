#!/usr/bin/env node
import funnyCommits from "./funnyCommits.js";

function getRandomCommit() {
  const index = Math.floor(Math.random() * funnyCommits.length);
  return funnyCommits[index];
}

console.log(getRandomCommit());
