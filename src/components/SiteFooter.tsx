import { brand, contact } from '../content.ts';
import { Brand } from './Brand.tsx';

const channels = [
  { name: 'WhatsApp', href: contact.whatsapp, icon: 'whatsapp', size: 34 },
  { name: 'Instagram', href: contact.instagram, icon: 'instagram', size: 41 },
  { name: 'E-mail', href: contact.email, icon: 'email', size: 41 },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav aria-label="Canais de contato">
          <ul className="site-footer__links">
            {channels.map(({ name, href, icon, size }) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name}>
                  <img
                    className={`site-footer__icon site-footer__icon--${icon}`}
                    src={`./media/icons/${icon}.svg`}
                    width={size}
                    height={size}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Brand />
        <p className="site-footer__copyright">© 2026 {brand.name}.<br />Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
