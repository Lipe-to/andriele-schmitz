import { floorPlans } from './content.ts';

const pattern = document.querySelector<HTMLImageElement>('#intro-pattern');
const cycle = document.querySelector<HTMLButtonElement>('#intro-cycle');
const status = document.getElementById('intro-plan-status');

if (pattern && cycle && status) {
  let activePlan = 0;
  cycle.addEventListener('click', () => {
    activePlan = (activePlan + 1) % floorPlans.length;
    pattern.src = floorPlans[activePlan];
    status.textContent = `Planta ${activePlan + 1} de ${floorPlans.length}.`;
  });
  cycle.hidden = false;
}
