import { Link } from 'react-router';
import { ContactCta, useHeroVideo, usePage } from '../components.jsx';

export default function Home() {
  usePage('Martley International', 'Temperature-controlled freight, bulk haulage, low loader and heavy haulage across Ireland, the UK and Europe.');
  const videoRef = useHeroVideo();
  return <main id="main" className="adare-home">
    <section className="hero" aria-label="Martley trucks on the road and at the depot">
      <video ref={videoRef} className="hero-video" muted loop playsInline preload="none" poster="/assets/hero-drone.webp?v=2" aria-hidden="true"><source src="/assets/hero-drone-hq.mp4?v=2" type="video/mp4" media="(min-width: 768px)"/><source src="/assets/hero-drone.mp4?v=2" type="video/mp4"/></video>
      <div className="hero-shade"/>
      <a className="hero-discover" href="#welcome">IRELAND · UK · EUROPE <span aria-hidden="true">↓</span></a>
    </section>

    <section className="home-welcome" id="welcome"><div className="container">
      <h1>Transport &amp; Logistics across Ireland, the UK &amp; Europe.</h1>
      <p>Martley International is an Irish-owned transport and logistics company with over 40 years of experience serving Ireland, the UK, and Europe. We specialise in temperature-controlled freight, ambient goods, bulk haulage, low loader and heavy haulage. Based in Portlaoise with direct M7 access, we are ideally located for rapid nationwide and international transport.</p>
      <Link className="welcome-link" to="/about">About the company <span aria-hidden="true">↗</span></Link>
    </div></section>

    <section className="home-offer"><div className="container">
      <div className="home-offer-heading"><h2>Our services</h2></div>
      <div className="home-offer-grid">
        <Link className="home-service-card" to="/services#temperature-controlled"><img className="home-service-card-image" src="/assets/home-temperature-freight.jpg" alt="Martley temperature-controlled freight truck" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>01</span><h3>Temperature-Controlled &amp; Dry Freight</h3><p>Secure transport for fresh, frozen, pharmaceutical and dry freight, fully tracked with live GPS and real-time temperature monitoring.</p><b aria-hidden="true">↗</b></div></Link>
        <Link className="home-service-card" to="/services#bulk-haulage"><img className="home-service-card-image crop-left" src="/assets/home-bulk-haulage.jpg" alt="Martley tipper truck and trailer" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>02</span><h3>Bulk Haulage</h3><p>Flexible tipper transport for aggregates, site clearance, muck shifting, and insulated blacktop across construction, quarrying, and infrastructure projects.</p><b aria-hidden="true">↗</b></div></Link>
        <Link className="home-service-card" to="/services#low-loader-heavy-haulage"><img className="home-service-card-image" src="/assets/low-loader-heavy-haulage.jpg" alt="Martley low loader transporting heavy machinery" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>03</span><h3>Low Loader &amp; Heavy Haulage</h3><p>Dependable transport across Ireland, the UK and Europe for light commercials, trucks, buses, agricultural and heavy machinery, using specialised low-loaders and tilt-and-slide transport.</p><b aria-hidden="true">↗</b></div></Link>
        <Link className="home-service-card" to="/services#secure-warehousing"><img className="home-service-card-image" src="/assets/warehouse-storage.jpg" alt="Secure warehouse with pallet racking" width="1200" height="800" loading="lazy"/><div className="home-service-card-copy"><span>04</span><h3>Secure Warehousing &amp; Storage</h3><p>Secure storage and warehouse facilities for standard palletised freight, temperature-controlled goods, bulk cargo, vehicles, and plant machinery.</p><b aria-hidden="true">↗</b></div></Link>
      </div>
    </div></section>
    <section className="home-testimonials" aria-labelledby="testimonials-heading"><div className="container">
      <div className="home-testimonials-heading"><h2 id="testimonials-heading">What our customers say</h2><span className="testimonial-count">01 / 03</span></div>
      <article className="testimonial-card" aria-label="Customer testimonial 1 of 3">
        <div className="testimonial-logo"><img src="/assets/brophy-produce-logo.png" alt="Paul Brophy Produce" width="2170" height="725" loading="lazy"/></div>
        <div className="testimonial-content"><blockquote>Having Partnered with Martley International Transport over the last few years, the volume of business has grown year on year based on The Service / Punctuality / Ease of tracking load locations / Modern fleet / driver professionalism and competitive rates. We would have no hesitation in recommending Martley International Transport as a transport provider.</blockquote><div className="testimonial-author"><strong>Barry Brophy</strong><span>Packhouse Operations Manager</span><span>Brophy Produce Ltd, Naas, Co. Kildare</span><small>( Irelands Largest Broccoli Producer )</small></div></div>
      </article>
    </div></section>
    <ContactCta />
  </main>;
}
