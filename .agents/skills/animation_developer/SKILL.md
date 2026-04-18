---
name: animation_developer
description: 扮演“动画工程师”角色，负责将教学方案转化为Markdown设计文档，并最终实现为 HTML/React 代码。
---

# Animation Developer Skill

此 Skill 这是 **“生产阶段”** 的核心技能。
你将扮演 **架构师 + 工程师** 的双重角色。

## 核心职责

1.  **架构设计 (Spec)**：编写结构化的 Markdown 教案（作为需求文档）。
2.  **工程实现 (Code)**：基于 Markdown 文档，编写可运行的 HTML/React 代码。

---

## 第一部分：Markdown 教学文档规范 (Teaching Document)

**输入**：来自 `teaching_designer` 的抽象创意。
**输出**：`.md` 文件（面向教师的教案）。
**路径规则**：`AP/data/[topic_slug]/[topic_slug].md` (例如 `AP/data/binary_number/binary_number.md`)。
> **注意**：`topic_slug` 必须简短、全小写、用下划线分隔，如 `fourier_transform`, `pid_control`。

### 核心原则
*   **教学视角**：文档面向教师，强调"为什么这样教"和"如何引导学生"。
*   **知识点驱动**：以知识点为单位组织内容，而非以演示为单位。
*   **演示作为工具**：演示是辅助理解的工具，需说明其教学目的。

### 标准模版
```markdown
# [课程标题]

> **核心概念**：一句话概括本课主题
> **适用人群**：适合谁学（如：计算机初学者/中学生）
> **预计时长**：XX 分钟

## 📚 知识点总览

1. [知识点1名称]
2. [知识点2名称]
...

## 🎯 教学目标

- 理解 [核心概念A]
- 掌握 [技能B]
- 体验 [现象C]

---

## 📖 教学设计

### 知识点1：[主题]

#### 核心概念
- **定义**：...
- **关键属性**：...
- **常见误区**：...

#### 教学难点
- 学生常见困惑：...
- 抽象程度高的概念：...

#### 教学策略
采用 [隐喻/演示/实验] 帮助学生建立理解：
- **关键洞察**：这个知识点的本质是什么
- **演示方案**：
  - **演示名称**：[对应HTML中的组件名，如 `BulbUniverse`]
  - **演示目的**：让学生通过交互体验到...
  - **交互设计**：用户 [操作] → 观察到 [现象] → 理解 [原理]
  - **预期收获**：学生会意识到...

#### 教学脚本
- **开场引入**：用什么问题或场景吸引学生注意
- **讲解要点**：需要强调的核心信息
- **金句总结**：一句话概括本知识点

---

### 知识点2：[主题]
... (重复上述结构)

---

## 💡 课后延伸

- **思考题**：...
- **拓展阅读**：...
- **实践建议**：...
```

### 关键区别：Type A vs Type B

| 维度 | Type A (教学文档) | Type B (演示需求) |
|------|-----------------|----------------|
| **受众** | 教师 | 开发者 |
| **组织方式** | 按知识点 | 按场景/幕 |
| **核心内容** | 教学难点、教学策略 | 交互操作、视觉反馈 |
| **演示地位** | 辅助工具，注明目的 | 实现目标，详细规格 |
| **HTML引用** | "参见 XXX 组件" | "对应组件：XXX" |


---

## 第二部分：代码实现规范 (Code)

**输入**：符合上述规范的 `.md` 文件。
**输出**：`.html` 文件。
**路径规则**：`AP/data/[topic_slug]/[topic_slug].html` (例如 `AP/data/binary_number/binary_number.html`)。

### 技术栈 (Tech Stack)
*   **Core**: React 18 (via CDN, hooks-heavy).
*   **Styling**: Tailwind CSS (for layout & typography).
*   **Icons**: Lucide React.
*   **Build**: Babel Standalone (in-browser compilation).

### 工程结构标准

你的代码必须是一个**独立的、自包含的 HTML 文件**，结构如下：

1.  **Header**:
    *   引入 `tailwindcss` script。
    *   引入 `react`, `react-dom`, `lucide-react` (importmap)。
    *   引入 `babel`。

