import { brand, contact } from '../content.ts';
import { Brand } from './Brand.tsx';

const channels = [
  { name: 'WhatsApp', href: contact.whatsapp, icon: 'whatsapp.svg' },
  { name: 'Instagram', href: contact.instagram, icon: 'instagram.svg' },
  { name: 'E-mail', href: contact.email, icon: 'email.svg' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <nav aria-label="Canais de contato">
          <ul className="site-footer__links">
            {channels.map(({ name, href, icon }) => (
              <li key={name}>
                <a href={href} aria-label={name} title={name}>
                  <img src={`./media/icons/${icon}`} width="26" height="26" alt="" />
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
