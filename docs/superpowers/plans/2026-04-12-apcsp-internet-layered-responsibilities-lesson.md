# APCSP Internet Layered Responsibilities Lesson Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new APCSP lesson page that teaches Internet/Web distinction, protocols, packets, routing, fault tolerance, bandwidth/scalability, and layered responsibilities through a real message-process animation, then expose it from the site homepage.

**Architecture:** Add a new lesson folder under `AP/data/internet_layered_responsibilities/` containing a teacher-facing Markdown lesson file and a self-contained React-in-HTML lesson page. Structure the page as a scene-based teaching flow similar to the existing complexity lesson, but center the experience on a concrete “open a webpage” animation with visible responsibility cards, then reinforce the idea with packet, routing, bandwidth/scalability, and simplified layer scenes. Protect the integration with a lightweight Node regression test that checks file creation, homepage linking, scene markers, and key APCSP Internet concepts.

**Tech Stack:** Static HTML, React 18 via CDN, Tailwind CSS, Babel Standalone, plain Node.js assertions

---

## File Map

- Create: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.md`
  - Teacher-facing lesson notes, misconceptions, scene script, and talk track
- Create: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
  - Self-contained interactive lesson page with scene navigation and visible teacher guidance
- Modify: `index.html`
  - Homepage course card for the new Internet lesson
- Create: `tests/internet_layered_responsibilities.test.mjs`
  - Regression test for file existence, homepage integration, key scene markers, and core lesson terms

## Implementation Notes

- Keep the page in one HTML file to match the current project pattern.
- Reuse the successful lesson shell pattern from `AP/data/algorithm_complexity/algorithm_complexity.html`:
  - scene navigation
  - objective strip
  - teacher script panel
  - previous/next footer controls
- Keep the “open a webpage” animation concrete and APCSP-scoped:
  - include request, protocol formatting, packet split, routing, response, reassembly, render
  - exclude DNS deep dive, TLS, caching, proxies, congestion control, and detailed TCP handshakes
- Prefer Chinese for visible instructional copy; only keep a few core English terms like `packet`, `protocol`, and `routing` when they are the teaching target.

### Task 1: Add a Failing Regression Test

**Files:**
- Create: `tests/internet_layered_responsibilities.test.mjs`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Write the failing test for lesson file existence**

```javascript
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

assert.equal(
  existsSync("AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html"),
  true,
  "Expected Internet lesson HTML to exist"
);
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because the new lesson files do not exist yet.

- [ ] **Step 3: Expand the test to cover homepage link and key lesson markers**

```javascript
const lessonHtml = readFileSync(
  "AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html",
  "utf8"
);
assert.match(lessonHtml, /Internet vs Web/);
assert.match(lessonHtml, /打开一个网页/);
assert.match(lessonHtml, /packet/i);
assert.match(lessonHtml, /routing/i);
assert.match(lessonHtml, /bandwidth|scalability/i);
assert.match(lessonHtml, /教师讲稿|data-testid="teaching-panel"/);

const homepage = readFileSync("index.html", "utf8");
assert.match(
  homepage,
  /\.\/AP\/data\/internet_layered_responsibilities\/internet_layered_responsibilities\.html/
);
```

- [ ] **Step 4: Re-run the test to confirm it still fails for the expected reason**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL on missing lesson HTML and missing homepage entry.

- [ ] **Step 5: Commit the failing test**

```bash
git add tests/internet_layered_responsibilities.test.mjs
git commit -m "test: add internet lesson regression"
```

### Task 2: Write the Teacher Lesson Markdown

