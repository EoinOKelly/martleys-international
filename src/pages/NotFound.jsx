import { Link } from 'react-router';
import { A, usePage } from '../components.jsx';

export default function NotFound() {
  usePage('Page Not Found', 'The page you requested could not be found. Return to Martley International.');
  return <main id="main" className="not-found"><div className="container"><span>404 / PAGE NOT FOUND</span><h1>WRONG TURN.<br/><em>LET’S GET BACK.</em></h1><p>We could not find that page. Head home or contact our team if you need a hand.</p><div><Link className="button button-blue" to="/">Back to home <A /></Link><Link className="text-link light-link" to="/contact">Contact us <A /></Link></div></div></main>;
}
