import { Brand } from './components/Brand.tsx';
import { SiteFooter } from './components/SiteFooter.tsx';
import { SiteHeader } from './components/SiteHeader.tsx';
import { brand, contact, journey } from './content.ts';

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <SiteHeader />

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <picture className="hero__image">
            <source
              media="(max-width: 40rem)"
              srcSet="./media/photos/casa-mobile-480.webp 480w, ./media/photos/casa-mobile-800.webp 800w"
              sizes="100vw"
              width="800"
              height="960"
            />
            <img
              src="./media/photos/casa-1280.webp"
              srcSet="./media/photos/casa-800.webp 800w, ./media/photos/casa-1280.webp 1280w, ./media/photos/casa-1675.webp 1675w"
              sizes="100vw"
              width="1675"
              height="939"
              alt=""
              fetchPriority="high"
            />
          </picture>
          <h1 id="hero-title">Seu novo imóvel, aqui</h1>
        </section>

        <section className="intro" id="seu-desejo" aria-labelledby="intro-title">
          <div className="intro__visual">
            <div className="intro__pattern" aria-hidden="true">
              <img src="./media/brand/pattern-left.svg" width="1079" height="770" loading="lazy" alt="" />
              <img src="./media/brand/pattern-right.svg" width="903" height="770" loading="lazy" alt="" />
            </div>
            <Brand />
          </div>
          <div className="intro__copy">
            <h2 id="intro-title">Um olhar<br /> que começa<br /> escutando</h2>
            <p>Antes de falar sobre imóveis, existe algo mais importante: entender o seu momento, suas prioridades e aquilo que você deseja para os próximos capítulos.</p>
          </div>
        </section>

        <section className="journey" id="possibilidades" aria-labelledby="journey-title">
          <div className="container">
            <h2 id="journey-title">Com você, desde o sonho,<br className="desktop-break" /> até a realidade</h2>
            <ol className="journey__steps" role="list">
              {journey.map(({ label, title, description }, index) => (
                <li key={title}>
                  <div className="key-rule" aria-hidden="true">
                    <img src="./media/icons/key-gold.svg" width="35" height="35" loading="lazy" alt="" />
                  </div>
                  <p className="journey__label">{String(index + 1).padStart(2, '0')} / {label}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="services wide-container" id="servicos" aria-labelledby="services-title">
          <img
            className="services__image"
            src="./media/photos/planta-900.webp"
            srcSet="./media/photos/planta-560.webp 560w, ./media/photos/planta-900.webp 900w, ./media/photos/planta-1254.webp 1254w"
            sizes="(max-width: 47.99rem) 93vw, (max-width: 120rem) 47vw, 900px"
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
            alt="Ilustração de uma planta residencial mobiliada, vista de cima"
          />
          <div className="services__copy">
            <h2 id="services-title">Serviços essenciais para você</h2>
            <div className="key-rule" aria-hidden="true">
              <img src="./media/icons/key-ink.svg" width="35" height="35" loading="lazy" alt="" />
            </div>
            <p>Desde estimativas de aluguel até avaliações de imóveis.</p>
            <p>Orientação em todas as etapas da venda residencial, com conhecimento do mercado imobiliário em Santa Catarina.</p>
          </div>
        </section>

        <section className="about wide-container" id="sobre" aria-labelledby="about-title">
          <img
            className="about__portrait"
            src="./media/photos/andriele-560.webp"
            srcSet="./media/photos/andriele-360.webp 360w, ./media/photos/andriele-560.webp 560w, ./media/photos/andriele-900.webp 900w"
            sizes="(max-width: 40rem) 92vw, (max-width: 47.99rem) 23rem, (max-width: 120rem) 25vw, 450px"
            width="1122"
            height="1402"
            loading="lazy"
            decoding="async"
            alt={brand.name}
          />
          <div className="about__panel">
            <h2 id="about-title">Sobre {brand.name}</h2>
            <p>Trabalho com imóveis residenciais e comerciais em Santa Catarina. Ajudo você a entender o valor de um imóvel, estimar o aluguel e tomar decisões de compra ou venda com mais clareza.</p>
            <a className="contact-button" href={contact.whatsapp}>Entre em contato</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
