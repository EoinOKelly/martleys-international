import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

export const A = ({ children }) => <span aria-hidden="true">{children || '↗'}</span>;

export function Brand() {
  return <Link className="brand" to="/" aria-label="Martley International, back to home"><span className="brand-main">MARTLEY</span><span className="brand-sub">international</span></Link>;
}

const navItems = [
  ['About', '/about'], ['Services', '/services'], ['Industries', '/sectors'],
  ['Fleet', '/fleet'], ['Join our team', '/careers']
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (open) navRef.current?.querySelector('a')?.focus();
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
      if (event.key !== 'Tab') return;
      const focusables = [...navRef.current.querySelectorAll('a'), toggleRef.current];
      const first = focusables[0], last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="topline"><div className="container topline-inner"><span>Transport from Portlaoise across Ireland, the UK and Europe</span><div><a href="tel:+353578620888">+353 (0)57 862 0888</a><span className="topline-divider">/</span><a href="mailto:info@martleytransport.com">info@martleytransport.com</a></div></div></div>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Brand />
        <nav className={`main-nav${open ? ' is-open' : ''}`} id="main-nav" ref={navRef} aria-label="Main navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <NavLink className="nav-contact" to="/contact" onClick={() => setOpen(false)}>Contact us <A /></NavLink>
        </nav>
        <button className="menu-button" ref={toggleRef} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(value => !value)}><span/><span/><span/></button>
      </div>
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer">
    <div className="container footer-top">
      <div className="footer-brand"><Brand /><address>Dublin Road, Kilminchy<br/>Portlaoise, Co. Laois<br/>R32 CPA4, Ireland</address></div>
      <nav className="footer-links" aria-label="Footer navigation"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/sectors">Industries</Link><Link to="/fleet">Fleet</Link><Link to="/careers">Join our team</Link></nav>
      <div className="footer-contact"><span className="footer-label">CONTACT</span><a href="tel:+353578620888">+353 (0)57 862 0888</a><a href="mailto:info@martleytransport.com">info@martleytransport.com</a></div>
      <div className="footer-social"><span className="footer-label">FOLLOW</span><div className="footer-social-icons">
        <a href="https://www.facebook.com/portlaoiselogistics/" target="_blank" rel="noreferrer" aria-label="Martley International Transport on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6v2.6H7V13h3v9h3.5Z"/></svg></a>
        <a href="https://www.instagram.com/martley_international?mdxt=MWswa3JpdXQyamRnYQ%3D%3D" target="_blank" rel="noreferrer" aria-label="Martley International on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.2 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.8 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd"/></svg></a>
        <a href="https://www.linkedin.com/company/portlaoiselogisticsltd" target="_blank" rel="noreferrer" aria-label="Portlaoise Logistics on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.3 7.7A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.7ZM3.4 21h3.8V9H3.4v12Zm6 0h3.8v-6.7c0-1.8.3-3.5 2.5-3.5 2.1 0 2.1 2 2.1 3.6V21h3.8v-7.4c0-3.6-.8-6.4-5-6.4-2 0-3.4 1.1-4 2.1h-.1V7.7H9V21Z"/></svg></a>
      </div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Martley International.</span><span>Transport across Ireland, the UK and Europe</span><Link to="/contact">Contact us <A /></Link></div>
  </footer>;
}

export function Kicker({ children, dark = false }) {
  return <span className={`kicker${dark ? ' on-dark' : ''}`}><span className="kicker-bar"/>{children}</span>;
}

export function TextLink({ to, children, light = false }) {
  const cls = `text-link ${light ? 'light-link' : 'dark-link'}`;
  return to.startsWith('tel:') || to.startsWith('mailto:') ? <a className={cls} href={to}>{children} <A /></a> : <Link className={cls} to={to}>{children} <A /></Link>;
}

export function ButtonLink({ to, children, outline = false }) {
  const cls = `button ${outline ? 'button-outline' : 'button-blue'}`;
  return to.startsWith('tel:') || to.startsWith('mailto:') ? <a className={cls} href={to}>{children} <A /></a> : <Link className={cls} to={to}>{children} <A /></Link>;
}

export function PageHero({ eyebrow, children, lead, image, position }) {
  return <section className="page-hero" style={{ '--hero-position': position || 'center' }}><img className="page-hero-image" src={`/assets/${image}`} alt="" width="1200" height="800" fetchPriority="high"/><div className="page-hero-shade"/><div className="container page-hero-inner"><h1>{children}</h1><p>{lead}</p></div><div className="container page-hero-index"><Link to="/">HOME</Link><span>/</span><span>{eyebrow}</span></div></section>;
}

export function SectionTitle({ number, children, intro }) {
  return <div className="page-heading"><Kicker>{number.split('/')[0].trim()}</Kicker><h2>{children}</h2>{intro && <p>{intro}</p>}</div>;
}

export function ContactCta() {
  return <section className="page-cta"><div className="container page-cta-inner"><div><h2>TALK TO OUR TEAM.</h2><p>Tell us what you need to move, where it needs to go and when. Our team will help plan the right transport solution.</p></div><ButtonLink to="/contact">Contact us</ButtonLink></div></section>;
}

export function usePage(title, description) {
  useEffect(() => {
    document.title = `${title} | Martley International`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}

export function useHeroVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = navigator.connection;
    if (motion || connection?.saveData || /(^|-)2g|3g/.test(connection?.effectiveType || '')) { video.pause(); return; }
    let idleId, timerId;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = () => video.play().catch(() => {});
        if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(start, { timeout: 1800 });
        else timerId = window.setTimeout(start, 800);
      } else {
        if (idleId) window.cancelIdleCallback(idleId);
        if (timerId) window.clearTimeout(timerId);
        video.pause();
      }
    }, { threshold: 0.05 });
    observer.observe(video);
    return () => { observer.disconnect(); if (idleId) window.cancelIdleCallback(idleId); if (timerId) window.clearTimeout(timerId); video.pause(); };
  }, []);
  return ref;
}
