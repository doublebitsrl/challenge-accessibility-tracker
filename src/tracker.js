/**
 * Stub per il candidate:
 * implementa observeDom, trackUserActions, hashHtml, sendIfNew
 */

///////////////////////////////
// 1. Async SHA-256 hashing
///////////////////////////////
async function hashHtml(html) {
  const encoder = new TextEncoder();
  const data = encoder.encode(html);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  console.log('Hash computed:', hashArray);
  console.log("Updated hashHtml function");
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

///////////////////////////////
// 2. Dedup & send placeholder
///////////////////////////////
const sent = new Set();
function sendIfNew(html, context) {
  // TODO: usa hashHtml(html) per deduplicare
  // se è nuovo, invia via fetch o sendBeacon a /api/accessibility
  console.log('Sending:', html, context);

}

///////////////////////////////
// 3. Observe runtime DOM
///////////////////////////////
function observeDom() {
  // TODO: instanzia MutationObserver su document.body
  // per ogni nodo aggiunto chiama sendIfNew(node.outerHTML, { type: 'mutation' })
  console.log('Observing DOM mutations...');
}

///////////////////////////////
// 4. Track user interactions
///////////////////////////////
function trackUserActions() {
  // TODO: document.addEventListener su 'click','focusin','input','keydown' (Tab)
  // invia outerHTML del target con sendIfNew
  console.log('Tracking user actions...');
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
