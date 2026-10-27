import { ButtonLink, ContactCta, PageHero, SectionTitle, usePage } from '../components.jsx';

export default function Careers() {
  usePage('Join Our Team', 'Interested in driving, logistics or workshop roles? Get in touch with the Martley International team in Portlaoise.');
  return <main id="main"><PageHero eyebrow="JOIN OUR TEAM" lead="Roles for drivers, logistics professionals, mechanics and workshop staff." image="team.jpg" position="center 45%">JOIN OUR<br/><em>TEAM.</em></PageHero>
    <section className="page-section"><div className="container story-grid"><div><SectionTitle number="01 / JOIN THE TEAM">JOIN OUR<br/><span>TEAM.</span></SectionTitle></div><div className="prose"><p className="lead-text">Good transport needs good people.</p><p>From experienced drivers to logistics and workshop professionals, every role helps us deliver the dependable service our customers rely on. We value skill, commitment and a willingness to do the job well.</p><p>We welcome enquiries from people interested in future opportunities. Tell us about your experience and the kind of role you are looking for.</p><ButtonLink to="mailto:info@portlaoiselogistics.com?subject=Careers%20enquiry">Email your interest</ButtonLink></div></div></section>
    <ContactCta />
  </main>;
}
