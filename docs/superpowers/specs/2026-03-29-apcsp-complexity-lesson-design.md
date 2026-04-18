# APCSP 复杂度表达课程设计

## 概述

- **主题**：从步骤数到复杂度表达：`O(log n)`、`O(n)`、`O(n^2)`
- **适用对象**：AP Computer Science Principles 学生，一对一教学场景
- **课时**：单课时，支持教师在网页中直接逐幕演示
- **前置知识**：学生已学过 `linear search` 与 `binary search` 的效率差别
- **课程定位**：承接已有搜索课程，不再重复讲“谁更快”，而是把已有直觉提升为“会数步骤、会写表达式、会写 Big-O”

## 设计目标

本节课结束时，学生应能做到：

1. 理解算法复杂度是在描述输入规模增大时，步骤数如何增长。
2. 将“每次排除一半”对应到 `log n` 和 `O(log n)`。
3. 将“单层遍历”对应到 `n` 和 `O(n)`。
4. 将“嵌套两层遍历 / 两两比较”对应到 `n^2` 和 `O(n^2)`。
5. 通过网页中的课程动画，完成从过程直觉到符号表达的迁移。

## 非目标

- 不系统展开 `O(1)`、`O(n log n)` 或更多复杂度类型。
- 不要求学生独立分析陌生算法的复杂度。
- 不讲严格数学证明或对数底数细节。
- 不扩展到排序算法实现细节。

## 体验原则

1. **从旧知出发**：继续使用学生熟悉的搜索场景，快速回收 `O(log n)` 与 `O(n)`。
2. **平方必须可视化**：`O(n^2)` 不能只靠口头说明，要通过二维比较矩阵让学生直观看到“n 乘 n”。
3. **表达链条完整**：每一幕都要把“动作模式 -> 步骤变化 -> 表达式 -> Big-O”连起来。
4. **网页即课件**：教师进入页面后可以直接按场景推进，每幕都有可讲、可演、可停顿的内容。
5. **保持已有视觉语言**：延续项目中现有的科幻 / 教学控制台风格，与 Search HQ 在首页并列而不割裂。

## 信息架构

本课以单个 HTML 页面呈现，包含一个总导航和五个场景：

1. **Opening Hook**
2. **Search Replay**
3. **Pair Comparison Grid**
4. **Complexity Translator**
5. **Final Summary**

同时提供一份教师用 Markdown 教案，与页面内容一一对应。

## 场景设计

### 场景 1：Opening Hook

- **目标**：把学生从“已知两种查找快慢差别”拉到“复杂度表达”。
- **画面**：三张任务卡并排出现：
  - 在有序名单里找一个学生
  - 在乱序名单里找一个学生
  - 检查全班每两个人是否有冲突
- **互动**：教师点击任务卡，系统显示“如果人数翻倍，工作量会怎样变化？”
- **教师讲法**：复杂度不是说“哪一次更快”，而是说“`n` 变大以后，步骤如何变”
- **输出**：板书式主线 `动作 -> 步骤 -> 表达式 -> Big-O`

### 场景 2：Search Replay

- **目标**：回收 `O(log n)` 和 `O(n)`。
- **画面**：`binary search` 与 `linear search` 并排运行，顶部显示比较次数。
- **互动**：
  - 切换 `n = 8 / 16 / 32 / 64 / 128`
  - 选择目标位置
  - `step` / `auto run`
- **核心表达**：
  - `Binary Search`: each step removes half -> `log n` -> `O(log n)`
  - `Linear Search`: check one by one -> `n` -> `O(n)`

### 场景 3：Pair Comparison Grid

- **目标**：讲清楚 `O(n^2)` 的来源。
- **画面**：一个 `n x n` 的学生比较矩阵，横纵轴都是同一组学生。
- **互动**：
  - 切换班级规模
  - 启动“冲突检查”
  - 逐步点亮每个被比较的格子
- **核心表达**：
  - 外层循环跑 `n`
  - 内层循环也跑 `n`
  - 总比较量是 `n * n = n^2`
- **Aha**：当 `n` 从 8 变 16 时，矩阵面积从 64 变 256，让学生看见“平方不是一点点慢”

### 场景 4：Complexity Translator

- **目标**：从动作模式过渡到复杂度表达。
- **画面**：三列翻译卡片：
  - eliminate half each step
  - check one by one
  - compare every pair
- **互动**：点击卡片后，依次点亮：
  - pattern
  - expression
  - Big-O
- **核心映射**：
  - eliminate half -> `log n` -> `O(log n)`
  - one pass -> `n` -> `O(n)`
  - nested pass -> `n^2` -> `O(n^2)`
- **补充对比**：显示 `n doubles` 后三种复杂度各自的变化

### 场景 5：Final Summary

- **目标**：形成教师可直接收束的结论页。
- **画面**：三栏对比：
  - `O(log n)` / binary search / grows slowly
  - `O(n)` / linear search / grows directly with input size
  - `O(n^2)` / pair comparison / grows very fast
- **结论句**：
  - `Big-O describes how the number of steps grows as input size increases.`
  - `When n doubles: O(log n) rises slightly, O(n) doubles, O(n^2) quadruples.`

## 讲稿结构

网页中的每幕都要支持教师直接讲解。讲稿应包含：

1. **导入问题**
2. **动画操作提示**
3. **学生观察重点**
4. **教师标准表述**
5. **本幕一句话总结**

讲稿语气应简洁、准确、偏 APCSP 课堂风格，而不是故事化散文。

## 页面功能需求

### 教学功能

- 场景切换导航
- 每幕的目标说明
- 可交互控件（规模切换、步骤推进、自动播放、重置）
- 同步显示关键数据（steps、expression、Big-O）
- 每幕配套教师讲稿区

### 页面结构

- 单文件 HTML，沿用现有项目技术栈：
  - React 18 via CDN
  - Tailwind CSS
  - Lucide React
  - Babel in browser
- 页面整体风格与 Search HQ 保持同系列
- 支持桌面课堂展示，兼容移动端基础浏览

## 文件规划

- **Create**: `AP/data/algorithm_complexity/algorithm_complexity.md`
  - 教师用教案，描述课程目标、五幕内容、讲稿和教学重点
- **Create**: `AP/data/algorithm_complexity/algorithm_complexity.html`
  - 可直接演示的新课程页面
- **Modify**: `index.html`
  - 首页增加新课程卡片入口
- **Create**: `tests/algorithm_complexity.test.mjs`
  - 轻量回归测试，验证新课程文件存在、首页已接入、HTML 包含关键场景和课程术语

## 验收标准

1. 网站主页新增课程卡片，可直接进入新课程。
2. 新课程 HTML 页面可独立运行并按场景切换。
3. 页面明确包含：
  - 导入
  - `O(log n)` / `O(n)` / `O(n^2)` 三种复杂度
  - 教师讲稿或讲解提示
4. `O(n^2)` 以二维比较矩阵或等价可视化方式呈现，而不是纯文字说明。
5. 自动化测试可验证主页接入与课程页面的基础结构。
