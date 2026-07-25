#!/bin/bash

# run inline node script to fix indentation across javascript files
node -e '
const fs = require("fs");
const file = "chatbot.js"; // replace with your file name
const content = fs.readFileSync(file, "utf-8");
const lines = content.split("\n");

let indentLevel = 0;
const indentSize = 2; // 2 spaces per level

const formattedLines = lines.map(line => {
  let trimmed = line.trim();
  if (!trimmed) return "";

  // decrease indent level if line starts with closing bracket
  if (trimmed.startsWith("}") || trimmed.startsWith("]")) {
    indentLevel = Math.max(0, indentLevel - 1);
  }

  const spaces = " ".repeat(indentLevel * indentSize);
  const result = spaces + trimmed;

  // increase indent level if line ends with opening bracket
  if (trimmed.endsWith("{") || trimmed.endsWith("[")) {
    indentLevel++;
  }

  return result;
});

fs.writeFileSync(file, formattedLines.join("\n"));
console.log("Successfully formatted " + file + " with custom script!");
'