**Files:**
- Create: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.md`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Create the lesson markdown with the approved teaching structure**

Include these sections:
- lesson overview
- learning goals
- misconceptions
- scene-by-scene teaching notes
- teacher prompts for the “打开一个网页时，谁在负责什么” animation
- bandwidth / scalability takeaway
- final simplified layer summary

- [ ] **Step 2: Use the approved scene sequence from the spec**

Recommended lesson sections:
- `Internet vs Web`
- `打开一个网页时，谁在负责什么`
- `Protocol + Packet`
- `Routing + Fault Tolerance`
- `Bandwidth + Scalability`
- `简化分层与迁移检查`

- [ ] **Step 3: Add explicit talk-track notes for the real-process animation scene**

Include guidance such as:

```markdown
- 先让学生盯住四张职责卡，不先报层名
- 点击链接后，只追问“这一秒谁在负责什么”
- 在 packet 分裂时停顿
- 在网页内容重新填充时收束到“不同职责协作”
```

- [ ] **Step 4: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because the interactive HTML and homepage card are still missing.

- [ ] **Step 5: Commit the lesson markdown**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.md
git commit -m "docs: add internet lesson markdown"
```

### Task 3: Build the Lesson Shell and Scene Registry

**Files:**
- Create: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Create the HTML scaffold with the existing project stack**

Include:
- `<!DOCTYPE html>`
- Tailwind CDN
- React / React DOM import map
- Babel standalone
- root mount node

- [ ] **Step 2: Add the shared page shell and helper components**

Mirror the existing lesson structure with:
- header with course title and objective strip
- scene navigation pills
- reusable glass card / metric / teacher panel components
- previous / next footer controls

Use a scene registry like:

```javascript
const scenes = [
  { title: "Internet vs Web", component: <InternetVsWebScene /> },
  { title: "打开一个网页", component: <WebRequestScene /> },
  { title: "Protocol + Packet", component: <PacketScene /> },
  { title: "Routing + Fault Tolerance", component: <RoutingScene /> },
  { title: "Bandwidth + Scalability", component: <ScaleScene /> },
  { title: "简化分层", component: <LayerSummaryScene /> }
];
```

- [ ] **Step 3: Add visible teacher guidance support from the beginning**

Create a reusable panel similar to:

```javascript
const TeachingPanel = ({ intro, operate, focus, line, takeaway }) => (
  <Card data-testid="teaching-panel">...</Card>
);
```

- [ ] **Step 4: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because the scene content and homepage link are still incomplete.

- [ ] **Step 5: Commit the shell**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add internet lesson shell"
```

### Task 4: Implement the Opening `Internet vs Web` Scene

**Files:**
- Modify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Implement `Internet vs Web` as the opening scene**

Show:
- multiple Internet-based activities
- one clear statement that `Web` is one service on top of the `Internet`
- a teacher-script panel that frames the lesson question

- [ ] **Step 2: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because the webpage-request scene, later scenes, and homepage link are still missing.

- [ ] **Step 3: Commit the opening scene**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add internet vs web opening scene"
```

### Task 5: Implement the Real Webpage Request Animation

**Files:**
- Modify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Implement the fixed responsibility cards for the webpage-request scene**

Use these labels:
- `我要什么`
- `按什么规则交流`
- `往哪条路走`
- `怎样真正发送与接收`

- [ ] **Step 2: Implement the request state machine for the real-process animation**

Drive the scene from a small ordered data structure:

```javascript
const REQUEST_STEPS = [
  { id: "click", label: "点击链接", role: "我要什么" },
  { id: "format", label: "Protocol：规定怎么说", role: "按什么规则交流" },
  { id: "split", label: "拆成多个 packet", role: "按什么规则交流" },
  { id: "route", label: "沿网络路径前进", role: "往哪条路走" },
  { id: "response", label: "服务器返回内容", role: "怎样真正发送与接收" },
  { id: "render", label: "页面按块填充", role: "我要什么" }
];
```

- [ ] **Step 3: Add a minimal scene-state contract before animating**

Keep the animation driven by explicit state such as:

```javascript
const initialRequestState = {
  currentStep: "click",
  packets: [
    { id: "p1", route: "main", delivered: false },
    { id: "p2", route: "main", delivered: false },
    { id: "p3", route: "main", delivered: false }
  ],
  responseStarted: false,
  renderBlocks: 0,
  isReassembled: false
};
```

Required transition rules:
- `split` creates visible packet identities
- `route` can update each packet route independently
- `response` starts only after request packets finish outbound travel
- `render` advances only after `isReassembled === true`

