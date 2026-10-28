import { Link } from 'react-router';
import { A, ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

const sectors = [
  { tag: '01 / FOOD', body: 'Temperature-controlled movement of fresh and frozen goods, supported by monitoring and documented delivery conditions.', to: '/services#temperature-controlled' },
  { tag: '02 / PHARMACEUTICALS', body: 'Controlled transport with trained drivers and processes designed around the handling needs of medicinal products.', to: '/services#temperature-controlled' },
  { tag: '03 / CONSTRUCTION', body: 'Aggregate movements and muck shifting for construction sites, civil engineering and infrastructure work.', to: '/services#bulk-haulage' },
  { tag: '04 / QUARRYING', body: 'Bulk movement of sand, gravel and aggregates with robust tipper equipment and experienced drivers.', to: '/services#bulk-haulage' },
  { tag: '05 / ROADS & UTILITIES', body: 'Transport of aggregates, blacktop, soil and excavation waste for road maintenance and utility projects.', to: '/services#bulk-haulage' },
  { tag: '06 / VEHICLE RECOVERY', body: 'Recovery options for private vehicles, commercial fleets, buses and heavy equipment across Ireland.', to: '/services#vehicle-recovery' }
];

export default function Sectors() {
  usePage('Sectors We Serve', 'Logistics for food, pharmaceuticals, construction, quarrying, utilities and vehicle recovery.');
  return <main id="main"><PageHero eyebrow="SECTORS WE SERVE" lead="Transport services for food, pharmaceuticals, construction, quarrying and vehicle recovery." image="europe-freight.jpg">SECTORS<br/><em>WE SERVE.</em></PageHero>
    <section className="page-section"><div className="container"><SectionTitle number="01 / INDUSTRIES" intro="Our services are shaped around the practical needs of the sectors we serve.">Industries</SectionTitle><div className="sector-grid">{sectors.map(sector => <article key={sector.tag}><h3 className="sector-heading"><span>{sector.tag.split(' / ')[0]} /</span>{sector.tag.split(' / ')[1]}</h3><p>{sector.body}</p><Link to={sector.to}>Explore service <A /></Link></article>)}</div></div></section>
    <ContactCta />
  </main>;
}
