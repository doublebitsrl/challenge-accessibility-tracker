// Il candidato implementa queste funzioni:

export async function hashHtml(html: string): Promise<string> {
  // TODO
  return new Promise((resolve) => {
    // Simulazione di un hash
    setTimeout(() => {
      resolve(`hash-${html}`);
    }, 100);
  });
}

export function sendIfNew(html: string, context: any): void {
  // TODO
}

export function observeDom(): void {
  // TODO
}

export function trackUserActions(): void {
  // TODO
}

// Avvio automatico in browser
export function initTracker(): void {
  observeDom();
  trackUserActions();
}

if (typeof window !== "undefined") {
  initTracker();
}
