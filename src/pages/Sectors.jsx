import { Link } from 'react-router';
import { A, ContactCta, PageHero, usePage } from '../components.jsx';

const sectors = [
  { name: 'FOOD', body: 'Temperature-controlled movement of fresh and frozen goods, supported by monitoring and documented delivery conditions.', to: '/services#temperature-controlled' },
  { name: 'PHARMACEUTICALS', body: 'Controlled transport with trained drivers and processes designed around the handling needs of medicinal products.', to: '/services#temperature-controlled' },
  { name: 'CONSTRUCTION', body: 'Aggregate movements and muck shifting for construction sites, civil engineering and infrastructure work.', to: '/services#bulk-haulage' },
  { name: 'QUARRYING', body: 'Bulk movement of sand, gravel and aggregates with robust tipper equipment and experienced drivers.', to: '/services#bulk-haulage' },
  { name: 'ROADS & UTILITIES', body: 'Transport of aggregates, blacktop, soil and excavation waste for road maintenance and utility projects.', to: '/services#bulk-haulage' },
  { name: 'VEHICLE RECOVERY', body: 'Recovery options for private vehicles, commercial fleets, buses and heavy equipment across Ireland.', to: '/services#vehicle-recovery' }
];

export default function Sectors() {
  usePage('Sectors We Serve', 'Logistics for food, pharmaceuticals, construction, quarrying, utilities and vehicle recovery.');
  return <main id="main"><PageHero eyebrow="SECTORS WE SERVE" lead="Transport services for food, pharmaceuticals, construction, quarrying and vehicle recovery." image="europe-freight.jpg">SECTORS<br/><em>WE SERVE.</em></PageHero>
    <section className="page-section"><div className="container"><div className="page-heading sector-page-heading"><h2>Industries</h2><p>Our services are shaped around the practical needs of the sectors we serve.</p></div><div className="sector-grid">{sectors.map(sector => <article key={sector.name}><h3 className="sector-heading">{sector.name}</h3><p>{sector.body}</p><Link to={sector.to}>Explore service <A /></Link></article>)}</div></div></section>
    <ContactCta />
  </main>;
}
