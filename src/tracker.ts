// Il candidato implementa queste funzioni:

export async function hashHtml(html: string): Promise<string> {
  // TODO
  return new Promise((resolve) => {
    // Simulazione di un hash
    setTimeout(() => {
      resolve(`hash-${html}`);
    }, 200);
  });
}

export function sendIfNew(html: string, context: any): void {
  // TODO
  console.log("Sending new HTML:", html, "with context:", context);
}

export function observeDom(): void {
  // TODO
  console.log("Observing DOM changes...");
}

export function trackUserActions(): void {
  // TODO
  console.log("Tracking user actions...");
}

// Avvio automatico in browser
export function initTracker(): void {
  observeDom();
  trackUserActions();
}

if (typeof window !== "undefined") {
  initTracker();
}
