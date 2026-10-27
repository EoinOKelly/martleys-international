import { Link } from 'react-router';
import { A, ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

const sectors = [
  { tag: '01 / FOOD', title: 'Food', body: 'Freshness in motion. Temperature-controlled movement of fresh and frozen goods, supported by monitoring and documented delivery conditions.', to: '/services#temperature-controlled' },
  { tag: '02 / PHARMACEUTICALS', title: 'Care that is documented.', body: 'Controlled transport with trained drivers and processes designed around the handling needs of medicinal products.', to: '/services#temperature-controlled' },
  { tag: '03 / CONSTRUCTION', title: 'Keep projects moving.', body: 'Aggregate movements and muck shifting for construction sites, civil engineering and infrastructure work.', to: '/services#bulk-haulage' },
  { tag: '04 / QUARRYING', title: 'Ready for demanding sites.', body: 'Bulk movement of sand, gravel and aggregates with robust tipper equipment and experienced drivers.', to: '/services#bulk-haulage' },
  { tag: '05 / ROADS & UTILITIES', title: 'Materials where needed.', body: 'Transport of aggregates, blacktop, soil and excavation waste for road maintenance and utility projects.', to: '/services#bulk-haulage' },
  { tag: '06 / VEHICLE RECOVERY', title: 'Vehicle Recovery', body: 'Recovery options for private vehicles, commercial fleets, buses and heavy equipment across Ireland.', to: '/services#vehicle-recovery' }
];

export default function Sectors() {
  usePage('Industries', 'Logistics for food, pharmaceuticals, construction, quarrying, utilities and vehicle recovery.');
  return <main id="main"><PageHero eyebrow="INDUSTRIES" lead="Transport services for food, pharmaceuticals, construction, quarrying and vehicle recovery." image="europe-freight.jpg">INDUSTRIES</PageHero>
    <section className="page-section"><div className="container"><SectionTitle number="01 / INDUSTRIES" intro="Our services are shaped around the practical needs of the sectors we serve.">Industries</SectionTitle><div className="sector-grid">{sectors.map(sector => <article key={sector.tag}><span>{sector.tag}</span><h3>{sector.title}</h3><p>{sector.body}</p><Link to={sector.to}>Explore service <A /></Link></article>)}</div></div></section>
    <ContactCta />
  </main>;
}
