import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

export const A = ({ children }) => <span aria-hidden="true">{children || '↗'}</span>;

export function Brand() {
  return <Link className="brand" to="/" aria-label="Martley International, back to home"><span className="brand-main">MARTLEY<span className="brand-slash">/</span></span><span className="brand-sub">INTERNATIONAL TRANSPORT</span></Link>;
}

const navItems = [
  ['About', '/about'], ['Services', '/services'], ['Sectors', '/sectors'],
  ['Fleet', '/fleet'], ['Careers', '/careers']
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
    <div className="topline"><div className="container topline-inner"><span>Family run. Irish owned. Internationally driven.</span><div><a href="tel:+353578620888">+353 (0)57 862 0888</a><span className="topline-divider">/</span><a href="mailto:info@portlaoiselogistics.com">info@portlaoiselogistics.com</a></div></div></div>
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Brand />
        <nav className={`main-nav${open ? ' is-open' : ''}`} id="main-nav" ref={navRef} aria-label="Main navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <NavLink className="nav-contact" to="/contact" onClick={() => setOpen(false)}>Get a quote <A /></NavLink>
        </nav>
        <button className="menu-button" ref={toggleRef} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(value => !value)}><span/><span/><span/></button>
      </div>
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-top"><Brand /><p>Driven by experience.<br/>Powered by people.</p><div className="footer-links"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/sectors">Sectors</Link><Link to="/fleet">Fleet</Link><Link to="/standards">Standards</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Martley International / Portlaoise Logistics.</span><span>Portlaoise, Ireland <b>↗</b> Everywhere you need us.</span></div></footer>;
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
  return <section className="page-hero" style={{ '--hero-position': position || 'center' }}><img className="page-hero-image" src={`/assets/${image}`} alt="" width="1200" height="800" fetchPriority="high"/><div className="page-hero-shade"/><div className="container page-hero-inner"><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span><h1>{children}</h1><p>{lead}</p></div><div className="container page-hero-index"><Link to="/">HOME</Link><span>/</span><span>{eyebrow}</span></div></section>;
}

export function SectionTitle({ number, children, intro }) {
  return <div className="page-heading"><Kicker>{number}</Kicker><h2>{children}</h2>{intro && <p>{intro}</p>}</div>;
}

export function ContactCta({ children, body = 'Tell us what you need to move. We will help plan the next step.' }) {
  return <section className="page-cta"><div className="container page-cta-inner"><div><Kicker dark>LET’S TALK</Kicker><h2>{children}</h2><p>{body}</p></div><ButtonLink to="/contact">Start an enquiry</ButtonLink></div></section>;
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
    if (motion || navigator.connection?.saveData) { video.pause(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.05 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);
  return ref;
}
