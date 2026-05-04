# 🧠 Data Structures & Algorithms

A personal practice repo for solving DSA exercises in JavaScript, built alongside the Codecademy Bootcamp. Each exercise includes a solution file and a Jest test suite.

---

## 🚀 Getting Started

**Install dependencies:**
```bash
npm install
```

**Run all tests:**
```bash
npm test
```

**Watch mode (re-runs on save):**
```bash
npm run test:watch
```

**Run a single exercise:**
```bash
npx jest arrays/warm-up/find-maximum
npx jest arrays/in-class-exercises/array-unshift
npx jest algorithms/in-class-exercises/highest-frequency-letter
```

---

## 📁 Repository Structure

```
.
├── arrays/
│   ├── warm-up/
│   │   ├── <exercise>.js         # Function stub to implement
│   │   └── <exercise>.test.js    # Jest tests
│   └── in-class-exercises/
│       ├── <exercise>.js
│       └── <exercise>.test.js
└── algorithms/
    └── in-class-exercises/
        ├── <exercise>.js
        └── <exercise>.test.js
```

Each topic has its own folder, organised into subfolders by category (`warm-up/`, `in-class-exercises/`). Inside each subfolder you'll find the function stub to implement and a test file to verify your solution.

---

## 📚 Exercises

### 🗂️ Arrays

#### Warm-up

| # | Exercise | File | Complexity |
|---|----------|------|------------|
| 1 | 🔍 Find the Maximum Element | [`arrays/warm-up/find-maximum.js`](arrays/warm-up/find-maximum.js) | Time: O(n) · Space: O(1) |
| 2 | ➕ Sum of All Elements | [`arrays/warm-up/sum-of-elements.js`](arrays/warm-up/sum-of-elements.js) | Time: O(n) · Space: O(1) |

#### In-class Exercises

| # | Exercise | File |
|---|----------|------|
| 1 | ⬅️ Array Unshift | [`arrays/in-class-exercises/array-unshift.js`](arrays/in-class-exercises/array-unshift.js) |
| 2 | 🗑️ Remove At | [`arrays/in-class-exercises/remove-at.js`](arrays/in-class-exercises/remove-at.js) |

### 🗂️ Algorithms

#### In-class Exercises

| # | Exercise | File |
|---|----------|------|
| 1 | 🔡 Highest Frequency Letter | [`algorithms/in-class-exercises/highest-frequency-letter.js`](algorithms/in-class-exercises/highest-frequency-letter.js) |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Language |
| ![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white) | Test runner |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Runtime |

---

## ✅ How to Solve an Exercise

1. Open the `.js` file for the exercise
2. Implement the function body
3. Run the tests with `npx jest <path/exercise-name>`
4. All tests passing? ✅ Move on to the next one!

---

## 👤 Author

**Jorge Rodriguez** — Codecademy Bootcamp student practicing DSA fundamentals.
