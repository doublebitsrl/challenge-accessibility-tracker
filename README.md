# Accessibility Tracker Challenge

Welcome to the Accessibility Tracker coding challenge! In this exercise, you will build a small client-side JavaScript module that passively watches a web page for DOM changes and user interactions and sends only new elements back to a server for accessibility analysis.

---

## 🧐 What You’ll Build

A lightweight script that, when embedded on any page:

1. **Observes DOM mutations** at runtime (e.g. new modals, tooltips, dynamic widgets).
2. **Tracks user actions** (`click`, `focusin`, `input`, `Tab` navigation).
3. **Deduplicates** elements so that identical HTML isn’t sent more than once.
4. **Sends** each new element’s `outerHTML` + context to `/api/accessibility` via `navigator.sendBeacon()` or `fetch()`.

---
```
accessibility-tracker-template/
├── src/
│   └── tracker.js       ← implement your solution here
├── package.json         ← no tests here; CI will run hidden tests
└── .github/
└── workflows/
└── ci.yml       ← triggers automated tests & AI review
```

---

## 🎯 Your Tasks

Open **`src/tracker.js`** and implement the following exported functions:

1. **`async hashHtml(html: string): Promise<string>`**
   - Compute a SHA-256 hash of `html`.
   - Used to detect duplicates before sending.

2. **`sendIfNew(html: string, context: object): void`**
   - Call `hashHtml(html)` to check if this snippet was already sent.
   - If new, send `{ html, hash, context, url, timestamp }` to `/api/accessibility`:
     - Prefer `navigator.sendBeacon()`
     - Fallback to `fetch()`

3. **`observeDom(): void`**
   - Instantiate a `MutationObserver` on `document.body` (subtree).
   - For each added element node, call `sendIfNew(node.outerHTML, { type: 'mutation' })`.

4. **`trackUserActions(): void`**
   - Listen for:
     - `'click'`
     - `'focusin'`
     - `'input'`
     - `'keydown'` (when `e.key === 'Tab'`)
   - On each event, call `sendIfNew(e.target.outerHTML, { type: eventType })`.

5. **`initTracker(): void`**
   - Call `observeDom()` and `trackUserActions()` so the script starts automatically in the browser.

> **Tip:** Use a `Set` or `WeakSet` plus your hash function to avoid repeated sends.

---

## 🔧 How to Submit

1. **Fork** this repository.
2. **Implement** the four functions in `src/tracker.js`.
3. **Commit & push** your changes to your fork.
4. **Open a Pull Request** back to this repo.

As soon as you open your PR, our GitHub Action will:

- Pull in our hidden test suite
- Run all tests against your implementation
- Post a **Markdown table** of pass/fail results
- Generate a short **AI review** of your code

You’ll see the feedback as a comment on your PR—no need to run anything locally.

---

## ℹ️ Tips & Constraints

- **No external libraries**: use native Web APIs (`MutationObserver`, `crypto.subtle`, `navigator.sendBeacon`).
- **Performance matter**: batch or throttle sends to at most once per 1–2 s.
- **Error handling**: guard against missing APIs or unsupported browsers.
- **Code style**: clean, modular, well-commented.

---

Good luck, and happy coding!
If you run into any issues, leave a comment on your PR.
