/**
 * Stub per il candidate:
 * implementa observeDom, trackUserActions, hashHtml, sendIfNew
 */

///////////////////////////////
// 1. Async SHA-256 hashing
///////////////////////////////
async function hashHtml(html) {
  // TODO: implementa hash SHA-256 asincrono

}

///////////////////////////////
// 2. Dedup & send placeholder
///////////////////////////////
const sent = new Set();
function sendIfNew(html, context) {
  // TODO: usa hashHtml(html) per deduplicare
  // se è nuovo, invia via fetch o sendBeacon a /api/accessibility
}

///////////////////////////////
// 3. Observe runtime DOM
///////////////////////////////
function observeDom() {
  // TODO: instanzia MutationObserver su document.body
  // per ogni nodo aggiunto chiama sendIfNew(node.outerHTML, { type: 'mutation' })
}

///////////////////////////////
// 4. Track user interactions
///////////////////////////////
function trackUserActions() {
  // TODO: document.addEventListener su 'click','focusin','input','keydown' (Tab)
  // invia outerHTML del target con sendIfNew
}

///////////////////////////////
// 5. Init
///////////////////////////////
function initTracker() {
  observeDom();
  trackUserActions();
}

// Esporta per i test
module.exports = {
  hashHtml,
  sendIfNew,
  observeDom,
  trackUserActions,
  initTracker
};

// Auto-init in browser
if (typeof window !== 'undefined') {
  initTracker();
}
