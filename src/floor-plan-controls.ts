const patternArea = document.getElementById('intro-pattern');
const patterns = patternArea?.querySelectorAll<HTMLImageElement>('.intro__pattern') ?? [];
const cycle = document.querySelector<HTMLButtonElement>('#intro-cycle');
const status = document.getElementById('intro-plan-status');

if (patternArea && patterns.length > 1 && cycle && status) {
  const interval = 5000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activePlan = 0;
  let revision = 0;
  let inView = false;
  let timer: number | undefined;

  async function advance() {
    const next = (activePlan + 1) % patterns.length;
    const image = patterns[next];
    const pending = ++revision;
    try {
      await image.decode();
    } catch {
      return false;
    }
    if (pending !== revision) return false;

    patterns[activePlan].removeAttribute('data-current');
    image.setAttribute('data-current', '');
    activePlan = next;
    return true;
  }

  function schedule() {
    window.clearTimeout(timer);
    if (inView && !document.hidden && !reducedMotion.matches) {
      timer = window.setTimeout(() => {
        void advance();
        schedule();
      }, interval);
    }
  }

  cycle.addEventListener('click', async () => {
    schedule();
    if (await advance()) {
      status.textContent = `Planta ${activePlan + 1} de ${patterns.length}.`;
    }
  });
  cycle.hidden = false;

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    schedule();
  });
  observer.observe(patternArea);
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', schedule);
}

export {};
