import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { A, Kicker, PageHero, usePage } from '../components.jsx';

const serviceOptions = ['Temperature-Controlled Freight', 'Bulk Haulage', 'Vehicle Recovery', 'Other enquiry'];

export default function Contact() {
  usePage('Contact Us', 'Contact Martley International in Portlaoise for temperature-controlled freight, bulk haulage, vehicle recovery and international transport enquiries.');
  const [params] = useSearchParams();
  const suggestedService = params.get('service');
  const initialService = useMemo(() => serviceOptions.includes(suggestedService) ? suggestedService : '', [suggestedService]);
  const [service, setService] = useState(initialService);
  const [status, setStatus] = useState('This form opens your email application; it does not send data from this website.');
  useEffect(() => setService(initialService), [initialService]);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    const body = [
      `Name: ${values.name}`, `Company: ${values.company || 'Not provided'}`, `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`, `Service: ${values.service}`,
      `Collection: ${values.collection || 'To be discussed'}`, `Delivery: ${values.delivery || 'To be discussed'}`, `Approximate collection date: ${values.collectionDate || 'To be discussed'}`,
      '', values.details
    ].join('\n');
    setStatus('Opening your email application. Please review and send your enquiry there.');
    window.location.href = `mailto:info@portlaoiselogistics.com?subject=${encodeURIComponent(`Transport enquiry: ${values.service}`)}&body=${encodeURIComponent(body)}`;
  }

  return <main id="main"><PageHero eyebrow="CONTACT US" lead="Contact our Portlaoise team about a load, recovery job or transport quote." image="international.jpg">CONTACT<br/><em>US.</em></PageHero>
    <section className="page-section"><div className="container contact-page-grid"><div><Kicker>GET IN TOUCH</Kicker><h2>Contact us</h2><p>Tell us what you need to move, where it needs to go and when. Our team will help plan the right transport solution.</p><div className="contact-method"><span>CALL</span><a href="tel:+353578620888">+353 (0)57 862 0888</a></div><div className="contact-method"><span>EMAIL</span><a href="mailto:info@portlaoiselogistics.com">info@portlaoiselogistics.com</a></div><div className="contact-method"><span>VISIT</span><address>Dublin Road, Kilminchy<br/>Portlaoise, Co. Laois<br/>R32 CPA4, Ireland</address></div></div><div className="enquiry-panel"><div className="panel-heading"><span>TRANSPORT ENQUIRY</span><h3>Tell us about the job.</h3><p>Complete the details below to draft an email to our team. Your email app will open so you can review and send it.</p></div><form onSubmit={submit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" required/></label><label>Company<input name="company" autoComplete="organization"/></label></div><div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" required/></label><label>Phone<input name="phone" type="tel" autoComplete="tel"/></label></div><label>Service<select name="service" value={service} onChange={event => setService(event.target.value)} required><option value="">Choose a service</option>{serviceOptions.map(option => <option key={option}>{option}</option>)}</select></label><div className="form-row"><label>Collection location<input name="collection" autoComplete="off"/></label><label>Delivery location<input name="delivery" autoComplete="off"/></label></div><label>Approximate collection date<input name="collectionDate" type="date"/></label><label>Tell us more<textarea name="details" rows="5" placeholder="What needs moving? Include timing, load details or anything else helpful." required/></label><button className="button button-blue" type="submit">Create email enquiry <A /></button><p className="form-note" role="status">{status}</p></form></div></div></section>
  </main>;
}
