import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const lessonMarkdownPath = "AP/data/algorithm_complexity/algorithm_complexity.md";
const lessonHtmlPath = "AP/data/algorithm_complexity/algorithm_complexity.html";
const homepagePath = "index.html";

assert.equal(
    existsSync(lessonMarkdownPath),
    true,
    `Expected ${lessonMarkdownPath} to exist`
);

assert.equal(
    existsSync(lessonHtmlPath),
    true,
    `Expected ${lessonHtmlPath} to exist`
);

const lessonHtml = readFileSync(lessonHtmlPath, "utf8");
assert.match(lessonHtml, /Opening Hook/, "Lesson should include the Opening Hook scene");
assert.match(lessonHtml, /Search Replay/, "Lesson should include the Search Replay scene");
assert.match(lessonHtml, /Pair Comparison Grid/, "Lesson should include the Pair Comparison Grid scene");
assert.match(lessonHtml, /Complexity Translator/, "Lesson should include the Complexity Translator scene");
assert.match(lessonHtml, /Final Summary/, "Lesson should include the Final Summary scene");
assert.match(lessonHtml, /O\(log n\)/, "Lesson should mention O(log n)");
assert.match(lessonHtml, /O\(n\)/, "Lesson should mention O(n)");
assert.match(lessonHtml, /O\(n\^2\)/, "Lesson should mention O(n^2)");
assert.match(lessonHtml, /Teacher Script|Teaching Notes/, "Lesson should include visible teaching guidance");

const homepage = readFileSync(homepagePath, "utf8");
assert.match(
    homepage,
    /\.\/AP\/data\/algorithm_complexity\/algorithm_complexity\.html/,
    "Homepage should link to the new complexity lesson"
);

console.log("algorithm_complexity test passed");