2.  **Body**:
    *   `<div id="root">` 容器。
    *   `<script type="text/babel">` 包含主要逻辑。

### React 组件架构

```jsx
// 1. 主应用容器
const App = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const scenes = [
    { title: "场景1", component: <Scene1 /> },
    { title: "场景2", component: <Scene2 /> },
  ];
  return (
    // 统一的 Layout：Header (Title), Main (Component), Footer (Navigator)
    <Layout>...</Layout>
  );
};

// 2. 场景组件 (独立封装)
const Scene1 = () => {
    // 状态必须在此处定义
    const [value, setValue] = useState(0);
    
    return (
        <div className="grid grid-cols-2 gap-8">
            <ControlPanel value={value} onChange={setValue} />
            <VisualDisplay value={value} />
        </div>
    );
};
```

### 最佳实践

1.  **动静分离**：左侧/下方放控制台 (Sliders, Buttons)，右侧/上方放主视觉 (Canvas, DOM 动画)。
2.  **不要过度封装**：这是一个单文件 Demo，尽量将逻辑写在组件内部，便于阅读。
3.  **视觉美学**：
    *   背景：`bg-slate-900` (深色模式)。
    *   文字：`text-slate-100`。
    *   强调色：`blue-500`, `yellow-400`。
    *   容器：圆角 `rounded-2xl`，微边框 `border border-slate-700`，阴影 `shadow-xl`。

---

## 工作流指引

1.  **Drafting**: 先写 MD。确保每一幕的交互逻辑是可行的（不要设计无法用简单代码实现的 3D 效果）。
2.  **Coding**: 逐幕实现。先写框架 (`App` + `scenes` array)，再填充具体的 `SceneComponent`。

---

## 最小可运行模板 (Reference Template)

**每次生成代码都应以此为基础**。以下是符合规范的最小 HTML 骨架：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[课程标题]</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="importmap">
    {
        "imports": {
            "react": "https://esm.sh/react@18.2.0",
            "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
            "lucide-react": "https://esm.sh/lucide-react@0.292.0"
        }
    }
    </script>
    <script src="https://unpkg.com/@babel/standalone@7.24.4/babel.min.js"></script>
</head>

<body class="bg-slate-900 text-slate-100">
    <div id="root" class="h-full w-full"></div>

    <script type="text/babel" data-presets="react" data-type="module">
        import React, { useState } from 'react';
        import { createRoot } from 'react-dom/client';
        import { ChevronRight, ChevronLeft } from 'lucide-react';

        const App = () => {
            const [currentScene, setCurrentScene] = useState(0);

            const scenes = [
                { title: "场景1", component: <Scene1 /> },
                { title: "场景2", component: <Scene2 /> }
            ];

            return (
                <div className="flex flex-col h-screen bg-slate-900 text-slate-100">
                    <header className="p-4 bg-slate-800 border-b border-slate-700">
                        <h1 className="text-xl font-bold">[课程标题]</h1>
                    </header>
                    
                    <main className="flex-1 p-8 flex items-center justify-center overflow-auto">
                        <div className="w-full max-w-5xl">
                            {scenes[currentScene].component}
                        </div>
                    </main>
                    
                    <footer className="p-6 bg-slate-800 border-t border-slate-700 flex justify-between">
                        <button onClick={() => setCurrentScene(prev => Math.max(0, prev - 1))}
                            disabled={currentScene === 0}
                            className="px-4 py-2 rounded-full bg-slate-700 hover:bg-slate-600 disabled:opacity-30">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => setCurrentScene(prev => Math.min(scenes.length - 1, prev + 1))}
                            disabled={currentScene === scenes.length - 1}
                            className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-30">
                            <ChevronRight size={20} />
                        </button>
                    </footer>
                </div>
            );
        };

        const Scene1 = () => {
            const [value, setValue] = useState(0);
            return (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold">场景标题</h2>
                    <input type="range" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
            );
        };

        const Scene2 = () => <div>场景2内容</div>;

        const root = createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
```

**重点**：
- 完全自包含，无需外部文件。
- 使用 `scenes` 数组管理场景。
- 每个场景是独立的函数组件。
- 统一的导航 Header/Footer 布局。

