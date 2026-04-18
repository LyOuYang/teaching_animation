import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

assert.equal(
    existsSync("AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html"),
    true,
    "Expected Internet lesson HTML to exist"
);

const lessonHtml = readFileSync(
    "AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html",
    "utf8"
);

assert.match(lessonHtml, /Internet vs Web/, "Lesson should include the Internet vs Web scene");
assert.match(lessonHtml, /打开一个网页/, "Lesson should include the webpage-request scene");
assert.match(lessonHtml, /packet/i, "Lesson should mention packet");
assert.match(lessonHtml, /routing/i, "Lesson should mention routing");
assert.match(lessonHtml, /bandwidth|scalability/i, "Lesson should mention bandwidth or scalability");
assert.match(lessonHtml, /整体数据传递总览|真实数据传递总览/, "Lesson should include an end-to-end transmission overview scene");
assert.doesNotMatch(lessonHtml, /教师讲稿|data-testid="teaching-panel"/, "Student lesson page should not include visible teacher-script panels");

const homepage = readFileSync("index.html", "utf8");
assert.match(
    homepage,
    /\.\/AP\/data\/internet_layered_responsibilities\/internet_layered_responsibilities\.html/,
    "Homepage should link to the Internet lesson"
);
