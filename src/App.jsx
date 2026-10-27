import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Header, Footer } from './components.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Sectors = lazy(() => import('./pages/Sectors.jsx'));
const Fleet = lazy(() => import('./pages/Fleet.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) { window.scrollTo(0, 0); return; }
    let frame, tries = 0;
    const targetId = decodeURIComponent(location.hash.slice(1));
    const scrollWhenReady = () => {
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView();
      else if (tries++ < 30) frame = requestAnimationFrame(scrollWhenReady);
    };
    frame = requestAnimationFrame(scrollWhenReady);
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame, observer, attempts = 0;
    const attach = () => {
      const main = document.querySelector('main:not(.route-loading)');
      if (!main) {
        if (attempts++ < 120) frame = requestAnimationFrame(attach);
        return;
      }
      const targets = main.querySelectorAll([
        '.home-welcome .container > *',
        '.home-offer-heading',
        '.home-offer-grid > a',
        '.home-tile-grid > a',
        '.home-blue-inner > *',
        '.page-heading',
        '.prose > *',
        '.feature-photo',
        '.feature-copy > p',
        '.feature-copy > .text-link',
        '.feature-copy > .tick-list',
        '.value-grid article',
        '.standard-grid article',
        '.sector-grid article',
        '.fleet-catalog article',
        '.service-graphic',
        '.page-cta-inner > *',
        '.statement-inner > *',
        '.contact-page-grid > div'
      ].join(', '));
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      }), { rootMargin: '0px 0px -24px 0px', threshold: 0.08 });
      const groups = new Map();
      targets.forEach(target => {
        const position = groups.get(target.parentElement) || 0;
        groups.set(target.parentElement, position + 1);
        target.style.setProperty('--reveal-delay', `${Math.min(position, 3) * 65}ms`);
        target.classList.add('reveal');
        observer.observe(target);
      });
    };
    frame = requestAnimationFrame(attach);
    return () => { cancelAnimationFrame(frame); observer?.disconnect(); };
  }, [location.pathname]);
  return null;
}

export default function App() {
  return <><RouteEffects/><Header/><Suspense fallback={<main className="route-loading" id="main" aria-live="polite">Loading page…</main>}><Routes>
    <Route path="/" element={<Home/>}/><Route path="/samples/blue" element={<Home theme="blue"/>}/><Route path="/samples/navy" element={<Home theme="navy"/>}/><Route path="/samples/white" element={<Home theme="white"/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/sectors" element={<Sectors/>}/><Route path="/fleet" element={<Fleet/>}/><Route path="/careers" element={<Careers/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
  </Routes></Suspense><Footer/></>;
}
