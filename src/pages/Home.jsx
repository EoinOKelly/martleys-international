import { Link } from 'react-router';
import { ButtonLink, useHeroVideo, usePage } from '../components.jsx';

const tiles = [
  { title: 'Our team', image: 'team.jpg', alt: 'Members of the Martleys team', to: '/about' },
  { title: 'Our fleet', image: 'refrigerated.jpg', alt: 'Martleys refrigerated trucks', to: '/fleet' },
  { title: 'Transport services', image: 'tipper.jpg', alt: 'Martleys tipper truck', to: '/services' },
  { title: 'Join our team', image: 'international.jpg', alt: 'Martleys truck in Europe', to: '/careers' },
];

export default function Home() {
  usePage('Martleys Transport', 'Temperature-controlled transport, bulk haulage and vehicle recovery from Portlaoise across Ireland, the UK and Europe.');
  const videoRef = useHeroVideo();
  return <main id="main" className="adare-home">
    <section className="hero" aria-label="Martleys trucks on the road and at the depot">
      <video ref={videoRef} className="hero-video" muted loop playsInline preload="none" poster="/assets/hero-drone.webp" aria-hidden="true"><source src="/assets/hero-drone-hq.mp4" type="video/mp4" media="(min-width: 768px)"/><source src="/assets/hero-drone.mp4" type="video/mp4"/></video>
      <div className="hero-shade"/>
      <a className="hero-discover" href="#welcome">PORTLAOISE, IRELAND <span aria-hidden="true">↓</span></a>
    </section>

    <section className="home-welcome" id="welcome"><div className="container">
      <span className="home-label">WELCOME TO MARTLEYS TRANSPORT</span>
      <h1>Transport across Ireland, the UK and Europe</h1>
      <p>Martleys Transport is part of Portlaoise Logistics, an Irish-owned business with more than 40 years of transport experience. From our base in Portlaoise, we carry temperature-controlled freight, bulk materials and vehicles for customers in Ireland, the UK and Europe.</p>
      <Link className="welcome-link" to="/about">About the company <span aria-hidden="true">↗</span></Link>
    </div></section>

    <section className="home-offer"><div className="container">
      <div className="home-offer-heading"><span className="home-label">OUR SERVICES</span><h2>What we transport</h2></div>
      <div className="home-offer-grid">
        <Link to="/services#temperature-controlled"><span>01</span><h3>Temperature-controlled freight</h3><p>Fresh, frozen, pharmaceutical and ambient loads in monitored Chereau trailers.</p><b aria-hidden="true">↗</b></Link>
        <Link to="/services#bulk-haulage"><span>02</span><h3>Bulk &amp; tipper haulage</h3><p>Aggregates, excavated material and blacktop for construction and infrastructure projects.</p><b aria-hidden="true">↗</b></Link>
        <Link to="/services#vehicle-recovery"><span>03</span><h3>Vehicle recovery</h3><p>Recovery and transport for cars, vans, trucks, buses and heavy equipment.</p><b aria-hidden="true">↗</b></Link>
      </div>
    </div></section>

    <section className="home-tiles"><div className="container">
      <div className="home-tile-grid">{tiles.map(tile => <Link className="home-tile" to={tile.to} key={tile.title}><img src={`/assets/${tile.image}`} alt={tile.alt} width="1200" height="800" loading="lazy"/><span>{tile.title}<b aria-hidden="true">↗</b></span></Link>)}</div>
    </div></section>

    <section className="home-blue"><div className="container home-blue-inner"><span className="home-label">PLAN A MOVEMENT</span><h2>Tell us about your load.</h2><p>Send us the collection point, destination, load details and timing. Our team will discuss the right transport option with you.</p><ButtonLink to="/contact">Contact Martleys</ButtonLink></div></section>
  </main>;
}
