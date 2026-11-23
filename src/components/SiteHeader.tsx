import { brand, navigation } from '../content.ts';

export function SiteHeader() {
  return (
    <header className="site-header" id="inicio">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label={`${brand.name}, início`}>
          <img src="./media/brand/header-monogram.svg" width="39" height="26" alt="" />
          <img src="./media/brand/header-name.svg" width="177" height="21" alt="" />
        </a>
        <nav aria-label="Navegação principal">
          <ul className="site-header__links">
            {navigation.map(({ label, target }) => (
              <li key={target}><a href={target}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
