import { Link } from 'react-router';
import { ContactCta, useHeroVideo, usePage } from '../components.jsx';

export default function Home() {
  usePage('Martley International', 'Temperature-controlled freight, bulk haulage and vehicle recovery across Ireland, the UK and Europe.');
  const videoRef = useHeroVideo();
  return <main id="main" className="adare-home">
    <section className="hero" aria-label="Martley trucks on the road and at the depot">
      <video ref={videoRef} className="hero-video" muted loop playsInline preload="none" poster="/assets/hero-drone.webp?v=2" aria-hidden="true"><source src="/assets/hero-drone-hq.mp4?v=2" type="video/mp4" media="(min-width: 768px)"/><source src="/assets/hero-drone.mp4?v=2" type="video/mp4"/></video>
      <div className="hero-shade"/>
      <a className="hero-discover" href="#welcome">IRELAND · UK · EUROPE <span aria-hidden="true">↓</span></a>
    </section>

    <section className="home-welcome" id="welcome"><div className="container">
      <h1>Transport &amp; Logistics across Ireland, the UK &amp; Europe.</h1>
      <p>Martley International is an Irish-owned transport and logistics company with over 40 years of experience serving Ireland, the UK, and Europe. We specialise in temperature-controlled freight, ambient goods, bulk haulage, and vehicle recovery. Based in Portlaoise with direct M7 access, we are ideally located for rapid nationwide and international transport.</p>
      <Link className="welcome-link" to="/about">About the company <span aria-hidden="true">↗</span></Link>
    </div></section>

    <section className="home-offer"><div className="container">
      <div className="home-offer-heading"><h2>Our services</h2></div>
      <div className="home-offer-grid">
        <Link className="home-service-card" to="/services#temperature-controlled"><img className="home-service-card-image" src="/assets/refrigerated.jpg" alt="Martley refrigerated trucks" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>01</span><h3>Temperature-Controlled &amp; Dry Freight</h3><p>Secure transport for fresh, frozen, pharmaceutical and dry freight, fully tracked with live GPS and real-time temperature monitoring.</p><b aria-hidden="true">↗</b></div></Link>
        <Link className="home-service-card" to="/services#bulk-haulage"><img className="home-service-card-image" src="/assets/tipper.jpg" alt="Martley tipper truck and trailer" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>02</span><h3>Bulk Haulage</h3><p>Flexible tipper transport for aggregates, site clearance, muck shifting, and insulated blacktop across construction, quarrying, and infrastructure projects.</p><b aria-hidden="true">↗</b></div></Link>
        <Link className="home-service-card" to="/services#vehicle-recovery"><img className="home-service-card-image" src="/assets/scania-close.jpg" alt="Martley Scania truck" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>03</span><h3>Vehicle Recovery</h3><p>Dependable vehicle recovery across Ireland for light commercials, trucks, buses, agricultural and heavy machinery, using specialised low-loaders and tilt-and-slide transport to minimise downtime.</p><b aria-hidden="true">↗</b></div></Link>
      </div>
    </div></section>
    <ContactCta />
  </main>;
}
