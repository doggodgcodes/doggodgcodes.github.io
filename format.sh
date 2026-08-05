#!/bin/bash

# run inline node script to fix indentation across js, html, and css files
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
    } else if (file.endsWith(".js") || file.endsWith(".html") || file.endsWith(".css")) {
      if (stat.size < 50 * 1024 * 1024) {
        results.push(file);
      }
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

    if (trimmed.startsWith("<meta") || trimmed.startsWith("<link") || trimmed.startsWith("<br") || trimmed.startsWith("<hr") || trimmed.startsWith("<img") || trimmed.startsWith("<ul") || trimmed.startsWith("<il") || trimmed.startsWith("<small")) {
      const spaces = " ".repeat(indentLevel * indentSize);
      return spaces + trimmed;
    }

    const spaces = " ".repeat(indentLevel * indentSize);
    const result = spaces + trimmed;

    if (trimmed.endsWith("{") || trimmed.endsWith("[") || (trimmed.startsWith("<") && !trimmed.startsWith("</") && !trimmed.endsWith("/>") && !trimmed.startsWith("<!"))) {
      indentLevel++;
    }

    if (trimmed.startsWith("}") || trimmed.startsWith("]") || trimmed.startsWith("</") || trimmed.endsWith("/>")) {
      indentLevel--;
      if (indentLevel < 0) {
        indentLevel = 0;
      }
    }

    return result;
  });

  fs.writeFileSync(file, formattedLines.join("\n"));
  console.log("successfully formatted " + file);
});
'
