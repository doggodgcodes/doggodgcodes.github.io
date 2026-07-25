#!/bin/bash

# run inline node script to fix indentation across all js and html files
node -e '
const fs = require("fs");
const path = require("path");

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes("node_modules") && !file.includes(".git")) {
        results = results.concat(getFiles(file));
      }
    } else if (file.endsWith(".js") || file.endsWith(".html")) {
      results.push(file);
    }
  });
  return results;
}

const targetFiles = getFiles(".");

targetFiles.forEach(file => {
  const content = fs.readFileSync(file, "utf-8");
  const lines = content.split("\n");

  let indentLevel = 0;
  const indentSize = 2;

  const formattedLines = lines.map(line => {
    let trimmed = line.trim();
    if (!trimmed) return "";

    if (trimmed.startsWith("}") || trimmed.startsWith("]") || trimmed.startsWith("</")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    const spaces = " ".repeat(indentLevel * indentSize);
    const result = spaces + trimmed;

    if (trimmed.endsWith("{") || trimmed.endsWith("[") || (trimmed.includes("<") && !trimmed.includes("</") && !trimmed.endsWith("/>") && !trimmed.startsWith("<!"))) {
      indentLevel++;
    }

    return result;
  });

  fs.writeFileSync(file, formattedLines.join("\n"));
  console.log("successfully formatted " + file);
});
'