- [ ] **Step 4: Animate packet split, path traversal, and block-by-block page fill**

Requirements:
- packets have visible numbering or color identity
- route motion is fast
- packet split pauses briefly
- final render slows down so the reassembly is visible

- [ ] **Step 5: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because later scenes, bandwidth/scalability coverage, and homepage link are still missing.

- [ ] **Step 6: Commit the webpage-request animation**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add webpage request animation"
```

### Task 6: Implement the `Protocol + Packet` Scene

**Files:**
- Modify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Build the `Protocol + Packet` scene**

Show:
- one message or file becoming packets
- packet numbering
- protocol as a visible rule/format card
- concise teacher explanation of why packets help

- [ ] **Step 2: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because routing, bandwidth/scalability, simplified layers, and homepage linking are still missing.

- [ ] **Step 3: Commit the packet scene**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add protocol and packet scene"
```

### Task 7: Implement `Routing + Fault Tolerance`

**Files:**
- Modify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Build the `Routing + Fault Tolerance` scene**

Show:
- multiple network paths
- one broken node or link toggle
- packets rerouting and still arriving

Keep the scene scoped to APCSP:
- no routing tables
- no congestion control
- no deep transport detail

- [ ] **Step 2: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL because bandwidth/scalability, simplified layers, and homepage linking are still missing.

- [ ] **Step 3: Commit the routing scene**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add routing and fault tolerance scene"
```

### Task 8: Implement `Bandwidth + Scalability` and the Simplified Layer Summary

**Files:**
- Modify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Test: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Add a lightweight `Bandwidth + Scalability` scene or summary card**

Keep it APCSP-sized:
- compare a narrow vs wide data lane for `bandwidth`
- show more users/devices joining without redesigning the whole system for `scalability`
- tie both ideas back to open protocols and distributed routing

- [ ] **Step 2: Build the `简化分层` summary scene**

Use responsibility-first copy, then reveal simplified layer names:

```javascript
[
  { duty: "我要做什么", layer: "Application" },
  { duty: "如何按规则传输", layer: "Transport" },
  { duty: "数据往哪走", layer: "Internet" },
  { duty: "怎样在具体网络上传送", layer: "Link / Physical" }
]
```

- [ ] **Step 3: Add transfer-check prompts and visible teacher support**

Include end-of-lesson prompts like:
- `如果网页打不开，可能是哪一层的问题？`
- `如果某条路径断了，为什么系统还可能继续工作？`
- `如果只改上层应用，为什么不一定要重写底层网络？`
- `如果更多设备接入 Internet，为什么系统仍能扩展？`

- [ ] **Step 4: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: FAIL only on homepage linking if the lesson page is otherwise complete.

- [ ] **Step 5: Commit the summary scenes**

```bash
git add AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html
git commit -m "feat: add scalability and layer summary scenes"
```

### Task 9: Add Homepage Entry and Final Verification

**Files:**
- Modify: `index.html`
- Verify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.md`
- Verify: `AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`
- Verify: `tests/internet_layered_responsibilities.test.mjs`

- [ ] **Step 1: Add a homepage card for the new Internet lesson**

Card must include:
- lesson title
- concise description
- link to `./AP/data/internet_layered_responsibilities/internet_layered_responsibilities.html`

- [ ] **Step 2: Run the regression test**

Run: `node tests/internet_layered_responsibilities.test.mjs`  
Expected: PASS

- [ ] **Step 3: Manually inspect the lesson page in a browser**

Check:
- scene navigation works
- teacher script panel is visible
- the “打开一个网页” animation clearly shows request -> packet -> route -> response -> render
- the bandwidth / scalability teaching point is visible and concise
- the page remains readable on a typical laptop viewport

- [ ] **Step 4: Check the final working tree**

Run: `git status --short`  
Expected: only the intended lesson files, homepage update, and test file are changed.

- [ ] **Step 5: Commit the final integration**

```bash
git add index.html AP/data/internet_layered_responsibilities tests/internet_layered_responsibilities.test.mjs
git commit -m "feat: add APCSP internet lesson"
```
