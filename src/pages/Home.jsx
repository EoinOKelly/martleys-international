import { Link } from 'react-router';
import { useHeroVideo, usePage } from '../components.jsx';

const tiles = [
  { title: 'Our team', image: 'team.jpg', alt: 'Members of the Martley team', to: '/about' },
  { title: 'Our fleet', image: 'refrigerated.jpg', alt: 'Martley refrigerated trucks', to: '/fleet' },
  { title: 'Transport services', image: 'tipper.jpg', alt: 'Martley tipper truck', to: '/services' },
  { title: 'Join our team', image: 'international.jpg', alt: 'Martley truck in Europe', to: '/careers' },
];

export default function Home() {
  usePage('Martley International', 'Temperature-controlled freight, bulk haulage and vehicle recovery across Ireland, the UK and Europe.');
  const videoRef = useHeroVideo();
  return <main id="main" className="adare-home">
    <section className="hero" aria-label="Martley trucks on the road and at the depot">
      <video ref={videoRef} className="hero-video" muted loop playsInline preload="none" poster="/assets/hero-drone.webp" aria-hidden="true"><source src="/assets/hero-drone-hq.mp4" type="video/mp4" media="(min-width: 768px)"/><source src="/assets/hero-drone.mp4" type="video/mp4"/></video>
      <div className="hero-shade"/>
      <a className="hero-discover" href="#welcome">IRELAND · UK · EUROPE <span aria-hidden="true">↓</span></a>
    </section>

    <section className="home-welcome" id="welcome"><div className="container">
      <span className="home-label">MARTLEY INTERNATIONAL</span>
      <h1>Transport &amp; Logistics across Ireland, the UK &amp; Europe.</h1>
      <p>Martley International is an Irish-owned transport and logistics company with over 40 years of experience serving Ireland, the UK, and Europe. We specialise in temperature-controlled freight, ambient goods, bulk haulage, and vehicle recovery. Based in Portlaoise with direct M7 access, we are ideally located for rapid nationwide and international transport.</p>
      <Link className="welcome-link" to="/about">About the company <span aria-hidden="true">↗</span></Link>
    </div></section>

    <section className="home-offer"><div className="container">
      <div className="home-offer-heading"><h2>Our services</h2></div>
      <div className="home-offer-grid">
        <Link to="/services#temperature-controlled"><span>01</span><h3>Temperature-controlled freight</h3><p>Fresh, frozen, pharmaceutical and ambient loads in monitored Chereau trailers.</p><b aria-hidden="true">↗</b></Link>
        <Link to="/services#bulk-haulage"><span>02</span><h3>Bulk Haulage</h3><p>Aggregates, excavated material and blacktop for construction and infrastructure projects.</p><b aria-hidden="true">↗</b></Link>
        <Link to="/services#vehicle-recovery"><span>03</span><h3>Vehicle recovery</h3><p>Recovery and transport for cars, vans, trucks, buses and heavy equipment.</p><b aria-hidden="true">↗</b></Link>
      </div>
    </div></section>

    <section className="home-tiles"><div className="container">
      <div className="home-tile-grid">{tiles.map(tile => <Link className="home-tile" to={tile.to} key={tile.title}><img src={`/assets/${tile.image}`} alt={tile.alt} width="1200" height="800" loading="lazy"/><span>{tile.title}<b aria-hidden="true">↗</b></span></Link>)}</div>
    </div></section>

  </main>;
}
