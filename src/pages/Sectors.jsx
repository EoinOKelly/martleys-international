import { Link } from 'react-router';
import { A, ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

const sectors = [
  { tag: '01 / FOOD', title: 'Freshness in motion.', body: 'Temperature-controlled movement of fresh and frozen goods, supported by monitoring and documented delivery conditions.', to: '/services#temperature-controlled' },
  { tag: '02 / PHARMACEUTICALS', title: 'Care that is documented.', body: 'Controlled transport with trained drivers and processes designed around the handling needs of medicinal products.', to: '/services#temperature-controlled' },
  { tag: '03 / CONSTRUCTION', title: 'Keep projects moving.', body: 'Aggregate movements and muck shifting for construction sites, civil engineering and infrastructure work.', to: '/services#bulk-haulage' },
  { tag: '04 / QUARRYING', title: 'Ready for demanding sites.', body: 'Bulk movement of sand, gravel and aggregates with robust tipper equipment and experienced drivers.', to: '/services#bulk-haulage' },
  { tag: '05 / ROADS & UTILITIES', title: 'Materials where needed.', body: 'Transport of aggregates, blacktop, soil and excavation waste for road maintenance and utility projects.', to: '/services#bulk-haulage' },
  { tag: '06 / VEHICLE OPERATORS', title: 'Help when plans change.', body: 'Recovery options for private vehicles, commercial fleets, buses and heavy equipment across Ireland.', to: '/services#vehicle-recovery' }
];

export default function Sectors() {
  usePage('Sectors We Serve', 'Logistics for food, pharmaceuticals, construction, quarrying, utilities, road maintenance and vehicle recovery.');
  return <main id="main"><PageHero eyebrow="SECTORS WE SERVE" lead="Transport services for food, pharmaceuticals, construction, quarrying and vehicle operators." image="europe-freight.jpg">SECTORS<br/><em>WE SERVE.</em></PageHero>
    <section className="page-section"><div className="container"><SectionTitle number="01 / INDUSTRIES" intro="Our services are shaped around the practical needs of the sectors we serve.">WORKING ACROSS<br/><span>YOUR WORLD.</span></SectionTitle><div className="sector-grid">{sectors.map(sector => <article key={sector.tag}><span>{sector.tag}</span><h3>{sector.title}</h3><p>{sector.body}</p><Link to={sector.to}>Explore service <A /></Link></article>)}</div></div></section>
    <ContactCta body="Tell us about the load, the route and the timing. We will work through the details with you.">LET’S SOLVE<br/><span>YOUR NEXT MOVE.</span></ContactCta>
  </main>;
}
