import { Link } from 'react-router';
import { A, ContactCta, PageHero, usePage } from '../components.jsx';

const sectors = [
  { name: 'FOOD INDUSTRY', body: 'We provide fresh, frozen, and ambient transport solutions for the food industry using refrigerated and fully sanitised trailers operating between -25 °C and +25 °C. Supported by live GPS tracking, continuous temperature monitoring, temperature delivery reports, enhanced security and flexible load options, we ensure complete product safety from pickup through to final delivery.', to: '/services#temperature-controlled' },
  { name: 'PHARMACEUTICALS', body: 'To satisfy the strict transport requirements for medicinal products, we provide secure, temperature-monitored distribution to protect product stability and safety. Our GDP-trained drivers, GDP-certified trailers, enhanced security systems, live GPS tracking and continuous temperature monitoring ensure strict compliance with industry standards throughout transit.', to: '/services#temperature-controlled' },
  { name: 'DRY FREIGHT', body: 'We provide secure, customised ambient transport solutions for general manufacturing, retail, and industrial sectors, delivering everything from commercial freight to high-value cargo. Equipped with real-time tracking, enhanced security systems, and customs clearance assistance, we ensure safe and seamless distribution.', to: '/services#temperature-controlled' },
  { name: 'CONSTRUCTION & INFRASTRUCTURE', body: 'Our tipper fleet handles site clearance, muck shifting, and aggregate supply using both rigid and articulated vehicles. To support roadworks and infrastructure projects, we also transport blacktop in insulated trailers to preserve material temperature and quality in transit.', to: '/services#bulk-haulage' },
  { name: 'QUARRYING', body: 'We support quarry operations with heavy-duty tippers engineered for demanding bulk loads. Our fleet efficiently handles aggregate, sand, and gravel haulage, as well as high-volume on-site material movements.', to: '/services#bulk-haulage' },
  { name: 'VEHICLE RECOVERY', body: 'We deliver rapid-response vehicle recovery across Ireland to minimise operational downtime for commercial fleets, agricultural operators, and private vehicle owners. Utilising low-loader transporters and tilt-and-slide trucks, we safely recover everything from vans to heavy trucks, buses, machinery, and plant.', to: '/services#low-loader-heavy-haulage' }
];

export default function Sectors() {
  usePage('Sectors We Serve', 'Logistics for food, pharmaceuticals, construction, quarrying, utilities and vehicle recovery.');
  return <main id="main"><PageHero eyebrow="SECTORS WE SERVE" lead="Transport services for food, pharmaceuticals, construction, quarrying and vehicle recovery." image="sectors-hero.jpg">SECTORS<br/><em>WE SERVE.</em></PageHero>
    <section className="page-section"><div className="container"><div className="page-heading sector-page-heading"><h2>Industries</h2><p>Our services are shaped around the practical needs of the sectors we serve.</p></div><div className="sector-grid">{sectors.map(sector => <article key={sector.name}><h3 className="sector-heading">{sector.name}</h3><p>{sector.body}</p><Link to={sector.to}>Explore service <A /></Link></article>)}</div></div></section>
    <ContactCta />
  </main>;
}
