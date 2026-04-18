# APCSP Complexity Lesson Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new APCSP lesson page that teaches `O(log n)`, `O(n)`, and `O(n^2)` through interactive scenes, and expose it from the site homepage.

**Architecture:** Add a new lesson folder under `AP/data/algorithm_complexity/` with a teacher-facing Markdown spec and a self-contained React-in-HTML demo. Update the homepage with a new course card. Protect the integration with a lightweight Node regression test that checks file creation, homepage linking, and key lesson content.

**Tech Stack:** Static HTML, React 18 via CDN, Tailwind CSS, Babel Standalone, plain Node.js assertions

---

### Task 1: Add a Failing Regression Test

**Files:**
- Create: `tests/algorithm_complexity.test.mjs`
- Test: `tests/algorithm_complexity.test.mjs`

- [ ] **Step 1: Write the failing test**

```javascript
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

assert.equal(existsSync("AP/data/algorithm_complexity/algorithm_complexity.html"), true);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: FAIL because the lesson files do not exist yet.

- [ ] **Step 3: Expand the test to include homepage link and key lesson markers**

```javascript
const homepage = readFileSync("index.html", "utf8");
assert.match(homepage, /algorithm_complexity\/algorithm_complexity\.html/);
```

- [ ] **Step 4: Re-run test to confirm it still fails for the expected reason**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: FAIL on missing lesson HTML and missing homepage link.

### Task 2: Write the Teacher Lesson Markdown

**Files:**
- Create: `AP/data/algorithm_complexity/algorithm_complexity.md`
- Test: `tests/algorithm_complexity.test.mjs`

- [ ] **Step 1: Write the lesson markdown with the approved five-scene structure**

Include:
- course overview
- learning goals
- five scenes
- teacher script for each scene
- summary of `O(log n)`, `O(n)`, `O(n^2)`

- [ ] **Step 2: Run the test**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: FAIL because the HTML lesson and homepage link are still missing.

### Task 3: Build the Interactive Lesson HTML

**Files:**
- Create: `AP/data/algorithm_complexity/algorithm_complexity.html`
- Test: `tests/algorithm_complexity.test.mjs`

- [ ] **Step 1: Build the lesson shell**

Create a self-contained HTML page with:
- header
- scene navigation
- lesson objective strip
- footer controls

- [ ] **Step 2: Implement Scene 1 and Scene 2**

Add:
- Opening Hook
- Search Replay

- [ ] **Step 3: Run the test**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: FAIL because the homepage link and remaining scene markers are still incomplete.

- [ ] **Step 4: Implement Scene 3 through Scene 5**

Add:
- Pair Comparison Grid
- Complexity Translator
- Final Summary

- [ ] **Step 5: Include visible teacher-script guidance in the page**

Add a companion lecture panel or per-scene teaching notes so the page can be used directly during instruction.

- [ ] **Step 6: Run the test**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: FAIL only on homepage link if the page is complete.

### Task 4: Add Homepage Entry

**Files:**
- Modify: `index.html`
- Test: `tests/algorithm_complexity.test.mjs`

- [ ] **Step 1: Add a new homepage card for the complexity lesson**

Card should include:
- title
- concise description
- link to `./AP/data/algorithm_complexity/algorithm_complexity.html`

- [ ] **Step 2: Run the test**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: PASS

### Task 5: Verify and Polish

**Files:**
- Verify: `AP/data/algorithm_complexity/algorithm_complexity.md`
- Verify: `AP/data/algorithm_complexity/algorithm_complexity.html`
- Verify: `index.html`
- Verify: `tests/algorithm_complexity.test.mjs`

- [ ] **Step 1: Manually inspect the final lesson HTML for scene completeness**

Check for:
- `O(log n)`, `O(n)`, `O(n^2)`
- teacher script visibility
- homepage reachability

- [ ] **Step 2: Run the regression test again**

Run: `node tests/algorithm_complexity.test.mjs`
Expected: PASS with no warnings or thrown assertions.

- [ ] **Step 3: Check git diff for only intended files**

Run: `git status --short`
Expected: new lesson folder, homepage update, test file, plan/spec docs if included.
