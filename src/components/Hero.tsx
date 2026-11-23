function HouseImage({ layer }: { layer: 'background' | 'foreground' }) {
  return (
    <picture className={`hero__image hero__image--${layer}`} aria-hidden="true">
      <source
        media="(max-width: 40rem)"
        srcSet="./media/photos/casa-mobile-480.webp 480w, ./media/photos/casa-mobile-800.webp 800w"
        sizes="100vw"
        width="800"
        height="961"
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
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <HouseImage layer="background" />
      <h1 id="hero-title">Seu novo imóvel, aqui</h1>
      <HouseImage layer="foreground" />
    </section>
  );
}
