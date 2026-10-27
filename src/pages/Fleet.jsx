import { ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

const fleet = [
  { tag: '01 / CONTROLLED FREIGHT', title: 'Refrigerated trailers', body: 'Chereau trailers for fresh, frozen and ambient loads, with live telematics, temperature records and configurations suited to different cargo needs.', image: 'refrigerated.jpg', alt: 'Martley refrigerated trucks' },
  { tag: '02 / BULK HAULAGE', title: 'Tipper trucks & trailers', body: 'Rigid and articulated tipper options for aggregates, site material, excavation waste and insulated blacktop movements.', image: 'tipper.jpg', alt: 'Martley Scania tipper truck' },
  { tag: '03 / TRACTOR UNITS', title: 'Tractor Units', body: 'Versatile Scania tractor units at the core of our international and domestic transport operations.', image: 'scania-close.jpg', alt: 'Martley Scania tractor unit' },
  { tag: '04 / RECOVERY VEHICLES AND EQUIPMENT', title: 'Recovery Vehicles and Equipment', body: 'Low-loader transporters for larger vehicles and tilt-and-slide trucks for smaller vehicle recovery.' }
];

export default function Fleet() {
  usePage('Our Fleet', 'Explore Martley International’s Scania trucks, Chereau refrigerated trailers, tipper fleet and specialist recovery equipment.');
  return <main id="main"><PageHero eyebrow="OUR FLEET" lead="Scania trucks, refrigerated and tipper trailers, and specialist recovery equipment." image="scania-close.jpg" position="center 42%">OUR<br/><em>FLEET.</em></PageHero>
    <section className="page-section"><div className="container story-grid"><div><SectionTitle number="01 / VEHICLES AND EQUIPMENT">Vehicles and Equipment</SectionTitle></div><div className="prose"><p className="lead-text">Trucks are more than our business. They are our passion.</p><p>Our fleet combines Scania tractor units and rigid tippers, Chereau refrigerated trailers, tipper trailers and specialist recovery vehicles and equipment. Every vehicle is supported by our on-site workshop team and preventative maintenance programme.</p><p>Regular servicing and careful upkeep support reliable performance on every route.</p></div></div></section>
    <section className="page-section tint"><div className="container fleet-catalog">{fleet.map(item => <article key={item.tag}>{item.image ? <img src={`/assets/${item.image}`} alt={item.alt} width="1200" height="800" loading="lazy"/> : <div className="catalog-placeholder"><span>04</span><strong>RECOVERY<br/>READY.</strong></div>}<div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>
    <section className="page-section"><div className="container story-grid"><div><SectionTitle number="02 / MAINTENANCE">Maintenance</SectionTitle></div><div className="prose"><p>Our skilled mechanics service and maintain the fleet at our on-site workshop. A preventative maintenance schedule and vehicle replacement policy reduce disruption and ensure total reliability.</p><p>To meet strict food and pharmaceutical standards, our on-site wash facilities perform full internal and external sanitisation between loads.</p></div></div></section>
    <ContactCta />
  </main>;
}
