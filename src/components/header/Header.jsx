import { useState } from 'react';
import mc from './header.module.scss';
import CV from '../../assets/doc/CV_Johanna_Faget_Dev_Web.pdf';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className={mc.container}>
			<div className={mc.wrapper}>
				<Link to="/" className={mc.logo}>
					<h1>Johanna Faget</h1>
					<p>Future développeuse web et mobile</p>
				</Link>
				<button
					role="navigation"
					aria-label="Open navigation"
					className={!menuOpen ? mc.burger : mc.close}
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}></button>
			</div>

			<nav className={!menuOpen ? mc.hidden : mc.visible}>
				<Link
					to="/"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}>
					Accueil
				</Link>
				<Link
					to="/skills"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}>
					Compétences
				</Link>
				<Link
					to="/education"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}>
					Formations
				</Link>
				<Link
					to="/experiences"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}>
					Expériences
				</Link>
				<Link
					to="/portfolio"
					onClick={() => {
						setMenuOpen(!menuOpen);
					}}>
					Portfolio
				</Link>
				<a href={CV} target="blanck" className={mc.btn}>
					CV
				</a>
			</nav>
		</header>
	);
};

export default Header;
