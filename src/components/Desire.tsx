import { floorPlans } from '../content.ts';
import { Brand } from './Brand.tsx';

export function Desire() {
  return (
    <section className="intro" id="seu-desejo" aria-labelledby="intro-title">
      <div className="intro__visual">
        <div className="intro__patterns" id="intro-pattern" aria-hidden="true">
          {floorPlans.map((src, index) => (
            <img
              className="intro__pattern"
              key={src}
              src={src}
              width="963"
              height="770"
              loading="lazy"
              alt=""
              data-current={index === 0 ? '' : undefined}
            />
          ))}
        </div>
        <div className="intro__identity">
          <Brand />
          <button
            className="intro__cycle"
            id="intro-cycle"
            type="button"
            aria-controls="intro-pattern"
            aria-label="Trocar planta"
            title="Trocar planta"
            hidden
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 6v6h-6" />
              <path d="M21 12a9 9 0 1 0-2.8 6.5" />
            </svg>
          </button>
        </div>
        <span id="intro-plan-status" className="visually-hidden" role="status" />
      </div>
      <div className="intro__copy">
        <h2 id="intro-title">Um olhar<br /> que começa<br /> escutando</h2>
        <p>Antes de falar sobre imóveis, existe algo mais importante: entender o seu momento, suas prioridades e aquilo que você deseja para os próximos capítulos.</p>
      </div>
    </section>
  );
}
