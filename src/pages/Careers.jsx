import { ButtonLink, ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

export default function Careers() {
  usePage('Careers', 'Interested in driving, logistics or workshop roles? Get in touch with the Martleys Transport team in Portlaoise.');
  return <main id="main"><PageHero eyebrow="CAREERS" lead="Roles for drivers, logistics professionals, mechanics and workshop staff." image="team.jpg" position="center 45%">CAREERS AT<br/><em>MARTLEYS.</em></PageHero>
    <section className="page-section"><div className="container story-grid"><div><SectionTitle number="01 / JOIN THE TEAM">JOIN OUR<br/><span>TEAM.</span></SectionTitle></div><div className="prose"><p className="lead-text">Good transport needs good people.</p><p>From experienced drivers to logistics and workshop professionals, every role helps us deliver the dependable service our customers rely on. We value skill, commitment and a willingness to do the job well.</p><p>We welcome enquiries from people interested in future opportunities. Tell us about your experience and the kind of role you are looking for.</p><ButtonLink to="mailto:info@portlaoiselogistics.com?subject=Careers%20enquiry">Email your interest</ButtonLink></div></div></section>
    <section className="page-section tint"><div className="container"><SectionTitle number="02 / WHERE YOU FIT">ROLES ACROSS<br/><span>THE BUSINESS.</span></SectionTitle><div className="value-grid"><article><b>01</b><h3>On the road</h3><p>Professional drivers working across freight, tipper and specialist transport.</p></article><article><b>02</b><h3>In logistics</h3><p>Planners and coordinators who keep journeys organised and customers informed.</p></article><article><b>03</b><h3>In the workshop</h3><p>Mechanics and support staff keeping the fleet safe, clean and ready.</p></article></div></div></section>
    <ContactCta body="Send us a note about your experience and interests.">LET’S TALK<br/><span>ABOUT YOUR FUTURE.</span></ContactCta>
  </main>;
}
